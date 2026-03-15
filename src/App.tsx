import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Footer, Lightbox, MainSections, Navbar } from './components';
import ProjectImageGallery from './components/overlays/ProjectImageGallery';
import { usePortfolioData } from './hooks/usePortfolioData';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import type { PortfolioData } from './types';
import { findProjectById } from './utils/portfolio';

interface DataBoundPageProps {
  data: PortfolioData;
}

interface ProjectRouteState {
  fromSection?: string;
  scrollY?: number;
}

interface HomeRouteState {
  returnToSection?: string;
  returnScrollY?: number;
}

function HomePage({ data }: DataBoundPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  useRevealOnScroll(true);

  useEffect(() => {
    const navState = location.state as HomeRouteState | null;
    if (!navState?.returnToSection && typeof navState?.returnScrollY !== 'number') return;

    requestAnimationFrame(() => {
      if (typeof navState.returnScrollY === 'number') {
        window.scrollTo({ top: navState.returnScrollY, behavior: 'auto' });
      } else if (navState.returnToSection) {
        document.querySelector<HTMLElement>(`#${navState.returnToSection}`)?.scrollIntoView({ behavior: 'auto' });
      }

      navigate('.', { replace: true, state: null });
    });
  }, [location.state, navigate]);

  const openProjectPage = useCallback((projectId: string, fromSection: string) => {
    const returnState = {
      returnToSection: fromSection,
      returnScrollY: window.scrollY,
    } satisfies HomeRouteState;

    // Preserve return context on the current home entry so native browser Back can restore it.
    navigate('.', { replace: true, state: returnState });

    navigate(`/projects/${projectId}`, {
      state: {
        fromSection,
        scrollY: window.scrollY,
      } satisfies ProjectRouteState,
    });
  }, [navigate]);

  return (
    <>
      <Navbar panelOpen={false} />
      <div id="main-page" className="translate-x-0 opacity-100">
        <MainSections data={data} onOpenProject={openProjectPage} />
        <Footer />
      </div>
    </>
  );
}

function ProjectDetailsPage({ data }: DataBoundPageProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const project = findProjectById(data, projectId ?? null);
  const routeState = location.state as ProjectRouteState | null;

  const handleBack = useCallback(() => {
    navigate('/', {
      state: {
        returnToSection: routeState?.fromSection ?? 'projects',
        returnScrollY: routeState?.scrollY,
      } satisfies HomeRouteState,
    });
  }, [navigate, routeState?.fromSection, routeState?.scrollY]);

  if (!project) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950 p-8 text-slate-100">
        <div className="w-full max-w-[680px] rounded-xl border border-white/20 bg-black/30 px-5 py-4">
          <strong>Project not found.</strong>
          <div className="mt-4">
            <button
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300/12 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/8 hover:text-sky-100"
              onClick={handleBack}
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="w-full px-[clamp(1.25rem,4vw,3.5rem)] py-10 max-[480px]:px-4">
        <button
          className="mb-10 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300/12 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/8 hover:text-sky-100"
          aria-label="Go back"
          onClick={handleBack}
        >
          ← Back to Portfolio
        </button>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-start">
          <div>
            <div className="mb-8 flex items-center gap-5 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-300/10 text-[2.5rem]">
                {project.icon}
              </span>
              <h1 className="bg-linear-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-[clamp(1.5rem,4vw,2.2rem)] font-bold leading-tight text-transparent">
                {project.title}
              </h1>
            </div>
            {project.description.map((para, i) => (
              <p key={i} className="mb-5 text-[1.05rem] leading-8 text-slate-200/95">
                {para}
              </p>
            ))}
          </div>

          {project.images.length > 0 && (
            <aside className="lg:sticky lg:top-8">
              <ProjectImageGallery
                images={project.images}
                onOpenImage={setLightboxIndex}
              />
            </aside>
          )}
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
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
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrevious={() => setLightboxIndex(prev => (prev === null ? 0 : (prev - 1 + project.images.length) % project.images.length))}
          onNext={() => setLightboxIndex(prev => (prev === null ? 0 : (prev + 1) % project.images.length))}
        />
      )}
    </div>
  );
}

export default function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center text-slate-100">
        Loading portfolio...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="grid min-h-screen place-items-center p-8">
        <div className="w-full max-w-[680px] rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-white">
          <strong>Failed to load portfolio data.</strong>
          {error ? <div className="mt-2 opacity-[0.85]">{error}</div> : null}
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage data={data} />} />
      <Route path="/projects/:projectId" element={<ProjectDetailsPage data={data} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
