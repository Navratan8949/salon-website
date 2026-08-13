import { Instagram } from 'lucide-react';
import { stylists } from '@/data/stylists';
import { useReveal } from '@/hooks/useReveal';

export default function Stylists({ onBook }) {
  const { ref, visible } = useReveal();
  return (
    <section id="stylists" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">04 / The Artists</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Meet the People
            <br />
            <span className="italic">Behind the Craft.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14">
          {stylists.map((s, i) => (
            <div
              key={s.id}
              className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-blush/30">
                <img src={s.image} alt={`${s.name}, ${s.specialty}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-2xl text-espresso">{s.name}</h3>
                <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-2">{s.specialty}</p>
                <p className="text-sm text-espresso/60 mt-1">{s.experience}</p>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href={s.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso/60 hover:text-espresso transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`${s.name} on Instagram`}
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <button
                    onClick={() => onBook(s.name)}
                    className="text-[11px] uppercase tracking-[0.18em] font-medium text-espresso border-b border-espresso/30 pb-0.5 hover:border-espresso transition-colors"
                  >
                    Book with Artist →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
