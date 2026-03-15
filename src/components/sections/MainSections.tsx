import type { PortfolioData } from '../../types';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hackathons from './Hackathons';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

interface MainSectionsProps {
  data: PortfolioData;
  onOpenProject: (projectId: string, fromSection: string) => void;
}

export default function MainSections({ data, onOpenProject }: MainSectionsProps) {
  return (
    <>
      <Hero hero={data.hero} />
      <About about={data.about} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} onOpenProject={onOpenProject} />
      <Hackathons hackathons={data.hackathons} onOpenProject={onOpenProject} />
      <Skills skills={data.skills} />
      <Contact contact={data.contact} />
    </>
  );
}
