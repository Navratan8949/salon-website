import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

const includes = ['Consultation', 'Hair analysis', 'Personalized styling', 'Treatment', 'Finish styling'];

export default function FeaturedExperience({ onBook }) {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-32 bg-brown text-cream">
      <div ref={ref} className="container-edit section-pad grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className={`lg:col-span-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow text-champagne">Signature Experience</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mt-5 leading-[0.95]">
            The Complete
            <br />
            <span className="italic text-champagne">Hair Transformation.</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest2 text-cream/50">Duration</p>
              <p className="font-serif text-2xl text-cream mt-2">2–3 Hours</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest2 text-cream/50">Perfect For</p>
              <p className="font-serif text-2xl text-cream mt-2">Color / Cut / Styling</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-widest2 text-cream/50">Includes</p>
            <ul className="mt-4 space-y-2.5">
              {includes.map((inc) => (
                <li key={inc} className="flex items-center gap-3 text-cream/85">
                  <span className="w-1.5 h-1.5 bg-champagne" aria-hidden="true" />
                  <span className="text-sm tracking-wide">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest2 text-cream/50">Starting from</p>
              <p className="font-serif text-4xl text-cream mt-1">₹4,999</p>
            </div>
            <button onClick={onBook} className="inline-flex items-center gap-2 bg-cream text-espresso px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-champagne hover:gap-3">
              Book this Experience <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className={`lg:col-span-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="aspect-[4/5] overflow-hidden bg-brown">
            <img src={images.featuredExperience} alt="Hairdresser styling a client's hair in a modern salon" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
