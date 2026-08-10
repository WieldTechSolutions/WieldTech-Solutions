"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { projectConsultationEnabled } from "@/lib/feature-flags";

const links = [
  { label: "หน้าแรก", href: "/" },
  { label: "ผลงาน", href: "/work" },
  { label: "บริการ", href: "/", targetId: "services" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "แนวทางทำงาน", href: "/approach" },
  { label: "ติดต่อ", href: "/", targetId: "contact" },
];

export function Header() {
  const pathname = usePathname();

  function scrollToSection(
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) {
    event.preventDefault();
    sessionStorage.setItem("wieldtech-scroll-target", targetId);

    if (pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      sessionStorage.removeItem("wieldtech-scroll-target");
      return;
    }

    window.location.assign("/");
  }

  return (
    <header className="site-header">
      <a className="brand-logo" href="/" aria-label="WieldTech home">
        <Image
          src="/brand/wieldtech-navbar.png"
          alt="WieldTech"
          width={160}
          height={37}
          priority
        />
      </a>
      <nav aria-label="เมนูหลัก">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            onClick={
              link.targetId
                ? (event) => scrollToSection(event, link.targetId)
                : undefined
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        {projectConsultationEnabled ? (
          <>
            <a className="header-consult-link" href="/consult">
              ปรึกษาเรา
            </a>
            <span className="header-actions-divider" aria-hidden="true">
              หรือ
            </span>
          </>
        ) : null}
        <a
          className="header-fastwork-link"
          href="https://fastwork.co/byob/SDynRRABLa?openExternalBrowser=1&source=byob"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/brand/fastwork.svg" alt="" width={20} height={20} />
          ติดต่อบน Fastwork
        </a>
      </div>
    </header>
  );
}
