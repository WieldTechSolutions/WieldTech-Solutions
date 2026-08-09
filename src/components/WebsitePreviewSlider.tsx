"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronLeftIcon, type ChevronLeftIconHandle } from "@/components/ui/chevron-left";
import { ChevronRightIcon, type ChevronRightIconHandle } from "@/components/ui/chevron-right";

export function WebsitePreviewPagination() {
  const [activePage, setActivePage] = useState(0);
  const previousIcon = useRef<ChevronLeftIconHandle>(null);
  const nextIcon = useRef<ChevronRightIconHandle>(null);
  const pageCount = 6;

  useEffect(() => {
    const track = document.querySelector<HTMLElement>(".website-preview-slider-track");

    if (!track) return;

    track.style.transform = `translateX(-${activePage * (100 / pageCount)}%)`;
  }, [activePage]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePage((page) => (page + 1) % pageCount);
    }, 9000);

    return () => window.clearInterval(timer);
  }, []);

  const selectPage = (page: number) => {
    setActivePage((page + pageCount) % pageCount);
  };

  return (
    <nav className="website-preview-pagination" aria-label="เปลี่ยนตัวอย่างหน้าเว็บไซต์">
      <span className="website-preview-pagination-controls">
        <button
          aria-label="ตัวอย่างก่อนหน้า"
          className="website-preview-pagination-arrow"
          onClick={() => selectPage(activePage - 1)}
          onMouseEnter={() => previousIcon.current?.startAnimation()}
          onMouseLeave={() => previousIcon.current?.stopAnimation()}
          type="button"
        >
          <ChevronLeftIcon ref={previousIcon} size={18} />
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            aria-current={index === activePage ? "page" : undefined}
            className={index === activePage ? "is-active" : undefined}
            key={index}
            onClick={() => selectPage(index)}
            type="button"
          >
            {index + 1}
          </button>
        ))}
        <button
          aria-label="ตัวอย่างถัดไป"
          className="website-preview-pagination-arrow"
          onClick={() => selectPage(activePage + 1)}
          onMouseEnter={() => nextIcon.current?.startAnimation()}
          onMouseLeave={() => nextIcon.current?.stopAnimation()}
          type="button"
        >
          <ChevronRightIcon ref={nextIcon} size={18} />
        </button>
      </span>
    </nav>
  );
}
