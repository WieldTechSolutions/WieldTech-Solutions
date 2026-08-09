import Image from "next/image";

import { projectConsultationEnabled } from "@/lib/feature-flags";

export function ContactSection() {
  return (
    <section id="approach" className="content-section work-section contact-section">
      <h2 className="work-section-title contact-section-title">
        พร้อมเริ่มโปรเจกต์ของคุณแล้วหรือยัง?
      </h2>
      <small className="section-side-label">START A PROJECT</small>
      <p className="work-section-description contact-section-description">
        มีไอเดียหรือโปรเจกต์ในใจใช่ไหม? เราพร้อมรับฟังโจทย์และช่วยวางทิศทางให้ชัดเจนตั้งแต่ก้าวแรก
        <br />
        มาสร้างประสบการณ์ดิจิทัลที่ใช้งานง่าย สื่อสารตัวตนของแบรนด์ และทำให้ผู้คนอยากกลับมาใช้งานไปด้วยกัน
      </p>
      <div id="contact" className="contact-panel">
        <div className="contact-actions">
          {projectConsultationEnabled ? (
            <>
              <a href="/consult">เริ่มโปรเจกต์</a>
              <span aria-hidden="true">หรือ</span>
            </>
          ) : null}
          <a
            className="fastwork-link"
            href="https://fastwork.co/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/brand/fastwork.svg" alt="" width={28} height={28} />
            เริ่มคุยงานบน Fastwork
          </a>
        </div>
      </div>
    </section>
  );
}
