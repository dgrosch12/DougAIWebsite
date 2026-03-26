import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip)?.filter((t) => now - t < RATE_LIMIT_WINDOW) || [];
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimit.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    const body = await request.json();

    const { fullName, businessName, website, email, industry, leadVolume, budget, interestedProduct, headache, formType } = body;

    const isWaitlist = formType === "waitlist";

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!isWaitlist && (!fullName?.trim() || !businessName?.trim() || !industry || !headache?.trim())) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("form_submissions").insert({
      full_name: fullName?.trim() || null,
      business_name: businessName?.trim() || null,
      website: website?.trim() || null,
      email: email.trim(),
      industry: industry || null,
      lead_volume: leadVolume || null,
      budget: budget || null,
      interested_product: interestedProduct || null,
      headache: headache?.trim() || null,
      form_type: isWaitlist ? "waitlist" : "intake",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }

    // Notify n8n webhook for Telegram notification (fire-and-forget)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, businessName, website, email, industry, leadVolume, budget, interestedProduct, headache, formType: isWaitlist ? "waitlist" : "intake" }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    console.error("Form submission error");
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
