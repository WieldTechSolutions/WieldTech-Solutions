import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/components/OurWorkSection";
import { WorkPortfolioGrid } from "@/components/WorkPortfolioGrid";

export const metadata: Metadata = {
  title: "ผลงานของเรา",
  description: "รวมผลงานการออกแบบและพัฒนาเว็บไซต์ของ WieldTech",
};

export default function WorkPage() {
  return (
    <main>
      <Header />
      <section className="website-types-section portfolio-page" aria-labelledby="portfolio-page-title">
        <h1 id="portfolio-page-title" className="work-page-title">ผลงานของเรา</h1>
        <small className="website-types-side-label">OUR WORK</small>
        <p className="website-types-description text-base text-white">
          รวมโปรเจกต์ที่เราร่วมออกแบบและพัฒนา เพื่อเปลี่ยนโจทย์ทางธุรกิจให้กลายเป็นประสบการณ์ดิจิทัลที่มีความหมาย
        </p>
        <WorkPortfolioGrid projects={projects} />
      </section>
      <ContactSection />
    </main>
  );
}
