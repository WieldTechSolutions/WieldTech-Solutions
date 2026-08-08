"use client";

import { useMemo, useRef, useState } from "react";

import { ChevronLeftIcon, type ChevronLeftIconHandle } from "@/components/ui/chevron-left";
import { ChevronRightIcon, type ChevronRightIconHandle } from "@/components/ui/chevron-right";

type Project = {
  title: string;
  copy: string;
  image: string;
};

type ProjectMeta = {
  category: string;
  tag: string;
  technology: string;
};

const PROJECTS_PER_PAGE = 12;
const PORTFOLIO_PAGE_COUNT = 11;
const MAX_VISIBLE_PAGE_BUTTONS = 6;

const projectMeta: ProjectMeta[] = [
  { category: "เว็บไซต์องค์กร", tag: "แบรนด์", technology: "Next.js" },
  { category: "ร้านค้าออนไลน์", tag: "อีคอมเมิร์ซ", technology: "React" },
  { category: "เว็บไซต์องค์กร", tag: "วัฒนธรรม", technology: "TypeScript" },
  { category: "แพลตฟอร์มดิจิทัล", tag: "สุขภาพ", technology: "Next.js" },
  { category: "แพลตฟอร์มดิจิทัล", tag: "อสังหาริมทรัพย์", technology: "PostgreSQL" },
  { category: "ร้านค้าออนไลน์", tag: "ไลฟ์สไตล์", technology: "Tailwind CSS" },
];

const categories = ["ทั้งหมด", "เว็บไซต์องค์กร", "ร้านค้าออนไลน์", "แพลตฟอร์มดิจิทัล"];
const tags = ["ทั้งหมด", "แบรนด์", "อีคอมเมิร์ซ", "วัฒนธรรม", "สุขภาพ", "อสังหาริมทรัพย์", "ไลฟ์สไตล์"];
const technologies = ["ทั้งหมด", "Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"];

export function WorkPortfolioGrid({ projects }: { projects: readonly Project[] }) {
  const [page, setPage] = useState(1);
  const previousPageIcon = useRef<ChevronLeftIconHandle>(null);
  const nextPageIcon = useRef<ChevronRightIconHandle>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const [tag, setTag] = useState("ทั้งหมด");
  const [technology, setTechnology] = useState("ทั้งหมด");

  const portfolioProjects = useMemo(
    () => Array.from({ length: PORTFOLIO_PAGE_COUNT }, (_, collectionIndex) =>
      projects.map((project, projectIndex) => {
        const itemNumber = collectionIndex * projects.length + projectIndex + 1;

        return collectionIndex === 0
          ? project
          : { ...project, title: `${project.title} — โครงการ ${itemNumber}` };
      }),
    ).flat(),
    [projects],
  );

  const projectMatches = useMemo(
    () => portfolioProjects.map((project, index) => {
      const meta = projectMeta[index % projectMeta.length];
      const normalizedQuery = query.trim().toLocaleLowerCase("th-TH");
      const matchesQuery = !normalizedQuery || `${project.title} ${project.copy} ${meta.category} ${meta.tag} ${meta.technology}`
        .toLocaleLowerCase("th-TH")
        .includes(normalizedQuery);

      return matchesQuery
        && (category === "ทั้งหมด" || meta.category === category)
        && (tag === "ทั้งหมด" || meta.tag === tag)
        && (technology === "ทั้งหมด" || meta.technology === technology);
    }),
    [category, portfolioProjects, query, tag, technology],
  );
  const visibleProjects = portfolioProjects.filter((_, index) => projectMatches[index]);
  const matchingProjectCount = visibleProjects.length;
  const totalPages = Math.max(1, Math.ceil(matchingProjectCount / PROJECTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedProjects = visibleProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);
  const firstVisiblePage = totalPages <= MAX_VISIBLE_PAGE_BUTTONS
    ? 1
    : Math.min(Math.max(currentPage - MAX_VISIBLE_PAGE_BUTTONS + 1, 1), totalPages - MAX_VISIBLE_PAGE_BUTTONS + 1);
  const visiblePageNumbers = Array.from(
    { length: Math.min(MAX_VISIBLE_PAGE_BUTTONS, totalPages) },
    (_, index) => firstVisiblePage + index,
  );

  const clearSearch = () => {
    setQuery("");
    setCategory("ทั้งหมด");
    setTag("ทั้งหมด");
    setTechnology("ทั้งหมด");
  };

  const selectPage = (pageNumber: number) => {
    setPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <form className="work-search" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="work-search-input">ค้นหาผลงาน</label>
        <input
          id="work-search-input"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setPage(1); }}
          placeholder="ค้นหาผลงาน"
          type="search"
        />
        <button className="work-search-submit" type="submit">ค้นหาผลงาน</button>
        <label className="sr-only" htmlFor="work-category">หมวดหมู่</label>
        <span className="work-search-select">
          <select id="work-category" value={category} onChange={(event) => { setCategory(event.target.value); setPage(1); }}>
            {categories.map((option) => <option key={option} value={option}>หมวดหมู่: {option}</option>)}
          </select>
          <ChevronDown />
        </span>
        <label className="sr-only" htmlFor="work-tag">แท็ก</label>
        <span className="work-search-select">
          <select id="work-tag" value={tag} onChange={(event) => { setTag(event.target.value); setPage(1); }}>
            {tags.map((option) => <option key={option} value={option}>แท็ก: {option}</option>)}
          </select>
          <ChevronDown />
        </span>
        <label className="sr-only" htmlFor="work-technology">เทคโนโลยี</label>
        <span className="work-search-select">
          <select id="work-technology" value={technology} onChange={(event) => { setTechnology(event.target.value); setPage(1); }}>
            {technologies.map((option) => <option key={option} value={option}>เทคโนโลยี: {option}</option>)}
          </select>
          <ChevronDown />
        </span>
        <button className="work-search-clear" type="button" onClick={clearSearch}>ล้างค้นหา</button>
      </form>

      <div className={`website-types-grid work-ios-grid work-portfolio-grid${matchingProjectCount <= 3 ? " work-ios-grid--single-row" : ""}`}>
        {paginatedProjects.map((project) => (
          <WorkProjectCard key={project.title} project={project} showBookmark={currentPage === 1} />
        ))}
        {matchingProjectCount === 0 ? <p className="work-search-empty">ไม่พบผลงานที่ตรงกับเงื่อนไขที่เลือก</p> : null}
        {paginatedProjects.length > 3 ? <span className="website-types-grid-divider" aria-hidden="true" /> : null}
      </div>
      {totalPages > 1 ? (
        <nav className="work-pagination" aria-label="Project pages">
          <span className="work-pagination-controls">
            {totalPages > 6 ? (
              <button
                aria-label="หน้าก่อนหน้า"
                className="work-pagination-arrow"
                disabled={currentPage === 1}
                onClick={() => selectPage(currentPage - 1)}
                onMouseEnter={() => previousPageIcon.current?.startAnimation()}
                onMouseLeave={() => previousPageIcon.current?.stopAnimation()}
                type="button"
              >
                <ChevronLeftIcon ref={previousPageIcon} size={20} />
              </button>
            ) : null}
            {visiblePageNumbers.map((pageNumber) => (
              <button
                aria-current={pageNumber === currentPage ? "page" : undefined}
                className={pageNumber === currentPage ? "is-active" : undefined}
                key={pageNumber}
                onClick={() => selectPage(pageNumber)}
                type="button"
              >
                {pageNumber}
              </button>
            ))}
            {totalPages > 6 ? (
              <button
                aria-label="หน้าถัดไป"
                className="work-pagination-arrow"
                disabled={currentPage === totalPages}
                onClick={() => selectPage(currentPage + 1)}
                onMouseEnter={() => nextPageIcon.current?.startAnimation()}
                onMouseLeave={() => nextPageIcon.current?.stopAnimation()}
                type="button"
              >
                <ChevronRightIcon ref={nextPageIcon} size={20} />
              </button>
            ) : null}
          </span>
        </nav>
      ) : null}
    </>
  );
}

function ChevronDown() {
  return (
    <svg className="work-search-chevron" aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkProjectCard({ project, showBookmark }: { project: Project; showBookmark: boolean }) {
  return (
    <div className="ios-window-cell">
      <a
        className="ios-window"
        href="/consult"
      >
        <div className="ios-window-bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="ios-window-content">
          <div className="work-card-heading">
            <h3>{project.title}</h3>
          </div>
          <div className="work-card-media-frame">
            {showBookmark ? (
              <span className="work-card-bookmark" aria-label="แนะนำ">
                <span className="work-card-bookmark-shape" aria-hidden="true" />
                <span className="work-card-bookmark-star" aria-hidden="true" />
              </span>
            ) : null}
            <div className="work-card-media">
              <img alt={`ตัวอย่างหน้าเว็บไซต์ ${project.title}`} src={project.image} draggable={false} />
            </div>
          </div>
          <span>{project.copy}</span>
          <span className="ios-window-detail">ดูรายละเอียด</span>
        </div>
      </a>
    </div>
  );
}
