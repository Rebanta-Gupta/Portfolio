import { useCallback, useEffect, useState } from 'react';
import type { ProjectImage } from '../types';

export function useOverlayState() {
  const [activePanelId, setActivePanelId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    document.body.style.overflow = activePanelId || lightboxImage ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanelId, lightboxImage]);

  const openPanel = useCallback((projectId: string) => {
    setActivePanelId(projectId);
  }, []);

  const closePanel = useCallback(() => {
    setActivePanelId(null);
  }, []);

  const openLightbox = useCallback((image: ProjectImage) => {
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return {
    activePanelId,
    lightboxImage,
    isPanelOpen: Boolean(activePanelId),
    openPanel,
    closePanel,
    openLightbox,
    closeLightbox,
  };
}
