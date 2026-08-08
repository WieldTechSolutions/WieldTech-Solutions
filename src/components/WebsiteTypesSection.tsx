"use client";

import { useRef } from "react";

import { BriefcaseBusinessIcon } from "@/components/ui/briefcase-business";
import { CartIcon } from "@/components/ui/cart";
import { GalleryThumbnailsIcon } from "@/components/ui/gallery-thumbnails";
import { LayersIcon } from "@/components/ui/layers";
import { MonitorCogIcon } from "@/components/ui/monitor-cog";
import { RocketIcon } from "@/components/ui/rocket";

const websiteTypes = [
  { title: "เว็บไซต์องค์กร", detail: "สื่อสารตัวตนและสร้างความน่าเชื่อถือให้แบรนด์", Icon: BriefcaseBusinessIcon },
  { title: "แลนดิ้งเพจ", detail: "นำเสนอแคมเปญหรือบริการให้เกิดผลลัพธ์ชัดเจน", Icon: RocketIcon },
  { title: "ร้านค้าออนไลน์", detail: "ประสบการณ์ซื้อขายที่เรียบง่ายและน่าใช้งาน", Icon: CartIcon },
  { title: "เว็บแอปพลิเคชัน", detail: "ระบบที่ช่วยให้ทีมและลูกค้าทำงานได้ดีขึ้น", Icon: MonitorCogIcon },
  { title: "แพลตฟอร์มดิจิทัล", detail: "แพลตฟอร์มที่พร้อมรองรับการเติบโตของธุรกิจ", Icon: LayersIcon },
  { title: "พอร์ตโฟลิโอ", detail: "พื้นที่เล่าเรื่องผลงานอย่างมีเอกลักษณ์", Icon: GalleryThumbnailsIcon },
] as const;

type IconController = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

function WebsiteTypeCard({ item }: { item: (typeof websiteTypes)[number] }) {
  const iconRef = useRef<IconController>(null);
  const Icon = item.Icon;

  return (
    <div className="ios-window-cell">
      <a
        className="ios-window"
        href="#contact"
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        <div className="ios-window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="ios-window-content">
          <Icon ref={iconRef as never} aria-hidden="true" className="ios-window-icon" size={112} />
          <h3>{item.title}</h3>
          <span>{item.detail}</span>
          <span className="ios-window-detail">ดูรายละเอียด</span>
        </div>
      </a>
    </div>
  );
}

export function WebsiteTypesSection() {
  return (
    <section className="website-types-section" aria-labelledby="website-types-title">
      <h2 id="website-types-title" className="text-4xl text-white tracking-tighter text-balance">
        คุณต้องการเว็บแบบไหน?
      </h2>
      <small className="website-types-side-label">WEBSITE TYPES</small>
      <p className="website-types-description text-base text-white">
        ไม่ว่าจะเป็นเว็บไซต์องค์กร ร้านค้าออนไลน์ หรือแพลตฟอร์มดิจิทัล เราช่วยออกแบบและพัฒนาให้ตอบโจทย์ธุรกิจของคุณอย่างชัดเจน
      </p>
      <div className="website-types-grid">
        {websiteTypes.map((item) => <WebsiteTypeCard item={item} key={item.title} />)}
        <span className="website-types-grid-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
