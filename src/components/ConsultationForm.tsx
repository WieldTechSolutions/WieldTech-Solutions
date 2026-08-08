"use client";

import { FormEvent, useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <label>
        ชื่อของคุณ
        <input name="name" autoComplete="name" required placeholder="ระบุชื่อ" />
      </label>
      <label>
        อีเมลสำหรับติดต่อกลับ
        <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
      </label>
      <label>
        บริษัท / แบรนด์
        <input name="company" autoComplete="organization" placeholder="ชื่อบริษัทหรือแบรนด์" />
      </label>
      <label>
        รายละเอียดที่อยากปรึกษา
        <textarea name="message" required rows={5} placeholder="บอกเราเกี่ยวกับไอเดีย เป้าหมาย หรือโจทย์ของโปรเจกต์" />
      </label>
      <button type="submit">ส่งรายละเอียด</button>
      {submitted ? <p className="consultation-success">ได้รับรายละเอียดแล้ว เราจะติดต่อกลับโดยเร็วที่สุด</p> : null}
    </form>
  );
}
