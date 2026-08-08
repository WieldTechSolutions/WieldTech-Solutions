import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/kanit/400.css";
import "@fontsource/kanit/500.css";
import "@fontsource/kanit/700.css";

import { Footer } from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wieldtech.dev"),
  title: {
    default: "WieldTech | Digital Experiences",
    template: "%s | WieldTech",
  },
  description:
    "WieldTech designs and builds thoughtful web experiences, from strategy and UX/UI design to high-performance web development.",
  keywords: [
    "web development",
    "UX/UI design",
    "digital agency",
    "Thailand",
    "Phuket",
    "website design",
    "WieldTech",
  ],
  authors: [{ name: "WieldTech" }],
  creator: "WieldTech",
  icons: {
    icon: "/brand/wieldtech-tab.png",
    shortcut: "/brand/wieldtech-tab.png",
    apple: "/brand/wieldtech-tab.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "WieldTech",
    title: "WieldTech | Digital Experiences",
    description: "We design and build thoughtful web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WieldTech | Digital Experiences",
    description: "We design and build thoughtful web experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className="h-full">
      <body className="min-h-full">
        {children}
        <Footer />
      </body>
    </html>
  );
}
