"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "./portfolio_data.json";

type Project = (typeof portfolioData)[number];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedProject]
  );

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, handleKeyDown]);

  return (
    <section className="relative z-20 py-16 md:py-32 px-5 md:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16">
          <h3 className="text-2xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-4">
            Project Gallery
          </h3>
          <p className="text-zinc-400 max-w-xl text-sm md:text-base">
            Click on a project to browse through all its images and drawings.
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {portfolioData.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={project.id}
              onClick={() => handleOpen(project)}
              className="group relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5"
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />

              {/* Project info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h4 className="text-base md:text-xl font-bold text-white mb-1">
                  {project.title}
                </h4>
                <p className="text-sm text-zinc-400">
                  {project.images.length}{" "}
                  {project.images.length === 1 ? "image" : "images"}
                </p>
              </div>

              {/* Browse icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slideshow Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={handleClose}
          >
            {/* Header bar */}
            <div
              className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="text-sm md:text-lg font-bold text-white">
                  {selectedProject.title}
                </h4>
                <p className="text-sm text-zinc-400">
                  {currentIndex + 1} / {selectedProject.images.length}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Main image */}
            <div
              className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center px-4 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={selectedProject.images[currentIndex]}
                    alt={`${selectedProject.title} - Image ${currentIndex + 1}`}
                    fill
                    className="object-contain bg-black"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-2 md:p-3 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Next arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-2 md:p-3 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnail strip */}
            {selectedProject.images.length > 1 && (
              <div
                className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 max-w-[90vw] overflow-x-auto py-2 px-2 md:px-4"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-12 h-9 md:w-16 md:h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                      idx === currentIndex
                        ? "border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
