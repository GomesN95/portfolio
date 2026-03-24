import type { Metadata } from "next";

import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import "./globals.css";

const dictionary = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.gomesnicolas.com"),
  title: dictionary.metadata.title,
  description: dictionary.metadata.description,
  openGraph: {
    title: dictionary.metadata.title.default,
    description: dictionary.metadata.description,
    url: "https://portfolio.gomesnicolas.com",
    siteName: "Nicolas Gomes Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dictionary.metadata.title.default,
    description: dictionary.metadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
