import type { Metadata } from "next";

import { Header } from "@/components/header/header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.gomesnicolas.com"),
  title: {
    default: "Nicolas Gomes | Full Stack Developer",
    template: "%s | Nicolas Gomes",
  },
  description: "Portfolio of Nicolas Gomes, full-stack developer, featuring experience, projects, and contact details.",
  openGraph: {
    title: "Nicolas Gomes | Full Stack Developer",
    description: "Portfolio of Nicolas Gomes, full-stack developer, featuring experience, projects, and contact details.",
    url: "https://portfolio.gomesnicolas.com",
    siteName: "Nicolas Gomes Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Gomes | Full Stack Developer",
    description: "Portfolio of Nicolas Gomes, full-stack developer, featuring experience, projects, and contact details.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
