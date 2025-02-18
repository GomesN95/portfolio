import { NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: process.env.EMAIL_TO as string,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' });
  }
}
