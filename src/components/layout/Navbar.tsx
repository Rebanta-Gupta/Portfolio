import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

interface NavbarProps {
  panelOpen: boolean;
}

export default function Navbar({ panelOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      ref={navRef}
      className={`fixed top-0 left-0 z-[1000] w-full border-b border-slate-400/15 backdrop-blur-xl transition-[background-color,box-shadow,transform,opacity] duration-500 ${
        scrolled ? 'bg-slate-950/95 shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : 'bg-slate-950/85'
      } ${panelOpen ? '-translate-x-[30%] opacity-20 pointer-events-none' : 'translate-x-0 opacity-100'}`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight text-slate-50 transition-colors hover:text-sky-200"
          onClick={e => handleNavClick(e, '#home')}
        >
          RVG<span className="text-sky-300">.</span>
        </a>
        <button
          className="z-[1001] flex cursor-pointer flex-col gap-1.5 bg-transparent p-1 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span
            className={`h-0.5 w-6 rounded bg-slate-100 transition-all ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 rounded bg-slate-100 transition-all ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 rounded bg-slate-100 transition-all ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          ></span>
        </button>
        <ul
          className={`fixed top-0 h-screen w-[70%] max-w-[300px] flex-col gap-1 border-l border-slate-400/15 bg-slate-950/97 px-8 pt-20 pb-8 backdrop-blur-xl transition-[right] duration-[400ms] md:static md:flex md:h-auto md:w-auto md:max-w-none md:flex-row md:border-none md:bg-transparent md:px-0 md:pt-0 md:pb-0 ${
            menuOpen ? 'right-0 flex' : '-right-full flex'
          }`}
        >
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors md:px-4 md:py-2 md:text-sm ${
                  activeLink === link.href
                    ? 'bg-sky-300/12 text-sky-100'
                    : 'text-slate-200 hover:bg-sky-300/8 hover:text-sky-100'
                }`}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
