"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronLeftIcon, type ChevronLeftIconHandle } from "@/components/ui/chevron-left";
import { ChevronRightIcon, type ChevronRightIconHandle } from "@/components/ui/chevron-right";

type WebsitePreviewPaginationProps = {
  pageCount: number;
};

export function WebsitePreviewPagination({ pageCount }: WebsitePreviewPaginationProps) {
  const [activePage, setActivePage] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [isJumping, setIsJumping] = useState(false);
  const activePageRef = useRef(0);
  const resetTimer = useRef<number | null>(null);
  const previousIcon = useRef<ChevronLeftIconHandle>(null);
  const nextIcon = useRef<ChevronRightIconHandle>(null);

  const setPage = (page: number) => {
    activePageRef.current = page;
    setActivePage(page);
  };

  useEffect(() => {
    const track = document.querySelector<HTMLElement>(".website-preview-slider-track");

    if (!track) return;

    track.style.transition = isJumping ? "none" : "";
    track.style.transform = `translateX(-${slideIndex * (100 / (pageCount + 2))}%)`;
  }, [isJumping, pageCount, slideIndex]);

  const resetTo = (index: number) => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);

    resetTimer.current = window.setTimeout(() => {
      setIsJumping(true);
      setSlideIndex(index);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsJumping(false));
      });
    }, 900);
  };

  const goNext = () => {
    const currentPage = activePageRef.current;

    if (currentPage === pageCount - 1) {
      setPage(0);
      setSlideIndex(pageCount + 1);
      resetTo(1);
      return;
    }

    setPage(currentPage + 1);
    setSlideIndex(currentPage + 2);
  };

  const goPrevious = () => {
    const currentPage = activePageRef.current;

    if (currentPage === 0) {
      setPage(pageCount - 1);
      setSlideIndex(0);
      resetTo(pageCount);
      return;
    }

    setPage(currentPage - 1);
    setSlideIndex(currentPage);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      goNext();
    }, 9000);

    return () => {
      window.clearInterval(timer);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, [pageCount]);

  const selectPage = (page: number) => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    const nextPage = (page + pageCount) % pageCount;
    setIsJumping(false);
    setPage(nextPage);
    setSlideIndex(nextPage + 1);
  };

  return (
    <nav className="website-preview-pagination" aria-label="เปลี่ยนตัวอย่างหน้าเว็บไซต์">
      <span className="website-preview-pagination-controls">
        <button
          aria-label="ตัวอย่างก่อนหน้า"
          className="website-preview-pagination-arrow"
          onClick={goPrevious}
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
          onClick={goNext}
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
