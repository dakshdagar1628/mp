"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 54;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 53)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      if (!images[index]) return;

      const img = images[index];

      // Match canvas internal resolution to window size to avoid blurry rendering
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Object-fit: cover logic
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial render
    render(0);

    // Update on scroll
    const unsubscribe = frameIndex.on("change", (latest) => {
      // Ensure we stick to an integer index
      render(Math.round(latest));
    });

    const handleResize = () => render(Math.round(frameIndex.get()));
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, frameIndex]);

  const blurAmount = useTransform(scrollYProgress, [0.8, 1], ["blur(0px)", "blur(30px)"]);
  const opacityAmount = useTransform(scrollYProgress, [0.8, 1], [0.8, 0.3]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <motion.div 
        style={{ filter: blurAmount, opacity: opacityAmount }}
        className="fixed top-0 left-0 h-screen w-full overflow-hidden -z-10 bg-[#121212]"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </motion.div>
    </div>
  );
}
