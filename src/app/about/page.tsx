import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | ทีมออกแบบและพัฒนาเว็บไซต์",
  description:
    "รู้จัก WieldTech ทีมออกแบบ UX/UI และพัฒนาเว็บไซต์ ระบบเว็บแอปพลิเคชัน และผลิตภัณฑ์ดิจิทัลสำหรับธุรกิจที่ต้องการเติบโตอย่างยั่งยืน",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "WieldTech - เกี่ยวกับเรา | ทีมออกแบบและพัฒนาเว็บไซต์",
    description:
      "ทีมดิจิทัลที่ผสานกลยุทธ์ การออกแบบ และเทคโนโลยี เพื่อสร้างเว็บไซต์และผลิตภัณฑ์ที่ใช้งานได้จริง",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <article className="about-page">
        <header className="website-types-section portfolio-page about-hero" aria-labelledby="about-page-title">
          <small className="website-types-side-label">ABOUT WIELDTECH</small>
          <h1 id="about-page-title" className="work-page-title">เกี่ยวกับเรา</h1>
          <p className="website-types-description">
            WieldTech คือสตูดิโอดิจิทัลที่ผสานกลยุทธ์ การออกแบบ และเทคโนโลยี
            เพื่อสร้างเว็บไซต์และผลิตภัณฑ์ดิจิทัลที่ชัดเจน ใช้งานง่าย และเติบโตไปพร้อมกับธุรกิจของคุณ
          </p>
        </header>
        <section className="about-section">
          <h2>เราเชื่อในประสบการณ์ที่ดี</h2>
          <p>
            ทุกหน้าจอควรช่วยให้ผู้คนเข้าใจ ตัดสินใจ และลงมือทำได้อย่างมั่นใจ
            เราจึงเริ่มจากการทำความเข้าใจเป้าหมายของธุรกิจ ก่อนแปลงสิ่งนั้นให้เป็นประสบการณ์ที่เรียบง่ายและน่าจดจำ
          </p>
        </section>
        <section className="about-principles">
          <article><span>01</span><h2>คิดให้ชัด</h2><p>วางกลยุทธ์และโครงสร้างจากสิ่งที่ธุรกิจต้องการจริง</p></article>
          <article><span>02</span><h2>ออกแบบให้ใช้ได้</h2><p>สร้างส่วนติดต่อที่สวยงาม เข้าใจง่าย และเข้าถึงได้สำหรับทุกคน</p></article>
          <article><span>03</span><h2>พัฒนาให้เติบโต</h2><p>เลือกเทคโนโลยีที่ยืดหยุ่น ดูแลต่อได้ และพร้อมรับการเปลี่ยนแปลง</p></article>
        </section>
      </article>
      <ContactSection />
    </main>
  );
}
