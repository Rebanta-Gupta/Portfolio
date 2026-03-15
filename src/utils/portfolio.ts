import type { PortfolioData, ProjectItem } from '../types';

export function findProjectById(data: PortfolioData, projectId: string | null): ProjectItem | undefined {
  if (!projectId) return undefined;

  return data.projects.find(project => project.id === projectId)
    ?? data.hackathons.find(project => project.id === projectId);
}
