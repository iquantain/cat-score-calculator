import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "CAT Score Calculator 2025: Live (Check Now)",
  description:
    "Calculate your CAT exam percentile instantly with our fast and accurate CAT Score Calculator. Easy to use, mobile-friendly, and optimized for lightning-fast performance.",
  keywords:
    "cat score calculator,cat score predictor,cat 2025 score calculator,cat score calculator from response sheet,cat marks calculator,cat percentile calculator online,cat percentile calculator,CAT exam score,CAT exam score calculator",

  alternates: {
    canonical: "https://cat-score-calculator.vercel.app/",
  },

  openGraph: {
    type: "website",
    url: "https://cat-score-calculator.vercel.app/",
    title: "CAT Score Calculator 2025: Live (Check Now)",
    description:
      "Calculate your CAT exam percentile instantly with our fast and accurate CAT Score Calculator. Easy to use, mobile-friendly, and optimized for lightning-fast performance",
    siteName: "Vercel",
    images: [
      {
        url: "https://cat-score-calculator.vercel.app/cat-score-calculator.png",
        width: 720,
        height: 1280,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CAT Score Calculator 2025: Live (Check Now)",
    description:
      "Calculate your CAT exam percentile instantly with our fast and accurate CAT Score Calculator. Easy to use, mobile-friendly, and optimized for lightning-fast performance",
    images: [
      {
        url: "https://cat-score-calculator.vercel.app/cat-score-calculator.png",
        width: 1280,
        height: 720,
        type: "image/png",
      },
    ],
  },

  other: {
    "article:publisher": "https://facebook.com/",
    "article:published_time": "2025-12-03T11:48:23+00:00",
    "twitter:label2": "Est. reading time",
    "twitter:data2": "5 Minutes",
    "google-site-verification":
      "cM1Zln2IHIS29D2TLIbby1Z5ThVLLKLHgafSq6bcw3Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
