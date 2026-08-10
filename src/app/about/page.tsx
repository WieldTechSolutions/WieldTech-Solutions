import type { Metadata } from "next";
import Image from "next/image";

import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";

const principles: Array<{
  number: string;
  title: string;
  description: string;
  icons: string[];
}> = [
  {
    number: "01",
    title: "คิดให้ชัด",
    description: "วางกลยุทธ์และโครงสร้างจากเป้าหมายจริงของธุรกิจ เพื่อให้ทุกการตัดสินใจนำไปสู่ผลลัพธ์ที่ชัดเจน",
    icons: ["brain", "compass", "target"],
  },
  {
    number: "02",
    title: "ออกแบบให้ใช้ได้",
    description: "สร้างประสบการณ์ที่สวยงาม เข้าใจง่าย และช่วยให้ผู้ใช้ทำสิ่งสำคัญได้อย่างมั่นใจในทุกจุดของการใช้งาน",
    icons: ["paintbrush", "ruler", "lightbulb"],
  },
  {
    number: "03",
    title: "พัฒนาให้เติบโต",
    description: "เลือกเทคโนโลยีที่ยืดหยุ่น ดูแลต่อได้ และพร้อมรองรับธุรกิจเมื่อความต้องการเติบโตหรือเปลี่ยนแปลง",
    icons: ["code", "growth-chart", "rocket"],
  },
];

const whyChooseUs = [
  {
    icon: "/icons/about/target.svg",
    title: "เริ่มจากเป้าหมายของคุณ",
    description: "เราเริ่มจากการเข้าใจธุรกิจและผลลัพธ์ที่คุณต้องการ เพื่อให้ทุกการตัดสินใจมีทิศทาง",
  },
  {
    icon: "/icons/about/handshake.svg",
    title: "ทำงานร่วมกันอย่างชัดเจน",
    description: "สื่อสารตรงไปตรงมา อัปเดตความคืบหน้าเสมอ และตัดสินใจร่วมกันได้อย่างมั่นใจ",
  },
  {
    icon: "/icons/about/cursor-arrow.svg",
    title: "ออกแบบเพื่อใช้งานจริง",
    description: "ทุกหน้าจอถูกออกแบบให้คนเข้าใจง่าย ทำงานสะดวก และช่วยพาผู้ใช้ไปถึงเป้าหมาย",
  },
  {
    icon: "/icons/about/growth-chart.svg",
    title: "พร้อมเติบโตไปด้วยกัน",
    description: "วางรากฐานที่ยืดหยุ่น ดูแลต่อได้ และพร้อมรองรับธุรกิจเมื่อความต้องการเปลี่ยนไป",
  },
] as const;

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
          <small className="section-side-label">ABOUT WIELDTECH</small>
          <h1 id="about-page-title" className="work-page-title">เกี่ยวกับเรา</h1>
          <p className="website-types-description">
            WieldTech คือสตูดิโอดิจิทัลที่ผสานกลยุทธ์ การออกแบบ และเทคโนโลยี
            เพื่อสร้างเว็บไซต์และผลิตภัณฑ์ดิจิทัลที่ชัดเจน ใช้งานง่าย และเติบโตไปพร้อมกับธุรกิจของคุณ
          </p>
        </header>
        <section className="about-section">
          <small className="section-side-label">OUR PRINCIPLES</small>
          <h2>เราเชื่อในประสบการณ์ที่ดี</h2>
          <p>
            ทุกหน้าจอควรช่วยให้ผู้คนเข้าใจ ตัดสินใจ และลงมือทำได้อย่างมั่นใจ
            เราจึงเริ่มจากการทำความเข้าใจเป้าหมายของธุรกิจ ก่อนแปลงสิ่งนั้นให้เป็นประสบการณ์ที่เรียบง่ายและน่าจดจำ
          </p>
        </section>
        <section className="about-principles" aria-label="หลักการทำงานของ WieldTech">
          {principles.map((principle) => (
            <article className="about-principle-card" key={principle.number}>
              <div className="about-principle-summary">
                <div>
                  <h2>{principle.title}</h2>
                  <p>{principle.description}</p>
                </div>
              </div>
              <div className="about-principle-demo" aria-hidden="true">
                <div className="about-principle-demo-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="about-principle-demo-content">
                  <div className="about-principle-demo-icons" aria-hidden="true">
                    {principle.icons.map((icon) => (
                      <Image key={icon} src={`/icons/about/${icon}.svg`} alt="" width={64} height={64} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <div className="about-principles-divider" aria-hidden="true" />
        <section className="about-why-us" aria-labelledby="why-us-title">
          <small className="section-side-label">WHY WIELDTECH</small>
          <h2 id="why-us-title">ทำไมต้องเลือกเรา</h2>
          <p>เราออกแบบและพัฒนาโดยมองทั้งผลลัพธ์ทางธุรกิจ ประสบการณ์ผู้ใช้ และการเติบโตระยะยาว</p>
          <div className="about-why-us-grid">
            {whyChooseUs.map((reason) => (
              <article key={reason.title}>
                <Image src={reason.icon} alt="" width={64} height={64} />
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
      <ContactSection />
    </main>
  );
}
