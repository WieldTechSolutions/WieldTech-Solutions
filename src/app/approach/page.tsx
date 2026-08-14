import type { Metadata } from "next";

import { ContactSection } from "@/components/contact/ContactSection";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "แนวทางทำงาน | ออกแบบและพัฒนาเว็บไซต์",
  description:
    "ขั้นตอนทำงานของ WieldTech ตั้งแต่เข้าใจเป้าหมายธุรกิจ วางกลยุทธ์ ออกแบบ UX/UI พัฒนา ทดสอบ และส่งมอบเว็บไซต์หรือระบบเว็บแอปพลิเคชัน",
  alternates: { canonical: "/approach" },
  openGraph: {
    url: "/approach",
    title: "WieldTech - แนวทางทำงาน | ออกแบบและพัฒนาเว็บไซต์",
    description:
      "กระบวนการออกแบบและพัฒนาเว็บไซต์ที่ชัดเจน ยืดหยุ่น และมุ่งสู่ผลลัพธ์ทางธุรกิจ",
  },
};

const steps = [
  {
    number: "01",
    title: "ทำความเข้าใจเป้าหมาย",
    description:
      "เราเริ่มจากการพูดคุยถึงธุรกิจ ผู้ใช้งาน และผลลัพธ์ที่คุณต้องการ เพื่อวางโจทย์ให้ชัดก่อนเริ่มออกแบบ",
  },
  {
    number: "02",
    title: "วางกลยุทธ์และโครงสร้าง",
    description:
      "จัดลำดับเนื้อหา ฟีเจอร์ และเส้นทางของผู้ใช้งานให้ตอบโจทย์ทั้งเป้าหมายทางธุรกิจและการใช้งานจริง",
  },
  {
    number: "03",
    title: "ออกแบบประสบการณ์",
    description:
      "เปลี่ยนกลยุทธ์ให้เป็นหน้าจอที่ชัดเจน สวยงาม เข้าถึงง่าย และสะท้อนตัวตนของแบรนด์อย่างมีเหตุผล",
  },
  {
    number: "04",
    title: "พัฒนาอย่างเป็นระบบ",
    description:
      "พัฒนาด้วยเทคโนโลยีที่เหมาะสม โค้ดดูแลต่อได้ และตรวจสอบรายละเอียดตลอดกระบวนการทำงาน",
  },
  {
    number: "05",
    title: "ทดสอบและส่งมอบ",
    description:
      "เราทดสอบให้เว็บไซต์ใช้งานได้ดีในทุกอุปกรณ์ พร้อมส่งมอบสิ่งที่ทีมของคุณนำไปต่อยอดได้อย่างมั่นใจ",
  },
  {
    number: "06",
    title: "ดูแลและต่อยอด",
    description:
      "เราพร้อมดูแล ปรับปรุง และพัฒนาต่อ เพื่อให้เว็บไซต์เติบโตไปพร้อมกับเป้าหมายทางธุรกิจของคุณ",
  },
];

export default function ApproachPage() {
  return (
    <main>
      <Header />
      <article className="approach-page">
        <header className="website-types-section portfolio-page approach-hero" aria-labelledby="approach-page-title">
          <small className="section-side-label">OUR APPROACH</small>
          <h1 id="approach-page-title" className="work-page-title">แนวทางทำงาน</h1>
          <p className="website-types-description">
            ทุกโปรเจกต์มีบริบทต่างกัน เราจึงทำงานร่วมกับคุณเป็นลำดับขั้น
            เพื่อเปลี่ยนเป้าหมายทางธุรกิจให้กลายเป็นประสบการณ์ดิจิทัลที่ใช้งานได้จริง
          </p>
        </header>

        <section className="approach-intro">
          <small className="section-side-label">OUR APPROACH</small>
          <h2>กระบวนการที่ชัดเจน แต่ยืดหยุ่นตามความต้องการ</h2>
          <p>
            เราเปิดพื้นที่ให้การตัดสินใจเกิดขึ้นจากข้อมูลและการสื่อสารที่ตรงไปตรงมา
            เพื่อให้ทุกขั้นตอนพาโปรเจกต์เข้าใกล้ผลลัพธ์ที่ถูกต้องมากขึ้น
          </p>
        </section>

        <section className="approach-steps" aria-label="ขั้นตอนการทำงาน">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </section>

      </article>
      <ContactSection />
    </main>
  );
}
