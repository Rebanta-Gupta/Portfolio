import type { SkillGroup } from '../../types';
import { PortfolioIconSvg } from '../../utils/icons';

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section px-6 py-20 max-[480px]:px-4 max-[480px]:py-12">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="reveal mb-12 inline-block border-b-2 border-sky-300 pb-2 text-3xl font-bold text-slate-50">Skills</h2>
        <div className="reveal grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {skills.map((group, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-300/12 bg-slate-900/72 p-6 backdrop-blur-xs transition hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]"
            >
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-slate-50">
                <PortfolioIconSvg name={group.icon} className="h-5 w-5 text-sky-100" />
                <span>{group.category}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span
                    key={j}
                    className="rounded-lg border border-slate-300/12 bg-gradient-to-br from-sky-300/14 to-cyan-300/14 px-3.5 py-1.5 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:from-sky-300/28 hover:to-cyan-300/24"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
