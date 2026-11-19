"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import portfolioData from "./portfolio_data.json";

type Project = (typeof portfolioData)[number];
type ProjectCategory = "All" | "Residential" | "Education" | "Commercial" | "Hospitality";

const categories: ProjectCategory[] = [
  "All",
  "Residential",
  "Education",
  "Commercial",
  "Hospitality",
];

const categoryById: Record<number, Exclude<ProjectCategory, "All">> = {
  1: "Education",
  2: "Commercial",
  3: "Commercial",
  4: "Residential",
  5: "Residential",
  6: "Residential",
  7: "Residential",
  8: "Residential",
  9: "Residential",
  10: "Residential",
  11: "Commercial",
  13: "Residential",
  14: "Residential",
  15: "Residential",
  16: "Residential",
  17: "Education",
  18: "Education",
  19: "Hospitality",
  20: "Hospitality",
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const visibleProjects = portfolioData.filter(
    (project) => activeCategory === "All" || categoryById[project.id] === activeCategory,
  );

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedProject(null);
        setCurrentIndex(0);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setCurrentIndex((index) =>
          index === 0 ? selectedProject.images.length - 1 : index - 1,
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setCurrentIndex((index) =>
          index === selectedProject.images.length - 1 ? 0 : index + 1,
        );
      }
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!controls?.length) {
          event.preventDefault();
          dialogRef.current?.focus();
          return;
        }

        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!dialogRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const showPrevious = () => {
    if (!selectedProject) return;
    setCurrentIndex((index) =>
      index === 0 ? selectedProject.images.length - 1 : index - 1,
    );
  };

  const showNext = () => {
    if (!selectedProject) return;
    setCurrentIndex((index) =>
      index === selectedProject.images.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <section className="work-section section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading work-heading" data-reveal>
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Projects</h2>
        </div>
        <p className="section-intro">
          Selected residences, workplaces, schools, cultural spaces, and hospitality projects.
        </p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects by type" data-reveal>
        {categories.map((category) => (
          <button
            className={`filter-button${activeCategory === category ? " is-active" : ""}`}
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {visibleProjects.length} {activeCategory === "All" ? "projects" : `${activeCategory.toLowerCase()} projects`}.
      </p>

      <div className="project-grid" key={activeCategory}>
        {visibleProjects.map((project, index) => (
          <button
            className="project-card"
            key={project.id}
            onClick={() => openProject(project)}
            type="button"
            aria-label={`Open ${project.title}, ${project.images.length} images`}
            aria-haspopup="dialog"
            style={{ animationDelay: `${Math.min(index, 8) * 36}ms` }}
          >
            <span className="project-card-image">
              <Image
                src={project.cover}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="project-cover"
              />
              <span className="project-index">
                {String(portfolioData.indexOf(project) + 1).padStart(2, "0")}
              </span>
              <span className="project-open" aria-hidden="true">
                View project <span>↗</span>
              </span>
            </span>
            <span className="project-card-info">
              <span className="project-category">{categoryById[project.id]}</span>
              <span className="project-title">{project.title}</span>
              <span className="project-count">
                {project.images.length} {project.images.length === 1 ? "image" : "images"}
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          if (!selectedProject) restoreFocusRef.current?.focus();
        }}
      >
        {selectedProject && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            onClick={closeProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.24,
              ease: "easeOut",
            }}
          >
            <motion.div
              ref={dialogRef}
              className="lightbox-panel"
              tabIndex={-1}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.32,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <div className="lightbox-header">
                <div>
                  <p className="lightbox-category">{categoryById[selectedProject.id]}</p>
                  <h2 id="lightbox-title">{selectedProject.title}</h2>
                </div>
                <div className="lightbox-controls">
                  <span className="lightbox-count" aria-live="polite" aria-atomic="true">
                    {currentIndex + 1} / {selectedProject.images.length}
                  </span>
                  <button
                    className="icon-button"
                    type="button"
                    onClick={closeProject}
                    ref={closeButtonRef}
                    aria-label="Close project gallery"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 6 12 12M18 6 6 18" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="lightbox-image-area">
                {selectedProject.images.length > 1 && (
                  <button
                    className="lightbox-arrow lightbox-arrow-left"
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}
                <div className="lightbox-image-wrap">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      className="lightbox-image-frame"
                      key={`${selectedProject.id}-${currentIndex}`}
                      initial={{ opacity: 0, x: 22, scale: 0.99 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -18, scale: 0.99 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.26,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={selectedProject.images[currentIndex]}
                        alt={`${selectedProject.title}, image ${currentIndex + 1}`}
                        fill
                        sizes="(max-width: 800px) 100vw, 80vw"
                        className="lightbox-image"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                {selectedProject.images.length > 1 && (
                  <button
                    className="lightbox-arrow lightbox-arrow-right"
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div className="lightbox-thumbnails" role="group" aria-label="Choose an image">
                  {selectedProject.images.map((image, index) => (
                    <button
                      className={`thumbnail${index === currentIndex ? " is-active" : ""}`}
                      key={image}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                      aria-pressed={index === currentIndex}
                    >
                      <Image src={image} alt="" fill sizes="72px" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
