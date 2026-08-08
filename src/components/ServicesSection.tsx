const services = [
  [
    "⌘",
    "Web Development",
    "พัฒนาเว็บไซต์ที่รวดเร็ว รองรับการเติบโต และดูแลต่อได้ง่ายด้วยโครงสร้างที่เป็นระบบ",
  ],
  [
    "◇",
    "UX/UI Design",
    "ออกแบบประสบการณ์ที่ให้ผู้ใช้เป็นศูนย์กลาง สมดุลทั้งความชัดเจน ใช้งานง่าย และสวยงาม",
  ],
  [
    "ϟ",
    "Performance",
    "ปรับประสิทธิภาพให้รวดเร็ว เสถียร และทำงานได้ดีบนทุกอุปกรณ์ในสถานการณ์จริง",
  ],
  [
    "♙",
    "Accessibility",
    "สร้างประสบการณ์ที่ทุกคนเข้าถึงได้ โดยยึดตามมาตรฐานด้านการเข้าถึงสมัยใหม่",
  ],
];

const serviceIcons = [
  "/services/web-development.svg",
  "/services/ux-ui-design.svg",
  "/services/performance.svg",
  "/services/accessibility.svg",
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="content-section work-section services-section" aria-labelledby="services-title">
      <div className="work-section-header">
        <h2 id="services-title" className="work-section-title text-4xl text-white tracking-tighter text-balance">
          บริการของเรา
        </h2>
        <small className="section-side-label">SERVICES</small>
        <p className="work-section-description">
          เราผสานกลยุทธ์ การออกแบบ และเทคโนโลยี เพื่อสร้างเว็บไซต์ที่ชัดเจน ใช้งานง่าย และพร้อมเติบโตไปกับธุรกิจ
        </p>
      </div>
      <div className="service-grid">
        {services.map(([_symbol, title, copy], index) => (
          <article key={title}>
            <i><img alt="" src={serviceIcons[index]} draggable={false} /></i>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
