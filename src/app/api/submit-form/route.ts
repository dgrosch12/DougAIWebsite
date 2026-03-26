import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
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
