import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sourcecontrol.audio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SOURCE CONTROL",
    template: "%s | SOURCE CONTROL",
  },
  description:
    "Underground electronic music from London, UK. Dubstep, techno, garage, and experimental bass.",
  keywords: [
    "SOURCE CONTROL",
    "underground electronic",
    "UK dubstep",
    "techno",
    "garage",
    "London",
  ],
  openGraph: {
    title: "SOURCE CONTROL",
    description: "Underground electronic music / London, UK",
    type: "website",
    siteName: "SOURCE CONTROL",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
