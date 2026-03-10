import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom — Discover the Bible in a New Way",
  description:
    "Bloom is a beautiful Bible app with guided audio prayers, AI-powered study, daily verse readings, and a personalized spiritual journey. Available on iOS.",
  keywords: [
    "Bible app",
    "audio prayers",
    "daily verse",
    "Bible study",
    "Christian app",
    "spiritual growth",
    "guided prayer",
  ],
  openGraph: {
    title: "Bloom — Discover the Bible in a New Way",
    description:
      "Guided audio prayers, AI Bible study, daily readings, and a personalized spiritual journey.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom — Discover the Bible in a New Way",
    description:
      "Guided audio prayers, AI Bible study, daily readings, and a personalized spiritual journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bloom_leaf.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
