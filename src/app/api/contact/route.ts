import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, lang } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // TODO: plug in your email/CRM here.
    // Example (pseudo):
    // await sendEmail({ to: "you@domain", subject: `New inquiry from ${name}`, text: JSON.stringify(body, null, 2) });

    console.log("[CONTACT] New inquiry:", { name, email, phone, message, lang });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[CONTACT] Error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
