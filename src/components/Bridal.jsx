import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

const bridalServices = ['Bridal Makeup', 'Hair Styling', 'Draping', 'Pre-Bridal Services', 'Bridal Trials', 'Family Packages'];

export default function Bridal({ onBook }) {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-32 bg-brown text-cream">
      <div ref={ref} className="container-edit section-pad grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow text-champagne">Bridal</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mt-5 leading-[0.95]">
            For Your
            <br />
            <span className="italic text-champagne">Most Important Days.</span>
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mt-8 max-w-md">
            Considered bridal artistry — from the first trial to the final moment. Every detail designed so you feel like yourself, at your most radiant.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8">
            {bridalServices.map((s) => (
              <li key={s} className="flex items-center gap-3 text-cream/85">
                <span className="w-1.5 h-1.5 bg-champagne" aria-hidden="true" />
                <span className="text-sm tracking-wide">{s}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-cream text-espresso px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-champagne hover:gap-3">
              Explore Bridal Services <span aria-hidden="true">→</span>
            </a>
            <button onClick={onBook} className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-cream hover:text-espresso hover:gap-3">
              Book a Consultation <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className={`lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="aspect-[3/4] overflow-hidden bg-brown">
            <img src={images.bridal} alt="Bride in a detailed lace wedding dress, editorial portrait" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-brown mt-8">
            <img src={images.bridalSecondary} alt="Close-up of a bride with veil and pearls" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
