export const projects = [
  {
    title: "บ้านและสวนร่วมสมัย",
    copy: "เว็บไซต์ที่พาเรื่องราวของสถาปัตยกรรม พื้นที่ และการอยู่อาศัยมาอยู่ในประสบการณ์เดียวกันอย่างลงตัว",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d55bfe247075879.69d358c4a9138.jpg",
  },
  {
    title: "คอมมูนิตี้กาแฟ",
    copy: "ร้านค้าออนไลน์ที่ทำให้ผู้คนค้นพบเมล็ดกาแฟที่ใช่ พร้อมการเลือกซื้อที่ชัดเจนและเป็นธรรมชาติยิ่งขึ้น",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
  {
    title: "ศูนย์ศิลปะร่วมสมัย",
    copy: "พื้นที่ดิจิทัลสำหรับสื่อสารนิทรรศการ กิจกรรม และคอลเลกชัน เพื่อเปิดประสบการณ์ใหม่ให้กับผู้เข้าชม",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
  {
    title: "บริการดูแลสุขภาพ",
    copy: "เว็บไซต์บริการสุขภาพที่ทำให้การค้นหาผู้เชี่ยวชาญ นัดหมาย และเริ่มต้นการดูแลเป็นเรื่องที่เข้าใจง่าย",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22e949168231879.6436d91bd2c5a.jpeg",
  },
  {
    title: "แพลตฟอร์มอสังหาฯ",
    copy: "ประสบการณ์ค้นหาที่อยู่อาศัยที่จัดข้อมูลโครงการให้เป็นระเบียบ ชัดเจน และตอบโจทย์การตัดสินใจของผู้ใช้งาน",
    image: "https://cdn.dribbble.com/userupload/3343075/file/original-628a33369f7bad395b08c5a1b4b30979.png?resize=1200x&vertical=center",
  },
  {
    title: "ร้านค้าของคนรักกาแฟ",
    copy: "แพลตฟอร์มอีคอมเมิร์ซที่ให้สินค้า เรื่องราว และแรงบันดาลใจเดินทางไปพร้อมกันในทุกจุดของประสบการณ์",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22e949168231879.6436d91bd2c5a.jpeg",
  },
  {
    title: "Learning Platform",
    copy: "An online learning space that organizes content and growth paths into a clear, approachable experience.",
    image: "https://cdn.dribbble.com/userupload/3343075/file/original-628a33369f7bad395b08c5a1b4b30979.png?resize=1200x&vertical=center",
  },
  {
    title: "Modern Lifestyle Brand",
    copy: "A focused digital experience that connects a contemporary brand, its products, and the people who love them.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d55bfe247075879.69d358c4a9138.jpg",
  },
  {
    title: "Health Clinic Experience",
    copy: "A reassuring website that makes services, appointments, and the first step toward care easy to understand.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22e949168231879.6436d91bd2c5a.jpeg",
  },
  {
    title: "Community Creative Hub",
    copy: "A digital hub for events, stories, and the people creating meaningful work within a local community.",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
  {
    title: "Home Goods Store",
    copy: "An e-commerce experience that helps customers discover products and make considered decisions with ease.",
    image: "https://cdn.dribbble.com/userupload/3343075/file/original-628a33369f7bad395b08c5a1b4b30979.png?resize=1200x&vertical=center",
  },
  {
    title: "Service Management System",
    copy: "A clear workspace that helps service teams manage work, data, and customer communication in one place.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d55bfe247075879.69d358c4a9138.jpg",
  },
  {
    title: "Art Collection Archive",
    copy: "An exhibition-led platform that gives each artwork the context and space it needs to be discovered.",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
] as const;

const featuredPreviewProjects = [...projects, projects[0]];

export function OurWorkSection() {
  return (
    <section id="our-work" className="content-section work-section our-work-section" aria-labelledby="our-work-title">
      <div className="work-section-header">
        <h2 id="our-work-title" className="work-section-title text-4xl text-white tracking-tighter text-balance">
          ผลงานของเรา
        </h2>
        <small className="section-side-label">OUR WORK</small>
        <p className="work-section-description">
          โปรเจกต์ที่เราร่วมออกแบบและพัฒนาเพื่อเปลี่ยนโจทย์ทางธุรกิจให้กลายเป็นประสบการณ์ดิจิทัลที่มีความหมาย
        </p>
      </div>
      <div className="website-types-grid work-ios-grid">
        {projects.slice(0, 1).map(({ title, image }) => (
          <div className="ios-window-cell" key={title}>
            <div className="ios-window">
              <div className="ios-window-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="ios-window-content">
                <h3>{title}</h3>
                <div className="work-card-media featured-work-grid">
                  <div className="featured-work-interactions">
                    {featuredPreviewProjects.map((project, index) => (
                      <a
                        className={`featured-work-tile featured-work-tile-${index + 1}`}
                        href="/work"
                        key={`${project.title}-action-${index}`}
                        draggable={false}
                      >
                        <img alt={`ตัวอย่างหน้าเว็บไซต์ ${project.title}`} src={project.image} draggable={false} />
                        <span className="featured-work-action">
                          ดูรายละเอียด
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <span className="ios-window-detail">ดูรายละเอียด</span>
              </div>
            </div>
          </div>
        ))}
        <span className="website-types-grid-divider" aria-hidden="true" />
      </div>
      <div className="our-work-all-actions">
        <a className="our-work-all-link" href="/work">
          ดูผลงานทั้งหมด
        </a>
      </div>
    </section>
  );
}
