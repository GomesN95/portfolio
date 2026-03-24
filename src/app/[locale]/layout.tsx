import { notFound } from "next/navigation";

import { Header } from "@/components/header/header";
import { isLocale } from "@/i18n/config";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={locale} />
      {children}
    </>
  );
}
