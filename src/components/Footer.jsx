import { Instagram, Facebook } from 'lucide-react';
import { salon, navLinks } from '@/data/salon';

const serviceLinks = ['Hair', 'Makeup', 'Beauty', 'Grooming', 'Bridal'];

export default function Footer({ onBook }) {
  return (
    <footer className="bg-brown text-cream pt-20 md:pt-28 pb-10 md:pb-12">
      <div className="container-edit section-pad">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-serif text-3xl text-cream">{salon.name}</p>
            <p className="text-[11px] uppercase tracking-widest2 text-cream/50 mt-2">{salon.tagline}</p>
            <p className="text-cream/60 text-sm mt-6 leading-relaxed max-w-xs">
              A modern beauty studio where thoughtful styling, expert artistry and a calm environment come together.
            </p>
            <button onClick={onBook} className="inline-flex items-center gap-2 bg-cream text-espresso px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium mt-8 hover:bg-champagne hover:gap-3 transition-all duration-300">
              Book Appointment <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-widest2 text-cream/40">Navigation</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/70 text-sm hover:text-cream transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-widest2 text-cream/40">Services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-cream/70 text-sm hover:text-cream transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-widest2 text-cream/40">Contact</p>
            <ul className="mt-5 space-y-3">
              <li><a href={salon.phoneHref} className="text-cream/70 text-sm hover:text-cream transition-colors">{salon.phone}</a></li>
              <li><a href={`mailto:${salon.email}`} className="text-cream/70 text-sm hover:text-cream transition-colors">{salon.email}</a></li>
              <li><p className="text-cream/70 text-sm leading-relaxed">{salon.address}</p></li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href={salon.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/60 hover:text-cream transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href={salon.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/60 hover:text-cream transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href={salon.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-cream/60 hover:text-cream transition-colors text-sm font-medium">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/40">© 2026 {salon.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] uppercase tracking-widest2 text-cream/40 hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="text-[11px] uppercase tracking-widest2 text-cream/40 hover:text-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
