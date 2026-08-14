import { projects } from "@/data/projects";

const featuredPreviewProjects = [...projects, projects[0], projects[1]];

export function OurWorkSection() {
  return (
    <section id="our-work" className="content-section work-section our-work-section" aria-labelledby="our-work-title">
      <div className="work-section-header">
        <h2 id="our-work-title" className="work-section-title">
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
