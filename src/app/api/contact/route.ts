import { NextResponse } from "next/server";
import { Resend } from "resend";

import { isLocale, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getContactErrorMessage, validateContactPayload } from "@/lib/contact";

function resolveLocale(req: Request): Locale {
  const locale = new URL(req.url).searchParams.get("locale");
  return locale && isLocale(locale) ? locale : "en";
}

export async function POST(req: Request) {
  const locale = resolveLocale(req);
  const dictionary = getDictionary(locale);
  const emailFrom = process.env.EMAIL_FROM;
  const emailTo = process.env.EMAIL_TO;

  if (!process.env.RESEND_API_KEY || !emailFrom || !emailTo) {
    return NextResponse.json({ success: false, message: dictionary.contact.api.serviceNotConfigured }, { status: 503 });
  }

  try {
    const payload = await req.json();
    const { data, errors } = validateContactPayload(payload);

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message: dictionary.contact.api.invalidForm,
          errors: errors.map((error) => getContactErrorMessage(error, locale)),
        },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

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

    return NextResponse.json({ success: true, message: dictionary.contact.api.success });
  } catch (error) {
    console.error("Error sending email with Resend:", error);

    return NextResponse.json({ success: false, message: dictionary.contact.api.failed }, { status: 500 });
  }
}
