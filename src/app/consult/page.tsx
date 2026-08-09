import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";
import { projectConsultationEnabled } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "ปรึกษาโปรเจกต์เว็บไซต์และเว็บแอปพลิเคชัน",
  description:
    "เริ่มต้นปรึกษาโปรเจกต์เว็บไซต์ ร้านค้าออนไลน์ ระบบเว็บแอปพลิเคชัน หรือแพลตฟอร์มดิจิทัลกับทีม WieldTech",
  alternates: { canonical: "/consult" },
  openGraph: {
    url: "/consult",
    title: "WieldTech - ปรึกษาโปรเจกต์เว็บไซต์และเว็บแอปพลิเคชัน",
    description:
      "บอกเป้าหมายของธุรกิจ แล้วให้ WieldTech ช่วยวางทิศทางเว็บไซต์หรือระบบดิจิทัลที่เหมาะกับคุณ",
  },
};

export default function ConsultPage() {
  if (!projectConsultationEnabled) {
    redirect("/");
  }

  return (
    <main>
      <Header />
      <section className="website-types-section portfolio-page consult-page" aria-labelledby="consult-page-title">
        <small className="section-side-label">PROJECT CONSULTATION</small>
        <h1 id="consult-page-title" className="work-page-title">ปรึกษาโปรเจกต์</h1>
        <p className="website-types-description consult-page-intro">
          เล่าถึงสิ่งที่คุณกำลังวางแผนไว้ แล้วเราจะช่วยมองหาทิศทางที่เหมาะกับธุรกิจของคุณ
        </p>
        <ConsultationForm />
        <div className="consultation-dot-panel" aria-hidden="true" />
      </section>
    </main>
  );
}
