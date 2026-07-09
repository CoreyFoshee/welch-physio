import { NextResponse } from "next/server";
import { EmailAddress, MailerooClient } from "maileroo-sdk";

const TO_RECIPIENTS: EmailAddress[] = [
  new EmailAddress("info@welchphysio.com", "Welch Physio"),
  new EmailAddress("corey@cfdesign.studio", "Corey Foshee"),
];

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

  if (body.formVariant === "mini" && !message) {
    return NextResponse.json(
      { ok: false, error: "Message is required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.MAILEROO_API_KEY;
  if (!apiKey) {
    console.warn("MAILEROO_API_KEY not set — skipping email relay.");
    return NextResponse.json({ ok: false, error: "Email relay not configured" }, { status: 503 });
  }

  const fromEmail =
    process.env.MAILEROO_FROM_EMAIL ?? "web@welchphysio.com";
  const fromName = process.env.MAILEROO_FROM_NAME ?? "Welch Physio Website";

  const text = [
    `Name: ${name}`,
    phone && `Phone: ${phone}`,
    email && `Email: ${email}`,
    contact && `Phone or email: ${contact}`,
    message && `\nMessage:\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const client = new MailerooClient(apiKey);
    await client.sendBasicEmail({
      from: new EmailAddress(fromEmail, fromName),
      to: TO_RECIPIENTS,
      reply_to: email ? new EmailAddress(email, name) : undefined,
      subject: `New website message from ${name}`,
      plain: text,
      html: text.replace(/\n/g, "<br>"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Maileroo send failed:", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
  }
}
