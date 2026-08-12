import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  preload: false,
  fallback: ["Arial", "sans-serif"],
});

const kanit = localFont({
  src: [
    { path: "./fonts/kanit-thai-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/kanit-thai-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/kanit-thai-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wieldtech.dev"),
  title: {
    default: "WieldTech - รับทำเว็บไซต์และระบบเว็บแอปพลิเคชัน",
    template: "WieldTech - %s",
  },
  description:
    "WieldTech รับออกแบบและพัฒนาเว็บไซต์องค์กร ร้านค้าออนไลน์ ระบบเว็บแอปพลิเคชัน และแพลตฟอร์มดิจิทัล ที่ใช้งานง่าย รองรับการเติบโตของธุรกิจ",
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำเว็บแอปพลิเคชัน",
    "พัฒนาระบบเว็บ",
    "ออกแบบเว็บไซต์",
    "ออกแบบ UX/UI",
    "เว็บไซต์องค์กร",
    "ร้านค้าออนไลน์",
    "ดิจิทัลเอเจนซี",
    "ประเทศไทย",
    "สุพรรณบุรี",
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
    title: "WieldTech - รับทำเว็บไซต์และระบบเว็บแอปพลิเคชัน",
    description:
      "รับออกแบบและพัฒนาเว็บไซต์องค์กร ร้านค้าออนไลน์ ระบบเว็บแอปพลิเคชัน และแพลตฟอร์มดิจิทัลที่พร้อมเติบโตไปกับธุรกิจ",
  },
  twitter: {
    card: "summary_large_image",
    title: "WieldTech - รับทำเว็บไซต์และระบบเว็บแอปพลิเคชัน",
    description:
      "รับออกแบบและพัฒนาเว็บไซต์องค์กร ร้านค้าออนไลน์ ระบบเว็บแอปพลิเคชัน และแพลตฟอร์มดิจิทัลที่พร้อมเติบโตไปกับธุรกิจ",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
