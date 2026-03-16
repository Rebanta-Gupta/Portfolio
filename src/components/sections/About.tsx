interface AboutProps {
  about: string[];
}

export default function About({ about }: AboutProps) {
  const portraitSrc = `${import.meta.env.BASE_URL}images/rebanta-portrait.jpeg`;

  return (
    <section id="about" className="section relative -mt-24 px-6 pt-36 pb-20 max-[480px]:px-4 max-[480px]:-mt-14 max-[480px]:pt-24 max-[480px]:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#060b18] via-[#060b18]/72 to-transparent blur-2xl" />
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="reveal mb-12 inline-block border-b-2 border-sky-300 pb-2 text-3xl font-bold text-slate-50">About Me</h2>
        <div className="grid items-start gap-10 md:grid-cols-[1fr_320px] md:gap-12">
          <div className="reveal">
            {about.map((paragraph, i) => (
              <p key={i} className="mb-5 text-[1.05rem] leading-8 text-slate-200/95">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="reveal md:justify-self-end">
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full border border-sky-300/45 bg-slate-900/45 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:h-[320px] md:w-[320px]">
              <img
                src={portraitSrc}
                alt="Rebanta portrait"
                className="h-full w-full rounded-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
