"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("");
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (active) setActiveSection(active.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        }
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="#top" aria-label="Mahesh Rawat, home">
          <span className="wordmark-monogram" aria-hidden="true">MR</span>
          <span className="wordmark-details">
            <span className="wordmark-name">Mahesh Rawat</span>
            <span className="wordmark-role">Senior Architect / Design Lead</span>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Main navigation">
          {links.map((link, index) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="nav-number" aria-hidden="true">0{index + 1}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <span
        ref={progressRef}
        className="site-progress"
        aria-hidden="true"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
