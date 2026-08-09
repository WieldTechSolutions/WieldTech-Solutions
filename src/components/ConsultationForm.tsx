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
        <span className="consultation-field-control">
          <input name="name" autoComplete="name" required placeholder="ระบุชื่อ" />
        </span>
      </label>
      <label>
        อีเมลสำหรับติดต่อกลับ
        <span className="consultation-field-control">
          <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
        </span>
      </label>
      <label>
        บริษัท / แบรนด์
        <span className="consultation-field-control">
          <input name="company" autoComplete="organization" placeholder="ชื่อบริษัทหรือแบรนด์" />
        </span>
      </label>
      <label>
        รายละเอียดที่อยากปรึกษา
        <span className="consultation-field-control">
          <textarea name="message" required rows={5} placeholder="บอกเราเกี่ยวกับไอเดีย เป้าหมาย หรือโจทย์ของโปรเจกต์" />
        </span>
      </label>
      <div className="consultation-action">
        <button type="submit">ส่งรายละเอียด</button>
      </div>
      {submitted ? <p className="consultation-success">ได้รับรายละเอียดแล้ว เราจะติดต่อกลับโดยเร็วที่สุด</p> : null}
    </form>
  );
}
