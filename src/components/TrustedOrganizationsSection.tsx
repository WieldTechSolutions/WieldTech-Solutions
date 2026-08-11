import Image from "next/image";

const organizationSlots = Array.from({ length: 8 }, (_, index) => index + 1);

export function TrustedOrganizationsSection() {
  return (
    <section className="content-section work-section trusted-organizations-section" aria-labelledby="trusted-organizations-title">
      <div className="work-section-header">
        <h2 id="trusted-organizations-title" className="work-section-title">
          องค์กรที่ไว้วางใจเรา
        </h2>
        <small className="section-side-label">TRUSTED BY</small>
        <p className="work-section-description">
          เราร่วมงานกับทีมและองค์กรที่ให้ความสำคัญกับประสบการณ์ดิจิทัลที่ชัดเจน ใช้งานง่าย และเติบโตได้จริง
        </p>
      </div>
      <div className="trusted-organizations-grid" aria-label="พื้นที่แสดงโลโก้องค์กร">
        {organizationSlots.map((slot) => (
          <div className="trusted-organization" key={slot}>
            <Image alt="WieldTech" src="/brand/trusted-organization-logo.png" width={180} height={68} draggable={false} />
          </div>
        ))}
      </div>
    </section>
  );
}
