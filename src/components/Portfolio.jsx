import { useState } from 'react';
import { portfolio, portfolioCategories } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import Lightbox from './Lightbox';

const spanClass = {
  tall: 'row-span-2 aspect-[3/4]',
  wide: 'col-span-2 aspect-[16/10]',
  normal: 'aspect-[4/5]',
};

export default function Portfolio() {
  const [active, setActive] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { ref, visible } = useReveal();

  const filtered = active === 'ALL' ? portfolio : portfolio.filter((p) => p.category === active);

  const openLightbox = (i) => setLightboxIndex(i);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="eyebrow">03 / Our Work</p>
            <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
              Crafted to Be
              <br />
              <span className="italic">Remembered.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {portfolioCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-300 ${
                    isActive ? 'bg-espresso text-cream border-espresso' : 'bg-transparent text-espresso/70 border-espresso/20 hover:border-espresso/50 hover:text-espresso'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden bg-blush/30 ${spanClass[p.span] || spanClass.normal}`}
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-colors duration-500 flex flex-col justify-end p-4 md:p-5">
                <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-widest2 text-cream/80">{p.service} — {p.category}</p>
                  <p className="font-serif text-xl md:text-2xl text-cream mt-1">{p.title}</p>
                  <span className="text-cream text-lg mt-1 inline-block" aria-hidden="true">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex}
        />
      )}
    </section>
  );
}
