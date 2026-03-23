import { NextResponse } from "next/server";
import { Resend } from "resend";

import { validateContactPayload } from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const emailFrom = process.env.EMAIL_FROM;
  const emailTo = process.env.EMAIL_TO;

  if (!process.env.RESEND_API_KEY || !emailFrom || !emailTo) {
    return NextResponse.json(
      { success: false, message: "Contact service is not configured." },
      { status: 503 }
    );
  }

  try {
    const payload = await req.json();
    const { data, errors } = validateContactPayload(payload);

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Invalid contact form.", errors },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Message:
        ${data.message}
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email with Resend:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
