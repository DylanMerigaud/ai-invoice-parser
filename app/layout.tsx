import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://ai-invoice-parser-rho.vercel.app";
const TITLE = "AI Invoice Parser";
const DESCRIPTION =
  "Drop a PDF invoice and get schema-validated structured data plus automated anomaly flags. Claude reads the document directly — every result is validated with Zod at the boundary before you see it.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // opengraph-image.tsx is picked up automatically; the blocks below complete
  // the unfurl (title / description / large-image card) for Slack, X, LinkedIn.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
