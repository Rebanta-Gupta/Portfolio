import type { ProjectItem } from '../../types';
import ProjectCollectionSection from './ProjectCollectionSection';

interface HackathonsProps {
  hackathons: ProjectItem[];
  onOpenProject: (projectId: string, fromSection: string) => void;
}

export default function Hackathons({ hackathons, onOpenProject }: HackathonsProps) {
  return (
    <ProjectCollectionSection
      sectionId="hackathons"
      title="Hackathons"
      items={hackathons}
      onOpenProject={onOpenProject}
    />
  );
}
