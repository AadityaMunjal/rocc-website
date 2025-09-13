import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROCC | Rutgers Organization of Cloud Computing",
  description:
    "Join the Rutgers Organization of Cloud Computing to learn, build, and innovate with cloud technologies.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://rocc.dev"),
  openGraph: {
    type: "website",
    title: "ROCC | Rutgers Organization of Cloud Computing",
    description:
      "Join the Rutgers Organization of Cloud Computing to learn, build, and innovate with cloud technologies.",
    siteName: "ROCC",
    url: "https://rocc.dev",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "ROCC Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
