import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { websiteTypes } from "@/lib/website-types";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const type = websiteTypes.find((item) => item.slug === slug);

  return {
    title: type?.title ? "รับทำ" + type.title : "บริการออกแบบและพัฒนาเว็บไซต์",
    description: type
      ? "WieldTech รับออกแบบและพัฒนา" + type.title + " " + type.description + " พร้อมวางโครงสร้างให้ตอบโจทย์การใช้งานและเป้าหมายธุรกิจ"
      : "รายละเอียดบริการออกแบบและพัฒนาเว็บไซต์ ระบบเว็บแอปพลิเคชัน และแพลตฟอร์มดิจิทัลจาก WieldTech",
    alternates: { canonical: "/website-types/" + slug },
    openGraph: {
      url: "/website-types/" + slug,
      title: type
        ? "WieldTech - รับทำ" + type.title
        : "WieldTech - บริการออกแบบและพัฒนาเว็บไซต์",
      description: type
        ? type.description + " โดยทีมออกแบบและพัฒนาเว็บไซต์ WieldTech"
        : "บริการออกแบบและพัฒนาเว็บไซต์จาก WieldTech",
    },
  };
}

export default async function WebsiteTypePage({ params }: PageProps) {
  const { slug } = await params;
  const type = websiteTypes.find((item) => item.slug === slug);

  if (!type) notFound();

  return (
    <main>
      <Header />
      <article className="website-detail-page">
        <header className="website-detail-hero">
          <p>{type.category.toUpperCase()}</p>
          <h1>{type.title}</h1>
          <div>{type.description}</div>
        </header>
        <section className="website-detail-section">
          <h2>ระบบนี้ช่วยธุรกิจคุณยังไง</h2>
          <ul className="website-benefit-list">
            {type.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </section>
        <section className="website-detail-section">
          <h2>ผลงานจริงในหมวด{type.category}</h2>
          <div className="website-detail-work">
            <article><span>01</span><h3>ประสบการณ์ที่ชัดเจนตั้งแต่หน้าแรก</h3><p>ออกแบบโครงสร้างเนื้อหาและจุดติดต่อให้ผู้ใช้เดินทางต่อได้ง่าย</p></article>
            <article><span>02</span><h3>ภาพลักษณ์ที่เล่าเรื่องแบรนด์</h3><p>ผสานรายละเอียดของแบรนด์เข้ากับประสบการณ์ที่ใช้งานได้จริง</p></article>
          </div>
        </section>
        <section className="website-detail-section">
          <h2>เว็บของคุณจะหน้าตาแบบนี้</h2>
          <div className="website-preview" aria-label="ตัวอย่างโครงสร้างหน้าเว็บไซต์">
            <div className="website-preview-nav" />
            <div className="website-preview-hero"><span /><span /><span /></div>
            <div className="website-preview-grid"><i /><i /><i /></div>
          </div>
        </section>
        <section className="website-detail-section">
          <h2>ผลงานทั้งหมดในหมวดนี้</h2>
          <a className="website-detail-cta" href="/#contact">ปรึกษาโปรเจกต์ของคุณ</a>
        </section>
      </article>
    </main>
  );
}
