import { useState } from 'react';
import { pricing, pricingCategories } from '@/data/pricing';
import { useReveal } from '@/hooks/useReveal';

export default function PricingMenu({ onBook }) {
  const [active, setActive] = useState('Hair');
  const { ref, visible } = useReveal();
  const items = pricing[active];

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Service Menu</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            The <span className="italic">Price List.</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10">
          {pricingCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-300 ${
                  isActive ? 'bg-espresso text-cream border-espresso' : 'bg-transparent text-espresso/70 border-espresso/20 hover:border-espresso/50 hover:text-espresso'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu */}
        <div className="mt-12 max-w-4xl mx-auto border-t border-espresso/15">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="group grid grid-cols-12 gap-4 items-baseline py-5 border-b border-espresso/15 px-2 transition-colors duration-300 hover:bg-blush/20"
            >
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-serif text-2xl text-espresso leading-tight">{item.name}</h3>
                <p className="text-espresso/55 text-sm mt-1">{item.desc}</p>
              </div>
              <span className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-widest2 text-taupe mt-2 md:mt-0">{item.duration}</span>
              <span className="col-span-6 md:col-span-3 font-serif text-2xl text-espresso text-right">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] uppercase tracking-widest2 text-taupe mt-8">Prices may vary after consultation</p>
        <div className="text-center mt-8">
          <button onClick={onBook} className="btn-primary">
            Book an Appointment <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
