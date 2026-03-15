import { useCallback, useMemo, useState } from "react";
import type { ProjectImage } from "../../types";

const SLOT_PX = 190;
const SLOTS = [-1, 0, 1] as const;

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  onOpenImage: (index: number) => void;
  className?: string;
}

export default function ProjectImageGallery({ images, onOpenImage, className = "" }: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  const wrapIdx = useCallback(
    (n: number) => ((n % images.length) + images.length) % images.length,
    [images.length]
  );

  const spin = useCallback(
    (dir: number) => {
      setTooltip(t => ({ ...t, visible: false }));
      if (images.length === 0) return;
      setActiveIndex(prev => wrapIdx(prev + dir));
    },
    [images.length, wrapIdx]
  );

  const viewportWidth = typeof window === "undefined" ? 1280 : window.innerWidth;
  const tooltipLeft = Math.min(Math.max(tooltip.x + 18, 12), viewportWidth - 228);
  const arrowOffset = 176;

  const visibleCards = useMemo(
    () => {
      if (images.length === 0) return [];
      return SLOTS.map(slot => ({ slot, index: wrapIdx(activeIndex + slot), image: images[wrapIdx(activeIndex + slot)] }));
    },
    [activeIndex, images, wrapIdx]
  );

  const handleCardKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpenImage(index);
    }
  }, [onOpenImage]);

  if (images.length === 0) return null;

  return (
    <div
      className={`relative mt-0 mb-2 flex w-full items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{ height: "min(76vh, 680px)" }}
      onMouseMove={e => setTooltip(t => ({ ...t, x: e.clientX, y: e.clientY }))}
    >
      <button
        type="button"
        aria-label="Show previous image"
        className="absolute top-1/2 left-1/2 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200/30 bg-slate-950/75 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-sky-300/70 hover:text-sky-100"
        style={{ transform: `translate(-50%, calc(-50% - ${arrowOffset}px))` }}
        onClick={() => spin(-1)}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-32" style={{ background: "linear-gradient(to bottom, rgba(2,6,23,0.92) 0%, transparent 100%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.92) 0%, transparent 100%)" }} />

      {visibleCards.map(({ slot, index, image }) => {
        const abs = Math.abs(slot);
        const scale = slot === 0 ? 1 : 0.87;
        const opacity = slot === 0 ? 1 : 0.65;
        const blur = slot === 0 ? 0 : 1.8;
        const rx = slot * -10;
        const isCenter = slot === 0;

        return (
          <button
            type="button"
            key={slot}
            className={`absolute left-1/2 w-[min(92vw,460px)] overflow-hidden rounded-[28px] border-4 border-slate-100/90 bg-slate-900/72 transition-[transform,opacity,filter,border-color] duration-300 ease-out hover:border-sky-300/70 ${isCenter ? "cursor-none" : "cursor-pointer"}`}
            aria-label={`${isCenter ? "Open" : "Preview"} image ${index + 1}: ${image.caption}`}
            style={{
              top: "50%",
              transform: `perspective(1100px) translate(-50%, calc(-50% + ${slot * SLOT_PX}px)) scale(${scale}) rotateX(${rx}deg)`,
              opacity,
              filter: blur ? `saturate(0.7) blur(${blur}px)` : "none",
              zIndex: isCenter ? 30 : 12 - abs,
            }}
            onMouseEnter={() => isCenter && setTooltip(t => ({ ...t, visible: true }))}
            onMouseLeave={() => isCenter && setTooltip(t => ({ ...t, visible: false }))}
            onKeyDown={e => handleCardKeyDown(e, index)}
            onClick={() => onOpenImage(index)}
          >
            <img className="h-56 w-full object-cover" src={image.src} alt={image.alt} />
            <span className="block px-3 py-2 text-center text-[0.76rem] leading-5 text-slate-200/95">
              {image.caption}
            </span>
          </button>
        );
      })}

      {tooltip.visible && (
        <div className="pointer-events-none fixed z-30" style={{ left: tooltipLeft, top: tooltip.y - 18 }}>
          <span className="block whitespace-nowrap rounded-lg border border-sky-300/35 bg-slate-900/90 px-3 py-1.5 text-[11px] font-medium text-sky-100 shadow-[0_6px_18px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            Click to view description
          </span>
        </div>
      )}

      <button
        type="button"
        aria-label="Show next image"
        className="absolute top-1/2 left-1/2 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200/30 bg-slate-950/75 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-sky-300/70 hover:text-sky-100"
        style={{ transform: `translate(-50%, calc(-50% + ${arrowOffset}px))` }}
        onClick={() => spin(1)}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
