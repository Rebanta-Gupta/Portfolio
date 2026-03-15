import type { ExperienceItem } from '../../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section px-6 py-20 max-[480px]:px-4 max-[480px]:py-12">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="reveal mb-12 inline-block border-b-2 border-sky-300 pb-2 text-3xl font-bold text-slate-50">Experience</h2>
        <div className="relative pl-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-sky-300 before:via-cyan-300 before:to-transparent max-[768px]:pl-6">
          {experience.map((exp, i) => (
            <div className="reveal relative mb-8" key={i}>
              <div className="absolute top-6 -left-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-950 bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.42)] max-[768px]:-left-6"></div>
              <div className="rounded-2xl border border-slate-300/12 bg-slate-900/72 p-6 backdrop-blur-xs transition hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2 max-[768px]:flex-col">
                  <h3 className="text-xl font-semibold text-slate-50">{exp.title}</h3>
                  <span className="font-mono text-sm font-medium whitespace-nowrap text-sky-200">{exp.date}</span>
                </div>
                <p className="mb-3 text-sm text-slate-400 italic">{exp.location}</p>
                <p className="mb-4 text-sm leading-7 text-slate-200/95">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="rounded-full border border-sky-300/20 bg-sky-300/10 px-2.5 py-1 text-xs font-medium text-sky-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
