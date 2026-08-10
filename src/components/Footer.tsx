"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

const navigationLinks = [
  { label: "ผลงาน", href: "/work" },
  { label: "บริการ", href: "/", targetId: "services" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "แนวทางทำงาน", href: "/approach" },
  { label: "ติดต่อ", href: "/", targetId: "contact" },
];

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, targetId: string) {
    event.preventDefault();
    sessionStorage.setItem("wieldtech-scroll-target", targetId);

    if (pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
      sessionStorage.removeItem("wieldtech-scroll-target");
      return;
    }

    window.location.assign("/");
  }

  return (
    <footer id="about">
      <div>
        <a className="brand" href="/" aria-label="WieldTech home">
          <Image src="/brand/wieldtech-navbar.png" alt="WieldTech" width={160} height={37} />
        </a>
        <p>เราออกแบบและพัฒนา<br />ประสบการณ์ดิจิทัลที่มีความหมาย</p>
      </div>
      <div>
        <label>Navigate</label>
        <p className="footer-navigation">
          {navigationLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={link.targetId ? (event) => scrollToSection(event, link.targetId) : undefined}
            >
              {link.label}
            </a>
          ))}
        </p>
      </div>
      <div>
        <label>Studio</label>
        <p>สุพรรณบุรี, ประเทศไทย</p>
      </div>
      <div>
        <label>Follow</label>
        <p><a href="https://www.facebook.com/wieldtechsolutions" target="_blank" rel="noreferrer">Facebook</a></p>
      </div>
      <small>
        <span>© {currentYear} WieldTech. สงวนลิขสิทธิ์</span>
        <Image className="footer-line-mark" src="/brand/wieldtech-line.png" alt="WieldTech" width={720} height={180} unoptimized />
        <span className="recaptcha-notice">
          หน้านี้ใช้ reCAPTCHA v3 และอยู่ภายใต้ <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">นโยบายความเป็นส่วนตัว</a> และ <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">ข้อกำหนดของ Google</a>
        </span>
        <em>สร้างสรรค์ด้วยความใส่ใจ</em>
      </small>
    </footer>
  );
}
