const projects = [
  {
    title: "บ้านและสวนร่วมสมัย",
    copy: "เว็บไซต์ที่พาเรื่องราวของสถาปัตยกรรม พื้นที่ และการอยู่อาศัยมาอยู่ในประสบการณ์เดียวกันอย่างลงตัว",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d55bfe247075879.69d358c4a9138.jpg",
  },
  {
    title: "คอมมูนิตี้กาแฟ",
    copy: "ร้านค้าออนไลน์ที่ทำให้ผู้คนค้นพบเมล็ดกาแฟที่ใช่ พร้อมการเลือกซื้อที่ชัดเจนและเป็นธรรมชาติยิ่งขึ้น",
    image: "https://content.app-sources.com/s/90808324974828232/uploads/Portfolio/coffeegram-7206233.png?format=webp",
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
    image: "https://cdn.shopify.com/theme-store/bd8kpd40pdjmk5yx10d4igvmc623.jpg?width=2400",
  },
] as const;

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
        {projects.map(({ title, copy, image }) => (
          <div className="ios-window-cell" key={title}>
            <a className="ios-window" href="#contact">
              <div className="ios-window-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="ios-window-content">
                <h3>{title}</h3>
                <div className="work-card-media">
                  <img alt={`ตัวอย่างหน้าเว็บไซต์ ${title}`} src={image} />
                </div>
                <span>{copy}</span>
                <span className="ios-window-detail">ดูรายละเอียด</span>
              </div>
            </a>
          </div>
        ))}
        <span className="website-types-grid-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
