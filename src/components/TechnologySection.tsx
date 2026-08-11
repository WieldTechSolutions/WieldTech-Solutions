const technologies = [
  ["Next.js", "เฟรมเวิร์กสำหรับเว็บที่เร็ว รองรับ SEO และพร้อมเติบโต"],
  ["TypeScript", "โค้ดที่ชัดเจน ปลอดภัย และดูแลต่อได้ในระยะยาว"],
  ["Tailwind CSS", "ระบบออกแบบที่ยืดหยุ่นและคงความสม่ำเสมอของ UI"],
  ["React", "สร้างประสบการณ์ใช้งานที่ลื่นไหลและตอบสนองได้ดี"],
  ["Node.js", "พื้นฐานสำหรับระบบหลังบ้านและ API ที่ยืดหยุ่น"],
  ["PostgreSQL", "จัดเก็บข้อมูลอย่างมีโครงสร้าง ปลอดภัย และเชื่อถือได้"],
  ["Supabase", "บริการข้อมูลและการยืนยันตัวตนที่ช่วยให้พัฒนาได้รวดเร็วขึ้น"],
  ["Vercel", "แพลตฟอร์มสำหรับ deploy เว็บที่เร็ว เสถียร และขยายได้ง่าย"],
  ["Prisma", "เครื่องมือจัดการข้อมูลที่ทำให้การเชื่อมต่อฐานข้อมูลชัดเจนและปลอดภัย"],
  ["Docker", "ทำให้การพัฒนาและนำระบบขึ้นใช้งานมีสภาพแวดล้อมที่สม่ำเสมอ"],
  ["GitHub Actions", "ช่วยทำงานอัตโนมัติ ตั้งแต่ตรวจสอบโค้ดจนถึงการ deploy"],
  ["Figma", "พื้นที่ร่วมออกแบบที่เชื่อมการคิด การทดลอง และการส่งต่องานเป็นทีม"],
  ["Playwright", "ทดสอบประสบการณ์ใช้งานจริงเพื่อให้ทุกหน้าทำงานได้อย่างมั่นใจ"],
  ["Redis", "ระบบจัดเก็บข้อมูลความเร็วสูงสำหรับประสบการณ์ที่ตอบสนองทันที"],
  ["Cloudflare", "เพิ่มความเร็วและความปลอดภัยให้เว็บไซต์ในทุกภูมิภาค"],
  ["Sentry", "ติดตามปัญหาเชิงเทคนิคเพื่อแก้ไขประสบการณ์ที่สะดุดได้รวดเร็ว"],
] as const;

const technologyNames = [
  "Next.js",
  "React",
  "Vite",
  "JavaScript",
  "TypeScript",
  "Go",
  "Tailwind CSS",
  "MUI",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Visual Studio Code",
  "Redis",
] as const;

const technologyIcons: Partial<Record<(typeof technologyNames)[number], string>> = {
  "Next.js": "/technology/nextdotjs.svg",
  React: "/technology/react.svg",
  Vite: "/technology/vite.svg",
  JavaScript: "/technology/javascript.svg",
  TypeScript: "/technology/typescript.svg",
  Go: "/technology/go.svg",
  "Tailwind CSS": "/technology/tailwindcss.svg",
  MUI: "/technology/mui.svg",
  "Node.js": "/technology/nodejs.svg",
  PostgreSQL: "/technology/postgresql.svg",
  Docker: "/technology/docker.svg",
  "Visual Studio Code": "/technology/visual-studio-code.svg",
  Redis: "/technology/redis.svg",
};

export function TechnologySection() {
  return (
    <section id="technology" className="content-section work-section technology-section" aria-labelledby="technology-title">
      <div className="work-section-header">
        <h2 id="technology-title" className="work-section-title">
          เทคโนโลยีและเฟรมเวิร์ก
        </h2>
        <small className="section-side-label">TECH STACK</small>
        <p className="work-section-description">
          เราเลือกใช้เครื่องมือที่เหมาะกับเป้าหมายของแต่ละโปรเจกต์ เพื่อให้เว็บไซต์มีประสิทธิภาพ ยืดหยุ่น และดูแลต่อได้
        </p>
      </div>
      <div className="technology-grid">
        {technologyNames.map((name) => {
          const icon = technologyIcons[name];

          return (
          <article key={name}>
            <h3>{name}</h3>
            {icon ? <img className="technology-icon" src={icon} alt="" aria-hidden="true" draggable={false} /> : null}
          </article>
          );
        })}
        <article className="technology-grid-spacer" aria-hidden="true" />
        <article className="technology-grid-spacer technology-grid-spacer--tablet" aria-hidden="true" />
        <article className="technology-grid-spacer technology-grid-spacer--tablet" aria-hidden="true" />
        <span className="technology-grid-row-divider technology-grid-row-divider--one" aria-hidden="true" />
        <span className="technology-grid-row-divider technology-grid-row-divider--two" aria-hidden="true" />
        <span className="technology-grid-row-divider technology-grid-row-divider--three" aria-hidden="true" />
      </div>
    </section>
  );
}
