import type { Metadata } from "next";

import { ConsultationForm } from "@/components/ConsultationForm";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "ปรึกษาโปรเจกต์",
  description: "ส่งรายละเอียดโปรเจกต์เพื่อปรึกษากับ WieldTech",
};

export default function ConsultPage() {
  return (
    <main>
      <Header />
      <section className="website-types-section portfolio-page consult-page" aria-labelledby="consult-page-title">
        <small className="website-types-side-label">PROJECT CONSULTATION</small>
        <h1 id="consult-page-title" className="work-page-title">ปรึกษาโปรเจกต์</h1>
        <p className="website-types-description consult-page-intro">
          เล่าถึงสิ่งที่คุณกำลังวางแผนไว้ แล้วเราจะช่วยมองหาทิศทางที่เหมาะกับธุรกิจของคุณ
        </p>
        <ConsultationForm />
      </section>
    </main>
  );
}
