import Image from "next/image";

const links = [
  { label: "ผลงาน", href: "#work" },
  { label: "บริการ", href: "#services" },
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "แนวทางทำงาน", href: "#approach" },
  { label: "ติดต่อ", href: "#contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-logo" href="#top" aria-label="WieldTech home">
        <Image
          src="/brand/wieldtech-navbar.png"
          alt="WieldTech"
          width={160}
          height={38}
          priority
        />
      </a>
      <nav aria-label="เมนูหลัก">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
