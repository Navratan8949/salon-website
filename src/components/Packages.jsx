import { packages } from '@/data/packages';
import { useReveal } from '@/hooks/useReveal';

const accentMap = {
  blush: 'bg-blush/40 text-espresso',
  champagne: 'bg-champagne/30 text-espresso',
  espresso: 'bg-espresso text-cream',
  taupe: 'bg-taupe/30 text-espresso',
};

export default function Packages({ onBook }) {
  const { ref, visible } = useReveal();
  return (
    <section id="packages" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Packages</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Curated <span className="italic">Experiences.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`group relative border border-espresso/15 p-8 md:p-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-espresso/40`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">{p.name}</h3>
                  <p className="text-espresso/60 text-sm mt-3 max-w-xs">{p.tagline}</p>
                </div>
                <span className={`shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-widest2 ${accentMap[p.accent]}`}>
                  {p.includes.length} services
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-3 border-b border-espresso/10 pb-3">
                    <span className="w-1 h-1 bg-champagne" aria-hidden="true" />
                    <span className="text-espresso/80 text-sm tracking-wide">{inc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between mt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-taupe">Starting from</p>
                  <p className="font-serif text-4xl text-espresso mt-1">{p.price}</p>
                </div>
                <button onClick={onBook} className="text-[11px] uppercase tracking-[0.18em] font-medium text-espresso border-b border-espresso/30 pb-0.5 hover:border-espresso transition-colors">
                  Book Package →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
