import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import type { CSSProperties } from "react";

import { ContactSection } from "@/components/contact/ContactSection";
import { projects } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { WebsitePreviewPagination } from "@/components/website-types/WebsitePreviewPagination";

type PageProps = { params: Promise<{ slug: string }> };

type DetailCard = readonly [string, string];

function getProjectDetailContent(project: { slug: string; title: string }) {
  const context = project.slug.includes("coffee")
    ? { subject: "เมล็ดกาแฟและสินค้าที่ตรงใจ", action: "เลือกซื้อและชำระเงิน", outcome: "สร้างความผูกพันกับลูกค้าคอกาแฟ" }
    : project.slug.includes("art") || project.slug.includes("creative")
      ? { subject: "นิทรรศการ กิจกรรม และคอลเลกชัน", action: "ค้นหาและวางแผนเข้าชม", outcome: "ชวนผู้คนกลับมามีส่วนร่วมกับพื้นที่" }
      : project.slug.includes("health") || project.slug.includes("healthcare")
        ? { subject: "บริการสุขภาพและผู้เชี่ยวชาญ", action: "ค้นหาบริการและนัดหมาย", outcome: "สร้างความมั่นใจก่อนเริ่มการดูแล" }
        : project.slug.includes("real-estate")
          ? { subject: "โครงการและข้อมูลอสังหาริมทรัพย์", action: "ค้นหาและเปรียบเทียบที่อยู่อาศัย", outcome: "ช่วยให้ผู้สนใจตัดสินใจได้เร็วขึ้น" }
          : project.slug.includes("learning")
            ? { subject: "หลักสูตรและเส้นทางการเรียนรู้", action: "ค้นหาบทเรียนและเริ่มเรียน", outcome: "สนับสนุนการพัฒนาทักษะอย่างต่อเนื่อง" }
            : project.slug.includes("business")
              ? { subject: "ข้อมูล งานบริการ และการทำงานของทีม", action: "เข้าถึงข้อมูลและจัดการงาน", outcome: "ช่วยให้ทีมทำงานร่วมกันได้คล่องตัวขึ้น" }
              : project.slug.includes("home") || project.slug.includes("lifestyle")
                ? { subject: "พื้นที่ การอยู่อาศัย และเรื่องราวของแบรนด์", action: "สำรวจรายละเอียดและแรงบันดาลใจ", outcome: "ยกระดับภาพลักษณ์ของแบรนด์ให้ชัดเจน" }
                : { subject: "ข้อมูลและบริการสำคัญของธุรกิจ", action: "ค้นหาข้อมูลและติดต่อทีม", outcome: "สร้างประสบการณ์ที่ชัดเจนและน่าเชื่อถือ" };

  const benefits: DetailCard[] = [
    [`สื่อสาร${context.subject}ได้ชัดเจน`, `จัดลำดับข้อมูลของ ${project.title} ให้ผู้เข้าชมเข้าใจสิ่งสำคัญได้ตั้งแต่การเข้าชมครั้งแรก`],
    [`ทำให้${context.action}ง่ายขึ้น`, `ออกแบบเส้นทางใช้งานที่ช่วยให้ผู้ใช้ไปถึงขั้นตอนสำคัญได้รวดเร็ว โดยไม่ต้องค้นหาข้อมูลซ้ำซ้อน`],
    [`เพิ่มโอกาสในการตัดสินใจ`, `นำรายละเอียด ภาพ และข้อมูลที่จำเป็นมาไว้ในจังหวะที่เหมาะสม เพื่อช่วยให้ผู้เข้าชมตัดสินใจได้มั่นใจขึ้น`],
    [`${context.outcome}`, `โครงสร้างเนื้อหาและประสบการณ์ถูกวางให้รองรับการกลับมาใช้งาน การบอกต่อ และการเติบโตของธุรกิจ`],
  ];

  const highlights: DetailCard[] = [
    [`เนื้อหาตรงกับบริบทของ ${project.title}`, `ทุกส่วนของหน้าเว็บถูกจัดให้เชื่อมกับ ${context.subject} โดยตรง ไม่ใช่เพียงการวางข้อมูลทั่วไป`],
    ["เส้นทางใช้งานมีเป้าหมายชัดเจน", `ผู้ใช้งานสามารถ ${context.action} ได้จากลำดับเนื้อหาที่ต่อเนื่องและเข้าใจง่าย`],
    ["ภาพและข้อมูลทำงานร่วมกัน", `การเลือกภาพ เลย์เอาต์ และข้อความช่วยอธิบายสิ่งสำคัญของโครงการได้ในมุมมองเดียว`],
    ["พร้อมขยายต่อได้", `ระบบถูกออกแบบให้สามารถเพิ่มเนื้อหาใหม่ตามบริการ แคมเปญ หรือเป้าหมายของ ${project.title} ได้ภายหลัง`],
  ];

  const suitability: DetailCard[] = [
    [`ทีมที่ดูแล${context.subject}`, `เหมาะกับองค์กรที่ต้องการนำเสนอข้อมูลเฉพาะทางให้คนทั่วไปเข้าใจได้อย่างเป็นระบบ`],
    [`ธุรกิจที่ต้องการให้ลูกค้า${context.action}`, `ช่วยลดความซับซ้อนของขั้นตอนสำคัญ และทำให้ผู้ใช้ไปถึงเป้าหมายได้ด้วยตัวเอง`],
    ["แบรนด์ที่ให้ความสำคัญกับประสบการณ์", `เหมาะกับทีมที่ต้องการให้เว็บไซต์สะท้อนมาตรฐานของแบรนด์ในทุกจุดสัมผัส`],
    ["องค์กรที่ต้องการเติบโตต่อเนื่อง", `รองรับการต่อยอดเนื้อหาและฟีเจอร์ใหม่ โดยยังคงโครงสร้างที่ผู้ใช้งานคุ้นเคย`],
  ];

  const descriptions = {
    business: `${project.title} ช่วยให้ธุรกิจสื่อสาร${context.subject} และพาผู้ใช้งานไปสู่การ${context.action}ได้ชัดเจนขึ้น`,
    highlights: `ทุกองค์ประกอบของ ${project.title} ถูกออกแบบจากบริบทของ${context.subject} เพื่อให้ประสบการณ์มีเป้าหมายและน่าจดจำ`,
    suitability: `เหมาะกับทีมที่ต้องการยกระดับการจัดการ${context.subject} ให้ใช้งานง่าย เชื่อถือได้ และพร้อมเติบโต`,
  };

  return { benefits, highlights, suitability, descriptions };
}

function getProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return index >= 0 ? { ...projects[index], index } : undefined;
}

function decodeSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = decodeSlug(slug);
  const project = getProject(normalizedSlug);

  return {
    title: project ? `ผลงาน ${project.title}` : "รายละเอียดผลงาน",
    description: project
      ? `กรณีศึกษาผลงาน ${project.title} โดย WieldTech: ${project.copy}`
      : "รายละเอียดผลงานออกแบบและพัฒนาเว็บไซต์โดย WieldTech",
    alternates: { canonical: `/work/${normalizedSlug}` },
    openGraph: {
      title: project ? `WieldTech - ผลงาน ${project.title}` : "WieldTech - รายละเอียดผลงาน",
      description: project?.copy,
      url: `/work/${normalizedSlug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = decodeSlug(slug);
  const legacyMatch = /^project-(\d{2})$/.exec(normalizedSlug);

  if (legacyMatch) {
    const legacyIndex = Number(legacyMatch[1]) - 1;
    if (legacyIndex >= 0 && legacyIndex < projects.length) redirect(`/work/${projects[legacyIndex].slug}`);
  }

  const project = getProject(normalizedSlug);

  if (!project) notFound();

  const detailContent = getProjectDetailContent(project);

  const previewProjects = [
    project,
    ...projects.filter((_, index) => index !== project.index),
  ].slice(0, 10);
  const previewGroups = Array.from(
    { length: Math.ceil(previewProjects.length / 2) },
    (_, index) => previewProjects.slice(index * 2, index * 2 + 2),
  );
  const previewSlides = [previewGroups.at(-1)!, ...previewGroups, previewGroups[0]];

  return (
    <main>
      <Header />
      <article className="website-types-section portfolio-page website-detail-page project-detail-page">
        <h1 className="work-page-title">{project.title}</h1>
        <small className="section-side-label">PROJECT DETAIL</small>
        <p className="website-types-description">{project.copy}</p>

        <section className="website-detail-section">
          <small className="section-side-label">PROJECT PREVIEW</small>
          <h2>เว็บของโปรเจกต์นี้จะหน้าตาแบบนี้</h2>
          <p className="website-detail-section-description">
            ตัวอย่างหน้าหลักที่นำแนวคิด กลยุทธ์ และการออกแบบมาเชื่อมเข้าด้วยกันเป็นประสบการณ์เดียว
          </p>
          <div className="website-preview-slider" aria-label="ตัวอย่างหน้าเว็บไซต์ของโปรเจกต์">
            <div
              className="website-preview-slider-track"
              style={{ "--preview-track-count": previewSlides.length } as CSSProperties}
            >
              {previewSlides.map((group, slideIndex) => {
                const isDuplicate = slideIndex === 0 || slideIndex === previewSlides.length - 1;

                return (
                  <div className="website-preview-slider-group" aria-hidden={isDuplicate || undefined} key={slideIndex}>
                    {group.map((previewProject) => (
                      <div className="website-preview-card ios-window ios-window--preview-only" key={`${previewProject.slug}-${slideIndex}`}>
                        <div className="ios-window-bar" aria-hidden="true"><span /><span /><span /></div>
                        <div className="ios-window-content">
                          <div className="work-card-media-frame">
                            <div className="work-card-media">
                              <img
                                alt={isDuplicate ? "" : `ตัวอย่างเว็บไซต์ ${previewProject.title}`}
                                src={previewProject.image}
                                draggable={false}
                              />
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
          <div className="project-preview-live-actions">
            <a className="project-preview-live-link" href={project.image} target="_blank" rel="noreferrer">
              เปิดหน้าเว็บไซต์จริง
            </a>
          </div>
        </section>

        <section className="website-detail-section website-detail-section--spaced">
          <small className="section-side-label">BUSINESS VALUE</small>
          <h2>โปรเจกต์นี้ช่วยธุรกิจคุณยังไง</h2>
          <p className="website-detail-section-description">
            {detailContent.descriptions.business}
          </p>
          <ul className="website-benefit-list project-benefit-list">
            {detailContent.benefits.map(([title, description], index) => (
              <li key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="website-detail-section website-detail-section--highlights">
          <small className="section-side-label">PROJECT HIGHLIGHTS</small>
          <h2>จุดเด่นของผลงาน</h2>
          <p className="website-detail-section-description">
            {detailContent.descriptions.highlights}
          </p>
          <ul className="website-benefit-list project-benefit-list project-suitability-list">
            {detailContent.highlights.map(([title, description], index) => (
              <li key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="website-detail-section website-detail-section--suitability">
          <small className="section-side-label">PROJECT FIT</small>
          <h2>ผลงานนี้เหมาะกับ</h2>
          <p className="website-detail-section-description">
            {detailContent.descriptions.suitability}
          </p>
          <ul className="website-benefit-list project-benefit-list project-suitability-list">
            {detailContent.suitability.map(([title, description], index) => (
              <li key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

      </article>
      <ContactSection />
    </main>
  );
}
