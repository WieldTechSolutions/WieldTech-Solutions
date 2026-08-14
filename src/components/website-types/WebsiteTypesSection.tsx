"use client";

import { useRef } from "react";

import { BriefcaseBusinessIcon } from "@/components/ui/briefcase-business";
import { CartIcon } from "@/components/ui/cart";
import { GalleryThumbnailsIcon } from "@/components/ui/gallery-thumbnails";
import { LayersIcon } from "@/components/ui/layers";
import { MonitorCogIcon } from "@/components/ui/monitor-cog";
import { RocketIcon } from "@/components/ui/rocket";
import { websiteTypes } from "@/data/website-types";

const icons = [BriefcaseBusinessIcon, RocketIcon, CartIcon, MonitorCogIcon, LayersIcon, GalleryThumbnailsIcon] as const;

type IconController = { startAnimation: () => void; stopAnimation: () => void };

function WebsiteTypeCard({ index }: { index: number }) {
  const iconRef = useRef<IconController>(null);
  const item = websiteTypes[index];
  const Icon = icons[index];

  return (
    <div className="ios-window-cell">
      <a
        className="ios-window"
        href={`/website-types/${item.slug}`}
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        <div className="ios-window-bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="ios-window-content">
          <Icon ref={iconRef as never} aria-hidden="true" className="ios-window-icon" size={112} draggable={false} />
          <h3>{item.title}</h3>
          <span>{item.description}</span>
          <span className="ios-window-detail">ดูรายละเอียด</span>
        </div>
      </a>
    </div>
  );
}

export function WebsiteTypesSection() {
  return (
    <section className="website-types-section" aria-labelledby="website-types-title">
      <h2 id="website-types-title" className="website-types-heading">คุณต้องการเว็บแบบไหน?</h2>
      <small className="section-side-label">WEBSITE TYPES</small>
      <p className="website-types-description">
        ไม่ว่าจะเป็นเว็บไซต์องค์กร ร้านค้าออนไลน์ หรือแพลตฟอร์มดิจิทัล เราช่วยออกแบบและพัฒนาให้ตอบโจทย์ธุรกิจของคุณอย่างชัดเจน
      </p>
      <div className="website-types-grid">
        {websiteTypes.map((item, index) => <WebsiteTypeCard index={index} key={item.slug} />)}
        <span className="website-types-grid-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
