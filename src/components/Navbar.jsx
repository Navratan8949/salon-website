import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, salon } from '@/data/salon';
import MobileMenu from './MobileMenu';

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-espresso/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-edit section-pad flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none" aria-label={`${salon.name} home`}>
            <span className="font-serif text-xl md:text-2xl text-espresso tracking-wide">{salon.name}</span>
            <span className="text-[9px] uppercase tracking-widest2 text-taupe mt-0.5 hidden sm:block">Hair & Beauty Studio</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] uppercase tracking-[0.18em] text-espresso/80 hover:text-espresso transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBook}
              className="hidden md:inline-flex items-center gap-2 bg-espresso text-cream px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-brown hover:gap-3"
            >
              Book Appointment
              <span aria-hidden="true">→</span>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-espresso p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} onBook={onBook} />
    </>
  );
}
