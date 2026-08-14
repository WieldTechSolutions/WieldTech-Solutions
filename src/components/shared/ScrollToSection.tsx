"use client";

import { useEffect } from "react";

export function ScrollToSection() {
  useEffect(() => {
    const targetId = sessionStorage.getItem("wieldtech-scroll-target");

    if (!targetId) return;

    sessionStorage.removeItem("wieldtech-scroll-target");
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, []);

  return null;
}
