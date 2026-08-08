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
    <html lang="th" className="h-full">
      <body className="min-h-full">
        {children}
        <Footer />
      </body>
    </html>
  );
}
