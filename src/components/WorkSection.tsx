const projects = [
  {
    title: "แพลตฟอร์มการลงทุน",
    copy: "แพลตฟอร์มข้อมูลการลงทุนที่ช่วยให้มองเห็นโอกาส วิเคราะห์พอร์ต และตัดสินใจได้อย่างมั่นใจในทุกช่วงเวลา",
    image: "https://cdn.dribbble.com/userupload/3343075/file/original-628a33369f7bad395b08c5a1b4b30979.png?resize=1200x&vertical=center",
  },
  {
    title: "ร้านกาแฟบลอม",
    copy: "ประสบการณ์ร้านค้าออนไลน์ที่เล่าเรื่องรสชาติของกาแฟ ทำให้การเลือกสินค้าและสั่งซื้อเป็นเรื่องง่ายขึ้น",
    image: "https://cdn.shopify.com/theme-store/bd8kpd40pdjmk5yx10d4igvmc623.jpg?width=2400",
  },
  {
    title: "พิพิธภัณฑ์แห่งชาติ",
    copy: "พื้นที่ดิจิทัลสำหรับนิทรรศการและคอลเลกชัน ที่ช่วยให้ผู้เข้าชมทุกคนเข้าถึง ค้นพบ และเรียนรู้ได้ง่ายขึ้น",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
  {
    title: "ออร์บิต เฮลท์",
    copy: "แพลตฟอร์มสุขภาพที่ช่วยให้ทุกขั้นตอนของการดูแล นัดหมาย และติดตามผลเป็นเรื่องชัดเจนและเข้าถึงง่าย",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22e949168231879.6436d91bd2c5a.jpeg",
  },
  {
    title: "ไคท์ เลิร์นนิง",
    copy: "แพลตฟอร์มการเรียนรู้ที่ช่วยให้ทีมพัฒนาทักษะ ติดตามความก้าวหน้า และก้าวไปข้างหน้าพร้อมกันได้อย่างมั่นใจ",
    image: "https://images.squarespace-cdn.com/content/v1/67a34593af3515009ca7b7ec/2165c978-c6ad-4f55-8ba5-5f393765a2cd/Exhibitions.png",
  },
  {
    title: "โมริ เรสซิเดนซ์",
    copy: "เว็บไซต์อสังหาริมทรัพย์ที่ถ่ายทอดพื้นที่ การอยู่อาศัย และเรื่องราวของแบรนด์อย่างมีระดับ เพื่อเชื่อมผู้คนกับโครงการ",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d55bfe247075879.69d358c4a9138.jpg",
  },
];

export function WorkSection() {
  const projectRows = [projects.slice(0, 3), projects.slice(3)];

  const renderRow = (row: typeof projects, isDuplicate = false) => (
    <div className="website-types-grid work-ios-grid work-ios-grid--sliding" aria-hidden={isDuplicate || undefined}>
      {row.map(({ title, copy, image }) => (
        <div className="ios-window-cell" key={title}>
          <a className="ios-window" href="#contact" tabIndex={isDuplicate ? -1 : undefined}>
            <div className="ios-window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="ios-window-content">
              <h3>{title}</h3>
              <div className="work-card-media">
                <img alt={isDuplicate ? "" : `ตัวอย่างหน้าเว็บไซต์ ${title}`} src={image} />
              </div>
              <span>{copy}</span>
              <span className="ios-window-detail">ดูรายละเอียด</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <section id="work" className="content-section work-section">
      <div className="work-section-header">
        <h2 id="work-title" className="work-section-title text-4xl text-white tracking-tighter text-balance">
          ผลงานที่แนะนำ
        </h2>
        <small className="section-side-label">FEATURED WORK</small>
        <p className="work-section-description">
          คัดสรรผลงานดิจิทัลที่ผสานกลยุทธ์ การออกแบบ และเทคโนโลยี เพื่อสร้างผลลัพธ์ที่ชัดเจนให้กับธุรกิจ
        </p>
      </div>
      <div className="featured-work-sliders" aria-label="ผลงานที่แนะนำ">
        {projectRows.map((row, index) => (
          <div className={`featured-work-slider-row featured-work-slider-row-${index + 1}`} key={index}>
            <div className="featured-work-slider-track">
              {renderRow(row)}
              {renderRow(row, true)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
