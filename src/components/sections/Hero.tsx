import type { HeroData } from '../../types';
import Galaxy from '../effects/Galaxy';

interface HeroProps {
  hero: HeroData;
}

export default function Hero({ hero }: HeroProps) {
  const primaryBtnClass =
    'inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-300 via-cyan-300 to-blue-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_6px_24px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.38)]';
  const outlineBtnClass =
    'inline-flex items-center gap-2 rounded-xl border border-sky-300/70 bg-slate-950/20 px-7 py-3 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-300/12 hover:text-white';

  return (
    <section
      id="home"
      className="section relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-28 [mask-image:linear-gradient(to_bottom,black_0%,black_70%,rgba(0,0,0,0.75)_82%,transparent_100%)]">
        <Galaxy
          hueShift={210}
          density={1.35}
          glowIntensity={0.48}
          twinkleIntensity={0.5}
          rotationSpeed={0.035}
          repulsionStrength={1.6}
          nebulaStrength={0.7}
          backgroundStrength={0.95}
          transparent={true}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-28 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%)] [mask-image:linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,0.72)_84%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-20 bg-linear-to-b from-slate-950/35 via-slate-950/10 via-55% to-[#060b18]/80 [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]" />
      <div className="reveal relative z-[1]">
        <p className="mb-3 text-lg font-medium tracking-[0.18em] text-sky-200/95 uppercase">{hero.greeting}</p>
        <h1 className="mb-4 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.15] tracking-tight text-slate-50 drop-shadow-[0_6px_24px_rgba(2,6,23,0.45)]">
          {hero.name}{' '}
          <span className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
            {hero.highlight}
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-[540px] text-lg leading-8 text-slate-200/95">{hero.tagline}</p>
        <div className="flex flex-wrap justify-center gap-4 max-[480px]:flex-col max-[480px]:items-center">
          <a
            href="#projects"
            className={`${primaryBtnClass} max-[480px]:w-full max-[480px]:max-w-[250px] max-[480px]:justify-center`}
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`${outlineBtnClass} max-[480px]:w-full max-[480px]:max-w-[250px] max-[480px]:justify-center`}
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[-2rem] z-[1] h-44 bg-linear-to-b from-transparent via-[#060b18]/55 to-[#060b18] blur-xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-6rem] z-[1] h-48 rounded-[100%] bg-sky-200/4 blur-3xl" />
    </section>
  );
}
