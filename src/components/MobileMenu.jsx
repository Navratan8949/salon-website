import { useEffect } from 'react';
import { X } from 'lucide-react';
import { navLinks, salon } from '@/data/salon';

export default function MobileMenu({ open, onClose, onBook }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-brown/40" onClick={onClose} />
      <aside
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-espresso/10">
          <span className="font-serif text-xl text-espresso">{salon.name}</span>
          <button onClick={onClose} aria-label="Close menu" className="text-espresso p-2 -mr-2">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={onClose}
                  className="block py-3 font-serif text-3xl text-espresso border-b border-espresso/10 transition-colors duration-300 hover:text-champagne"
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-espresso/10">
          <button
            onClick={() => { onClose(); onBook(); }}
            className="w-full inline-flex items-center justify-center gap-2 bg-espresso text-cream px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:gap-3"
          >
            Book Appointment <span aria-hidden="true">→</span>
          </button>
          <p className="text-center text-[11px] uppercase tracking-widest2 text-taupe mt-4">{salon.location}</p>
        </div>
      </aside>
    </div>
  );
}
