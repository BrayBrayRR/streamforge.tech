import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "StreamForge — Automate your business, stop losing leads";
const defaultDescription =
  "StreamForge automates lead response, follow-up, and booking for service businesses — so you stop losing time, leads, and revenue.";

export const metadata: Metadata = {
  metadataBase: new URL("https://streamforge.tech"),
  title: {
    default: defaultTitle,
    template: "%s · StreamForge",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "StreamForge",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
