import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "kwelchphysio@gmail.com";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot — pretend success for bots
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const contact = body.contact?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !(phone || email || contact)) {
    return NextResponse.json(
      { ok: false, error: "Name and at least one contact method are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Netlify Forms still captures the submission; report failure here so the
    // client only shows success if at least one channel worked.
    console.warn("RESEND_API_KEY not set — skipping email relay.");
    return NextResponse.json({ ok: false, error: "Email relay not configured" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      // TODO: switch to a verified sender domain (e.g. hello@welchphysio.com) in Resend
      from: "Welch Physio Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `New website message from ${name}`,
      text: [
        `Name: ${name}`,
        phone && `Phone: ${phone}`,
        email && `Email: ${email}`,
        contact && `Phone or email: ${contact}`,
        message && `\nMessage:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
