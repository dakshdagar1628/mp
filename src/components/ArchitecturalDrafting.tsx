"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

type TrailStroke = {
  start: Point;
  end: Point;
  createdAt: number;
};

export default function ArchitecturalDrafting() {
  const cursorTrailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = cursorTrailRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const strokes: TrailStroke[] = [];
    let previousPoint: Point | null = null;
    let cursorPoint: Point | null = null;
    let cursorExitAt = 0;
    let pressAt = 0;
    let hoverAmount = 0;
    let targetHoverAmount = 0;
    let animationFrame = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      canvas.width = Math.round(viewportWidth * pixelRatio);
      canvas.height = Math.round(viewportHeight * pixelRatio);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const scheduleDraw = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(drawFrame);
    };

    const drawFrame = (now: number) => {
      animationFrame = 0;
      context.clearRect(0, 0, viewportWidth, viewportHeight);

      for (let index = strokes.length - 1; index >= 0; index -= 1) {
        const stroke = strokes[index];
        const age = (now - stroke.createdAt) / 500;
        if (age >= 1) {
          strokes.splice(index, 1);
          continue;
        }

        const fade = (1 - age) ** 1.5;
        const deltaX = stroke.end.x - stroke.start.x;
        const deltaY = stroke.end.y - stroke.start.y;
        const length = Math.hypot(deltaX, deltaY) || 1;
        const normalX = -deltaY / length;
        const normalY = deltaX / length;

        context.save();
        context.lineCap = "square";
        context.lineJoin = "miter";
        context.strokeStyle = "#34483b";
        context.lineWidth = 0.9;
        context.globalAlpha = fade * 0.68;
        context.beginPath();
        context.moveTo(stroke.start.x, stroke.start.y);
        context.lineTo(stroke.end.x, stroke.end.y);
        context.stroke();

        context.strokeStyle = "#ad7955";
        context.lineWidth = 0.7;
        context.globalAlpha = fade * 0.34;
        context.setLineDash([3, 5]);
        context.beginPath();
        context.moveTo(stroke.start.x + normalX * 4, stroke.start.y + normalY * 4);
        context.lineTo(stroke.end.x + normalX * 4, stroke.end.y + normalY * 4);
        context.stroke();
        context.setLineDash([]);

        context.globalAlpha = fade * 0.72;
        context.beginPath();
        for (const point of [stroke.start, stroke.end]) {
          context.moveTo(point.x - normalX * 4, point.y - normalY * 4);
          context.lineTo(point.x + normalX * 4, point.y + normalY * 4);
        }
        context.stroke();
        context.restore();
      }

      if (cursorPoint) {
        const cursorOpacity = cursorExitAt
          ? Math.max(0, 1 - (now - cursorExitAt) / 160)
          : 1;
        if (cursorOpacity === 0) {
          cursorPoint = null;
          cursorExitAt = 0;
          targetHoverAmount = 0;
        } else {
          hoverAmount += (targetHoverAmount - hoverAmount) * 0.28;
          const radius = 9 + hoverAmount * 4;
          const { x, y } = cursorPoint;

          context.save();
          context.strokeStyle = hoverAmount > 0.15 ? "#ad7955" : "#34483b";
          context.lineWidth = 0.85;
          context.globalAlpha = cursorOpacity * 0.9;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.moveTo(x - radius - 7, y);
          context.lineTo(x - radius - 3, y);
          context.moveTo(x + radius + 3, y);
          context.lineTo(x + radius + 9, y);
          context.moveTo(x, y - radius - 9);
          context.lineTo(x, y - radius - 3);
          context.moveTo(x, y + radius + 3);
          context.lineTo(x, y + radius + 9);
          context.stroke();

          if (hoverAmount > 0.02) {
            context.globalAlpha = cursorOpacity * hoverAmount * 0.28;
            context.beginPath();
            context.arc(x, y, radius + 5, 0, Math.PI * 2);
            context.stroke();
          }

          context.fillStyle = "#ad7955";
          context.globalAlpha = cursorOpacity * 0.9;
          context.beginPath();
          context.arc(x, y, 2, 0, Math.PI * 2);
          context.fill();

          if (pressAt) {
            const pressProgress = Math.min(1, (now - pressAt) / 260);
            if (pressProgress < 1) {
              context.strokeStyle = "#ad7955";
              context.lineWidth = 0.8;
              context.globalAlpha = cursorOpacity * (1 - pressProgress) * 0.42;
              context.beginPath();
              context.arc(x, y, radius + 3 + pressProgress * 15, 0, Math.PI * 2);
              context.stroke();
            } else {
              pressAt = 0;
            }
          }
          context.restore();
        }
      }

      const hoverIsSettling = Math.abs(targetHoverAmount - hoverAmount) > 0.015;
      const pressIsActive = pressAt > 0 && now - pressAt < 260;
      const cursorIsLeaving = cursorExitAt > 0 && now - cursorExitAt < 160;
      if (strokes.length > 0 || hoverIsSettling || pressIsActive || cursorIsLeaving) {
        scheduleDraw();
      }
    };

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest("a, button, summary, [role='button']"));

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches || !finePointer.matches) {
        previousPoint = null;
        return;
      }

      const nextPoint = { x: event.clientX, y: event.clientY };
      if (previousPoint) {
        const deltaX = nextPoint.x - previousPoint.x;
        const deltaY = nextPoint.y - previousPoint.y;
        const distance = Math.hypot(deltaX, deltaY);
        if (distance >= 28) {
          const angle = Math.atan2(deltaY, deltaX);
          const snappedAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
          strokes.push({
            start: previousPoint,
            end: {
              x: previousPoint.x + Math.cos(snappedAngle) * distance,
              y: previousPoint.y + Math.sin(snappedAngle) * distance,
            },
            createdAt: performance.now(),
          });
          if (strokes.length > 6) strokes.shift();
        }
      }

      cursorPoint = nextPoint;
      previousPoint = nextPoint;
      cursorExitAt = 0;
      targetHoverAmount = isInteractiveTarget(event.target) ? 1 : 0;
      scheduleDraw();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches || !finePointer.matches) return;
      cursorPoint = { x: event.clientX, y: event.clientY };
      targetHoverAmount = isInteractiveTarget(event.target) ? 1 : 0;
      cursorExitAt = 0;
      pressAt = performance.now();
      scheduleDraw();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget) return;
      previousPoint = null;
      cursorExitAt = performance.now();
      scheduleDraw();
    };

    const resetPointer = () => {
      previousPoint = null;
      cursorExitAt = performance.now();
      targetHoverAmount = 0;
      scheduleDraw();
    };

    const updateMotionPreference = () => {
      if (!reducedMotion.matches && finePointer.matches) return;
      previousPoint = null;
      cursorPoint = null;
      cursorExitAt = 0;
      pressAt = 0;
      hoverAmount = 0;
      targetHoverAmount = 0;
      strokes.length = 0;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      context.clearRect(0, 0, viewportWidth, viewportHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", resetPointer);
    reducedMotion.addEventListener("change", updateMotionPreference);
    finePointer.addEventListener("change", updateMotionPreference);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", resetPointer);
      reducedMotion.removeEventListener("change", updateMotionPreference);
      finePointer.removeEventListener("change", updateMotionPreference);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="architecture-atmosphere" aria-hidden="true">
        <div className="architecture-grid" />
        <div className="architecture-orbit" />
        <svg className="architecture-drawing" viewBox="0 0 820 600" fill="none">
          <g className="drafting-guides">
            <circle cx="402" cy="294" r="238" pathLength={1} />
            <path d="M78 464H744M123 148V490M160 518H642" pathLength={1} />
            <path d="M391 42V92M367 67H415" pathLength={1} />
            <path d="M82 488H228M82 482V542M228 482V542M82 534H228" pathLength={1} />
            <path d="M100 526 82 534 100 542M210 526 228 534 210 542" pathLength={1} />
            <circle cx="402" cy="294" r="270" pathLength={1} />
          </g>
          <g className="drafting-annotations">
            <path d="M150 178V150M402 266V238M150 154H402M166 147V161M386 147V161" pathLength={1} />
            <path d="M660 198V360M652 198H668M652 360H668M678 198V360" pathLength={1} />
            <path d="M402 476V520M384 498H420M394 490 402 482 410 490" pathLength={1} />
          </g>
          <g className="drafting-building">
            <path d="M150 207 392 108 644 197 402 296 150 207Z" pathLength={1} />
            <path d="M150 207V371L402 462V296" pathLength={1} />
            <path d="M402 296V462L644 360V197" pathLength={1} />
            <path d="M184 221V383M236 241V402M289 262V421M344 283V442" pathLength={1} />
            <path d="M150 260 402 350M150 315 402 406" pathLength={1} />
            <path d="M437 281V447M486 261V426M533 242V406M581 222V385" pathLength={1} />
            <path d="M402 350 644 249M402 406 644 305" pathLength={1} />
            <path d="M173 198 392 108M226 177 392 108M279 155 392 108M333 133 392 108" pathLength={1} />
            <path d="M410 115 644 197M458 132 644 197M505 149 644 197M553 166 644 197" pathLength={1} />
            <path d="M365 297V278M384 304V284M403 311V291M422 304V284M441 297V278" pathLength={1} />
            <path d="M150 232 402 321 644 223M150 287 402 378 644 278" pathLength={1} />
          </g>
          <g className="drafting-plan">
            <path d="M94 397H223V372H312V348H372V395H458V423H372V449H285V469H202V445H94V397Z" pathLength={1} />
            <path d="M116 407H211V385H298V361M332 360V407H440M349 435H292V455H216V432H116" pathLength={1} />
            <path d="M223 397V424M252 385V407M312 372V423M372 395V449M410 407V423" pathLength={1} />
            <path d="M482 420H632M482 432H600M482 414V438M632 414V438" pathLength={1} />
            <circle cx="312" cy="408" r="19" pathLength={1} />
            <circle cx="312" cy="408" r="9" pathLength={1} />
          </g>
        </svg>
      </div>
      <canvas
        className="architecture-cursor-trail"
        ref={cursorTrailRef}
        aria-hidden="true"
      />
    </>
  );
}
