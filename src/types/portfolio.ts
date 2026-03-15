export interface HeroData {
  greeting: string;
  name: string;
  highlight: string;
  tagline: string;
}

export interface ExperienceItem {
  title: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  icon: string;
  title: string;
  brief: string;
  description: string[];
  images: ProjectImage[];
  tags: string[];
  link: string | null;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  hackathons: ProjectItem[];
  skills: SkillGroup[];
  contact: ContactItem[];
}
