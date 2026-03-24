import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import ContactForm from "./components/contact-form/contact-form";
import styles from "./contact.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.contact.metadataTitle,
    description: dictionary.contact.metadataDescription,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className={styles.contactPage}>
      <ContactForm locale={locale} />
    </div>
  );
}
