import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { triggerEvent } = payload;

    if (triggerEvent !== "BOOKING_CREATED") {
      return NextResponse.json({ ok: true });
    }

    const booking = payload.payload;
    const responses = booking.responses || {};

    const name = responses.name?.value || booking.attendees?.[0]?.name || null;
    const email = responses.email?.value || booking.attendees?.[0]?.email || null;
    const company = responses.company?.value || null;
    const website = responses.website?.value || null;
    const industry = responses.industry?.value || null;
    const challenge = responses.challenge?.value || null;
    const bookingTime = booking.startTime || null;
    const meetingUrl = booking.metadata?.videoCallUrl || null;

    // Store in Supabase
    const { error } = await supabase.from("form_submissions").insert({
      full_name: name,
      business_name: company,
      website: website,
      email: email,
      industry: industry,
      headache: challenge,
      form_type: "cal_booking",
    });

    if (error) {
      console.error("Supabase insert error:", error);
    }

    // Send Telegram notification via n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "cal_booking",
          fullName: name,
          email: email,
          businessName: company,
          website: website,
          industry: industry,
          headache: challenge,
          bookingTime: bookingTime,
          meetingUrl: meetingUrl,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Cal webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
