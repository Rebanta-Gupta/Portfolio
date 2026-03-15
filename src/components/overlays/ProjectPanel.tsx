import { useEffect, useCallback } from 'react';
import type { ProjectItem, ProjectImage } from '../../types';

interface ProjectPanelProps {
  project: ProjectItem;
  onClose: () => void;
  onOpenLightbox: (image: ProjectImage) => void;
}

export default function ProjectPanel({ project, onClose, onOpenLightbox }: ProjectPanelProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[2000] h-screen w-full translate-x-0 overflow-hidden bg-slate-950"
      id={`panel-${project.id}`}
    >
      <div className="panel-scroll mx-auto h-full max-w-[900px] overflow-y-auto px-[clamp(1.5rem,5vw,4rem)] py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[480px]:p-6">
        <button
          className="mb-10 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300/12 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/8 hover:text-sky-100"
          aria-label="Go back"
          onClick={onClose}
        >
          ← Back to Projects
        </button>
        <div className="mb-8 flex items-center gap-5 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-3">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-300/10 text-[2.5rem]">
            {project.icon}
          </span>
          <h2 className="bg-linear-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-[clamp(1.5rem,4vw,2rem)] font-bold leading-tight text-transparent">
            {project.title}
          </h2>
        </div>
        <div>
          {project.description.map((para, i) => (
            <p key={i} className="mb-5 text-[1.05rem] leading-8 text-slate-200/95">
              {para}
            </p>
          ))}
          {project.images.length > 0 && (
            <div className="my-8 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
              {project.images.map((img, i) => (
                <figure
                  key={i}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-300/12 bg-slate-900/72 transition hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]"
                  onClick={() => onOpenLightbox(img)}
                >
                  <span className="pointer-events-none absolute top-2 right-2 z-[1] flex h-7 w-7 items-center justify-center rounded-md bg-black/50 text-xs opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                    🔍
                  </span>
                  <img
                    className="h-40 w-full object-cover transition duration-[400ms] group-hover:scale-105 max-[600px]:h-[140px]"
                    src={img.src}
                    alt={img.alt}
                  />
                  <figcaption className="px-3 py-2 text-center text-[0.7rem] leading-5 text-slate-400">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-1.5 text-xs font-medium text-sky-100"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-300 via-cyan-300 to-blue-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_6px_24px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.38)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
