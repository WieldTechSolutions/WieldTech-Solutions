import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/components/OurWorkSection";
import { WorkPortfolioGrid } from "@/components/WorkPortfolioGrid";

export const metadata: Metadata = {
  title: "ผลงานออกแบบเว็บไซต์และเว็บแอปพลิเคชัน",
  description:
    "รวมผลงานออกแบบ UX/UI และพัฒนาเว็บไซต์ ร้านค้าออนไลน์ เว็บแอปพลิเคชัน และแพลตฟอร์มดิจิทัลของ WieldTech",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "WieldTech - ผลงานออกแบบเว็บไซต์และเว็บแอปพลิเคชัน",
    description:
      "สำรวจผลงานดิจิทัลที่เปลี่ยนโจทย์ธุรกิจให้เป็นเว็บไซต์และระบบที่ใช้งานได้จริง",
  },
};

export default function WorkPage() {
  return (
    <main>
      <Header />
      <section className="website-types-section portfolio-page" aria-labelledby="portfolio-page-title">
        <h1 id="portfolio-page-title" className="work-page-title">ผลงานของเรา</h1>
        <small className="section-side-label">OUR WORK</small>
        <p className="website-types-description text-base text-white">
          รวมโปรเจกต์ที่เราร่วมออกแบบและพัฒนา เพื่อเปลี่ยนโจทย์ทางธุรกิจให้กลายเป็นประสบการณ์ดิจิทัลที่มีความหมาย
        </p>
        <WorkPortfolioGrid projects={projects} />
      </section>
      <ContactSection />
    </main>
  );
}
