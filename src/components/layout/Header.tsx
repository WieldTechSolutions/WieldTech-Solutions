"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { MenuIcon, type MenuIconHandle } from "@/components/ui/menu";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const menuIconRef = useRef<MenuIconHandle>(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && !menuClosing) {
      menuIconRef.current?.startAnimation();
      return;
    }

    menuIconRef.current?.stopAnimation();
  }, [menuClosing, menuOpen]);

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

  function closeMenu() {
    if (!menuOpen || menuClosing) return;

    setMenuClosing(true);
    window.setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 280);
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
      return;
    }

    setMenuClosing(false);
    setMenuOpen(true);
  }

  return (
    <header className={`site-header${menuOpen ? " is-menu-open" : ""}${menuClosing ? " is-menu-closing" : ""}`}>
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
                ? (event) => {
                    scrollToSection(event, link.targetId);
                    closeMenu();
                  }
                : closeMenu
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="header-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen && !menuClosing}
        onClick={toggleMenu}
      >
        <MenuIcon ref={menuIconRef} size={34} aria-hidden="true" />
      </button>
      <div className="header-actions">
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
      <Image
        className="mobile-menu-tab"
        src="/brand/wieldtech-tab.png"
        alt=""
        width={48}
        height={48}
      />
    </header>
  );
}
