import type { ProjectItem } from '../../types';
import ProjectCollectionSection from './ProjectCollectionSection';

interface ProjectsProps {
  projects: ProjectItem[];
  onOpenProject: (projectId: string, fromSection: string) => void;
}

export default function Projects({ projects, onOpenProject }: ProjectsProps) {
  return (
    <ProjectCollectionSection
      sectionId="projects"
      title="Projects"
      items={projects}
      onOpenProject={onOpenProject}
    />
  );
}
