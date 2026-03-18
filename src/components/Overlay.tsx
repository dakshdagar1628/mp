"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade Opacities based on scroll% thresholds.
  // 0-10% (Section 1), 30-40% (Section 2), 60-70% (Section 3)

  // Section 1: Center - Vanishes quickly to avoid blurry/transparent overlap
  const opacity1 = useTransform(scrollYProgress, [0, 0.03, 0.06], [1, 1, 0]);
  const display1 = useTransform(scrollYProgress, (pos) => pos > 0.07 ? "none" : "flex");
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -100]); // Parallax up

  // Section 2: Left
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.35], [50, -50]); // Redued parallax for mobile smoothness

  // Section 3: Right
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.65], [50, -50]); // Redued parallax for mobile smoothness

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div
           style={{ opacity: opacity1, y: y1, display: display1 as any }}
           className="absolute inset-0 flex-col items-center justify-center text-center px-6 md:px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-3 md:mb-4">
            Mahesh Rawat.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xs sm:max-w-lg">
            Senior Design Lead & Architect. Crafting spaces that engage and evoke emotions.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-6 md:px-0 md:inset-y-0 md:left-24 md:right-auto md:items-start md:text-left md:translate-y-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold mb-3 md:mb-4 leading-tight">
            14 Years of <br /> Excellence.
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-zinc-400 max-w-[280px] sm:max-w-sm">
            Leveraging technical expertise to deliver prestigious commercial, public, and residential buildings.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-6 md:px-0 md:inset-y-0 md:right-24 md:left-auto md:items-end md:text-right md:translate-y-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold mb-3 md:mb-4 leading-tight">
            Inception to <br /> Execution.
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-zinc-400 max-w-[280px] sm:max-w-sm ml-auto md:ml-0">
            Leading teams with specialized focus on space planning, coordination, and detail-driven design.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
