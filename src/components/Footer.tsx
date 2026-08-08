import Image from "next/image";

export function Footer() {
  return (
    <footer id="about">
      <div>
        <a className="brand" href="#top">
          <Image
            src="/brand/wieldtech-navbar.png"
            alt="WieldTech"
            width={160}
            height={38}
          />
        </a>
        <p>
          เราออกแบบและพัฒนา
          <br />
          ประสบการณ์ดิจิทัลที่มีความหมาย
        </p>
      </div>
      <div>
        <label>Navigate</label>
        <p>
          ผลงาน
          <br />
          บริการ
          <br />
          เกี่ยวกับเรา
          <br />
          แนวทางทำงาน
          <br />
          ติดต่อ
        </p>
      </div>
      <div>
        <label>Studio</label>
        <p>
          สุพรรณบุรี, ประเทศไทย
          <br />
          hello@wieldtech.dev
        </p>
      </div>
      <div>
        <label>Follow</label>
        <p>
          GitHub
          <br />
          LinkedIn
          <br />
          Facebook
        </p>
      </div>
      <small>
        <span>© 2024 WieldTech. สงวนลิขสิทธิ์</span>
        <Image
          className="footer-line-mark"
          src="/brand/wieldtech-line.png"
          alt="WieldTech"
          width={720}
          height={180}
          unoptimized
        />
        <span className="recaptcha-notice">
          หน้านี้ใช้ reCAPTCHA v3 และอยู่ภายใต้{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            นโยบายความเป็นส่วนตัว
          </a>{" "}
          และ{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
            ข้อกำหนดของ Google
          </a>
        </span>
        <em>
          สร้างสรรค์ด้วยความใส่ใจ
        </em>
      </small>
    </footer>
  );
}
