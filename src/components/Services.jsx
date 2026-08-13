import { useState } from 'react';
import { services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import ServiceFilter from './ServiceFilter';

export default function Services({ onBook }) {
  const [active, setActive] = useState('ALL');
  const { ref, visible } = useReveal();

  const filtered = active === 'ALL' ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="eyebrow">02 / Services</p>
            <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
              The Art of
              <br />
              <span className="italic">Looking Your Best.</span>
            </h2>
          </div>
          <p className="text-espresso/70 text-lg leading-relaxed max-w-md">
            From everyday styling to complete transformations, every service is tailored to you.
          </p>
        </div>

        <div className="mt-10">
          <ServiceFilter active={active} onChange={setActive} />
        </div>

        {/* Editorial service list */}
        <div className="mt-10 border-t border-espresso/15">
          {filtered.map((s, i) => (
            <div
              key={s.id}
              className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-espresso/15 px-2 md:px-4 transition-colors duration-300 hover:bg-blush/25 cursor-pointer"
              style={{ animationDelay: `${i * 30}ms` }}
              onClick={() => onBook(s.name)}
            >
              <span className="col-span-1 font-serif text-lg text-champagne">{String(i + 1).padStart(2, '0')}</span>
              <div className="col-span-11 md:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl text-espresso leading-tight">{s.name}</h3>
                <p className="text-espresso/60 text-sm mt-1.5 max-w-md">{s.desc}</p>
              </div>
              <span className="hidden md:block col-span-2 text-[11px] uppercase tracking-widest2 text-taupe">{s.duration}</span>
              <span className="hidden md:block col-span-2 font-serif text-2xl text-espresso">{s.price}</span>
              <span className="hidden md:flex col-span-2 justify-end">
                <span className="text-espresso text-xl transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">→</span>
              </span>
              {/* Mobile compact row */}
              <div className="col-span-11 md:hidden flex items-center justify-between mt-1">
                <span className="text-[11px] uppercase tracking-widest2 text-taupe">{s.duration}</span>
                <span className="font-serif text-xl text-espresso">{s.price}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-8">Prices may vary after consultation</p>
      </div>
    </section>
  );
}
