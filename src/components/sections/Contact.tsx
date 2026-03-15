import type { ContactItem } from '../../types';
import { PortfolioIconSvg } from '../../utils/icons';

interface ContactProps {
  contact: ContactItem[];
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="section px-6 py-20 max-[480px]:px-4 max-[480px]:py-12">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="reveal mb-12 inline-block border-b-2 border-sky-300 pb-2 text-3xl font-bold text-slate-50">Get in Touch</h2>
        <div className="reveal grid max-w-[800px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {contact.map((item, i) => (
            <a
              key={i}
              href={item.url}
              {...(!item.url.startsWith('mailto') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="block rounded-2xl border border-slate-300/12 bg-slate-900/72 p-6 text-center backdrop-blur-xs transition hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]"
            >
              <span className="mb-3 flex justify-center">
                <PortfolioIconSvg name={item.icon} className="h-8 w-8 text-sky-100" />
              </span>
              <h3 className="mb-1 text-base font-semibold text-slate-50">{item.label}</h3>
              <p className="text-sm text-slate-200/95">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
