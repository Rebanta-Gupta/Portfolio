import { useCallback, useEffect, useRef } from 'react';
import type { ProjectImage } from '../../types';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }: LightboxProps) {
  const image = images[currentIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const container = dialogRef.current;
      if (!container) return;

      const focusable = container.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
        return;
      }

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
      return;
    }

    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;

    closeButtonRef.current?.focus();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [handleKeyDown]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[5000] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Project image lightbox"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close lightbox backdrop"
      ></button>
      <div ref={dialogRef} className="relative z-[1] w-[90%] max-w-[700px]">
        <span className="absolute -top-10 left-0 inline-flex items-center gap-1.5 rounded-full border border-sky-300/35 bg-gradient-to-r from-slate-900/92 via-slate-900/90 to-sky-950/70 px-3 py-1.5 text-[11px] font-semibold tracking-[0.02em] text-sky-100 shadow-[0_8px_22px_rgba(6,24,54,0.45)] backdrop-blur-sm max-[600px]:-top-9">
          <span className="text-sky-200/90">Step</span>
          <span className="rounded-full bg-sky-300/16 px-1.5 py-0.5 leading-none text-sky-100">
            {currentIndex + 1}/{images.length}
          </span>
        </span>
        <button
          ref={closeButtonRef}
          className="absolute -top-10 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:border-sky-300 hover:bg-white/20 hover:text-sky-100 max-[600px]:-top-9 max-[600px]:h-8 max-[600px]:w-8"
          aria-label="Close image"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="relative">
          <button
            className="absolute top-1/2 -left-14 z-[2] flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-slate-200/30 bg-slate-900/78 p-0 text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:border-sky-300/80 hover:bg-slate-800/95 hover:text-sky-100 max-[900px]:left-2"
            aria-label="Previous image"
            onClick={onPrevious}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-14 z-[2] flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-slate-200/30 bg-slate-900/78 p-0 text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:border-sky-300/80 hover:bg-slate-800/95 hover:text-sky-100 max-[900px]:right-2"
            aria-label="Next image"
            onClick={onNext}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <img
            className="block max-h-[65vh] w-full rounded-xl object-contain max-[600px]:max-h-[50vh]"
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div className="relative mt-4 rounded-xl border border-slate-300/12 bg-slate-900/72 px-5 py-4 text-center text-sm leading-7 text-slate-200/95 max-[600px]:px-4 max-[600px]:py-3 max-[600px]:text-xs">
          {image.description}
        </div>
      </div>
    </div>
  );
}
