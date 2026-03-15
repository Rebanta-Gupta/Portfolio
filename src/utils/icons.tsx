import {
  Atom,
  Beaker,
  Boxes,
  ChartColumn,
  Code,
  Github,
  Linkedin,
  Mail,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { PortfolioIcon } from '../types';

const iconMap: Record<PortfolioIcon, LucideIcon> = {
  atom: Atom,
  beaker: Beaker,
  boxes: Boxes,
  'chart-column': ChartColumn,
  code: Code,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  wrench: Wrench,
  zap: Zap,
};

interface PortfolioIconProps {
  name: PortfolioIcon;
  className?: string;
}

export function PortfolioIconSvg({ name, className }: PortfolioIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
