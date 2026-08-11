import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { projects as portfolioProjects } from "@/components/OurWorkSection";
import { WebsitePreviewPagination } from "@/components/WebsitePreviewSlider";
import { websiteTypes } from "@/lib/website-types";

const typeBenefitIcons = {
  "corporate-website": ["briefcase-business", "dashboard", "presentation", "timeline"],
  "landing-page": ["bullseye", "target", "gauge", "milestone"],
  ecommerce: ["storefront", "checkout-form", "order-tracking", "recurring-arrows"],
  "web-application": ["process-table", "callback-queue", "interface-contract", "pipeline-stages"],
  "digital-platform": ["container-orchestrator", "webhook-callback", "dependency-tree", "event-loop"],
  portfolio: ["certificate", "medal", "image-carousel", "podium"],
} as const;

const typeWorkIndexes = {
  "corporate-website": [0, 4, 6, 8, 10, 11],
  "landing-page": [6, 7, 4, 9, 10, 11],
  ecommerce: [1, 5, 7, 9, 10, 11],
  "web-application": [10, 11, 4, 6, 7, 9],
  "digital-platform": [6, 10, 11, 4, 7, 9],
  portfolio: [2, 8, 0, 4, 6, 9],
} as const;

const typeBenefits = {
  "corporate-website": [
    ["สร้างความน่าเชื่อถือให้แบรนด์", "นำเสนอเรื่องราว จุดแข็ง และบริการขององค์กรให้ผู้เข้าชมเข้าใจและไว้วางใจได้ทันที"],
    ["สื่อสารข้อมูลสำคัญอย่างเป็นระบบ", "จัดโครงสร้างเนื้อหา ข่าวสาร และข้อมูลธุรกิจให้ค้นหาได้ง่ายในทุกอุปกรณ์"],
    ["เพิ่มโอกาสในการติดต่อธุรกิจ", "วางจุดติดต่อและคำกระตุ้นการตัดสินใจให้ผู้สนใจเปลี่ยนเป็นลูกค้าได้สะดวก"],
    ["ต่อยอดภาพลักษณ์องค์กรในระยะยาว", "ระบบเนื้อหาที่ยืดหยุ่น รองรับการขยายบริการและการเติบโตของธุรกิจในอนาคต"],
  ],
  "landing-page": [
    ["สื่อสารข้อเสนอให้ชัดเจน", "เล่าแคมเปญหรือบริการตามลำดับที่เข้าใจง่าย เพื่อให้ผู้เข้าชมเห็นคุณค่าทันที"],
    ["เพิ่มอัตราการตัดสินใจ", "ออกแบบเส้นทางและจุดกระตุ้นที่นำผู้เข้าชมไปสู่การลงทะเบียน ติดต่อ หรือสั่งซื้อ"],
    ["วัดผลแคมเปญได้แม่นยำ", "เชื่อมต่อเครื่องมือวิเคราะห์เพื่อดูผลลัพธ์และนำข้อมูลมาปรับปรุงแคมเปญได้ต่อเนื่อง"],
    ["เปิดตัวได้รวดเร็ว", "โครงสร้างหน้าเว็บที่พร้อมใช้งาน ช่วยให้ทีมสื่อสารแคมเปญและทดลองแนวคิดได้ไวขึ้น"],
  ],
  ecommerce: [
    ["ค้นหาและเลือกสินค้าได้ง่าย", "จัดหมวดหมู่ ฟิลเตอร์ และหน้าสินค้าให้ลูกค้าพบสิ่งที่ต้องการได้รวดเร็วขึ้น"],
    ["ลดขั้นตอนก่อนชำระเงิน", "ออกแบบตะกร้าและขั้นตอนสั่งซื้อให้กระชับ เพื่อลดการหลุดออกระหว่างการตัดสินใจ"],
    ["บริหารคำสั่งซื้อเป็นระบบ", "เชื่อมต่อข้อมูลสินค้า สต็อก และคำสั่งซื้อ เพื่อให้ทีมทำงานได้รวดเร็วและแม่นยำ"],
    ["สร้างยอดขายซ้ำอย่างต่อเนื่อง", "วางประสบการณ์หลังการซื้อและข้อเสนอที่เหมาะสม เพื่อให้ลูกค้ากลับมาซื้อได้ง่ายขึ้น"],
  ],
  "web-application": [
    ["ลดงานซ้ำซ้อนในกระบวนการทำงาน", "รวมขั้นตอนสำคัญไว้ในระบบเดียว เพื่อให้ทีมทำงานได้เร็วขึ้นและลดความผิดพลาด"],
    ["รวมข้อมูลสำคัญไว้ในที่เดียว", "ออกแบบแดชบอร์ดและข้อมูลที่เกี่ยวข้องให้ทุกคนเห็นภาพเดียวกันและตัดสินใจได้ง่าย"],
    ["ออกแบบสิทธิ์และขั้นตอนให้เหมาะกับทีม", "กำหนดบทบาทผู้ใช้งานและเวิร์กโฟลว์ให้สอดคล้องกับการทำงานจริงของธุรกิจ"],
    ["ต่อยอดธุรกิจให้เติบโตได้อย่างต่อเนื่อง", "สร้างระบบที่ยืดหยุ่น พร้อมรองรับฟีเจอร์ ผู้ใช้ และกระบวนการใหม่ในอนาคต"],
  ],
  "digital-platform": [
    ["รองรับผู้ใช้และบริการที่ขยายตัว", "วางโครงสร้างแพลตฟอร์มให้รองรับการเติบโตของจำนวนผู้ใช้และบริการได้อย่างมั่นคง"],
    ["เชื่อมต่อข้อมูลและบริการได้เป็นระบบ", "รวมประสบการณ์จากหลายส่วนให้ผู้ใช้เข้าถึงข้อมูลและเครื่องมือที่เกี่ยวข้องได้ง่าย"],
    ["จัดการประสบการณ์ผู้ใช้ได้ชัดเจน", "ออกแบบเส้นทางใช้งานที่เหมาะกับผู้ใช้แต่ละกลุ่ม เพื่อให้ใช้งานแพลตฟอร์มได้ต่อเนื่อง"],
    ["ต่อยอดฟีเจอร์ใหม่ได้ยืดหยุ่น", "สถาปัตยกรรมที่รองรับการพัฒนาและเชื่อมต่อบริการใหม่ตามเป้าหมายของธุรกิจ"],
  ],
  portfolio: [
    ["เล่าเรื่องผลงานอย่างมีลำดับ", "จัดโครงสร้างเนื้อหาให้ผู้ชมเข้าใจแนวคิด กระบวนการ และผลลัพธ์ของแต่ละผลงานได้ง่าย"],
    ["สร้างความน่าเชื่อถือจากผลงานจริง", "นำเสนอเคสศึกษาและรายละเอียดสำคัญ เพื่อแสดงความเชี่ยวชาญและคุณค่าที่ทำให้ลูกค้า"],
    ["เน้นจุดเด่นให้จดจำได้ทันที", "ออกแบบภาพและเนื้อหาให้สะท้อนเอกลักษณ์ของแบรนด์หรือสตูดิโออย่างชัดเจน"],
    ["เปลี่ยนผู้ชมให้เป็นโอกาสใหม่", "วางจุดติดต่อและคำเชิญชวนที่เหมาะสม เพื่อให้ผู้สนใจเริ่มต้นพูดคุยได้สะดวก"],
  ],
} as const;

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

  const benefits = typeBenefits[type.slug];
  const icons = typeBenefitIcons[type.slug];
  const categoryWorkIndexes = typeWorkIndexes[type.slug] as readonly number[];
  const categoryProjects = categoryWorkIndexes.map((index) => portfolioProjects[index]);
  const previewProjects = [
    ...categoryProjects,
    ...portfolioProjects.filter((_, index) => !categoryWorkIndexes.includes(index)),
  ].slice(0, 10);
  const previewGroups = Array.from(
    { length: Math.ceil(previewProjects.length / 2) },
    (_, index) => previewProjects.slice(index * 2, index * 2 + 2),
  );
  const previewSlides = [previewGroups.at(-1)!, ...previewGroups, previewGroups[0]];

  return (
    <main>
      <Header />
      <article className="website-types-section portfolio-page website-detail-page">
        <h1 className="work-page-title">{type.title}</h1>
        <small className="section-side-label">WEBSITE TYPE</small>
        <p className="website-types-description">{type.description}</p>
        <section className="website-detail-section">
          <small className="section-side-label">BUSINESS VALUE</small>
          <h2>ระบบนี้ช่วยธุรกิจคุณยังไง</h2>
          <p className="website-detail-section-description">
            เราออกแบบ {type.title} ให้เป้าหมายทางธุรกิจชัดเจนขึ้น ลดขั้นตอนที่ไม่จำเป็น และเปลี่ยนผู้เข้าชมให้กลายเป็นโอกาสใหม่ของธุรกิจคุณ
          </p>
          <ul className="website-benefit-list">
            {benefits.map(([title, description], index) => (
              <li key={title}>
                <i>
                  <img
                    alt=""
                    src={`/icons/${type.slug}/${icons[index]}.svg`}
                    draggable={false}
                  />
                </i>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="website-detail-section website-detail-section--spaced">
          <small className="section-side-label">CASE STUDIES</small>
          <h2>ผลงานจริงในหมวด{type.category}</h2>
          <p className="website-detail-section-description">
            คัดสรรผลงานที่สะท้อนแนวคิดการออกแบบและการพัฒนาสำหรับ {type.category} เพื่อให้เห็นประสบการณ์ใช้งานจริงอย่างชัดเจน
          </p>
          <div className="website-detail-work website-types-grid work-ios-grid">
            {categoryProjects.map((project, index) => (
              <div className="ios-window-cell" key={project.title}>
                <a className="ios-window" href={`/work/${project.slug}`}>
                  <div className="ios-window-bar" aria-hidden="true"><span /><span /><span /></div>
                  <div className="ios-window-content">
                    <div className="work-card-heading"><h3>{project.title}</h3></div>
                    <div className="work-card-media-frame">
                      <span className="work-card-bookmark" aria-label="แนะนำ">
                        <span className="work-card-bookmark-shape" aria-hidden="true" />
                        <span className="work-card-bookmark-star" aria-hidden="true" />
                      </span>
                      <div className="work-card-media">
                        <img alt={`ตัวอย่างหน้าเว็บไซต์ ${project.title}`} src={project.image} draggable={false} />
                      </div>
                    </div>
                    <span>{project.copy}</span>
                    <span className="ios-window-detail">ดูรายละเอียด</span>
                  </div>
                </a>
              </div>
            ))}
            <span className="website-types-grid-divider" aria-hidden="true" />
          </div>
        </section>
        <section className="website-detail-section website-detail-section--spaced">
          <small className="section-side-label">WEBSITE PREVIEWS</small>
          <h2>เว็บของคุณจะหน้าตาแบบนี้</h2>
          <p className="website-detail-section-description">
            ตัวอย่างแนวทางการจัดวางเนื้อหาและองค์ประกอบสำคัญ ที่ออกแบบให้สอดคล้องกับเป้าหมายของ {type.title}
          </p>
          <div className="website-preview-slider" aria-label="ตัวอย่างหน้าเว็บไซต์">
            <div
              className="website-preview-slider-track"
              style={{ "--preview-track-count": previewSlides.length } as CSSProperties}
            >
              {previewSlides.map((projects, slideIndex) => {
                const isDuplicate = slideIndex === 0 || slideIndex === previewSlides.length - 1;

                return (
                <div className="website-preview-slider-group" aria-hidden={isDuplicate || undefined} key={slideIndex}>
                  {projects.map((project) => (
                    <div className="website-preview-card ios-window ios-window--preview-only" key={`${project.title}-${slideIndex}`}>
                      <div className="ios-window-bar" aria-hidden="true"><span /><span /><span /></div>
                      <div className="ios-window-content">
                        <div className="work-card-media-frame">
                          <div className="work-card-media">
                            <img alt={isDuplicate ? "" : `ตัวอย่างหน้าเว็บไซต์ ${project.title}`} src={project.image} draggable={false} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                );
              })}
            </div>
          </div>
          <WebsitePreviewPagination pageCount={previewGroups.length} />
        </section>
      </article>
      <ContactSection />
    </main>
  );
}
