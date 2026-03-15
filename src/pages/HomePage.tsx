import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Footer, MainSections, Navbar } from '../components';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import type { PortfolioData } from '../types';

interface HomeRouteState {
  returnToSection?: string;
  returnScrollY?: number;
}

interface ProjectRouteState {
  fromSection: string;
  scrollY: number;
}

interface HomePageProps {
  data: PortfolioData;
}

export default function HomePage({ data }: HomePageProps) {
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
