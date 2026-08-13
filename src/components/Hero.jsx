import { salon } from '@/data/salon';
import { images } from '@/data/images';

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-12 md:pb-20 bg-cream overflow-hidden">
      <div className="container-edit section-pad">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Text column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow anim-fade" style={{ animationDelay: '100ms', opacity: 0 }}>
              Luxury Hair & Beauty Studio
            </p>
            <h1 className="font-serif text-[3.25rem] sm:text-6xl lg:text-[4.5rem] leading-[0.95] text-espresso mt-5 anim-slide-up" style={{ opacity: 0 }}>
              Your Beauty,
              <br />
              <span className="italic text-espresso/90">Refined.</span>
            </h1>
            <p className="text-espresso/70 text-base md:text-lg leading-relaxed max-w-md mt-7 anim-fade" style={{ animationDelay: '250ms', opacity: 0 }}>
              Personalized hair, beauty and self-care experiences designed around you.
            </p>

            <div className="flex flex-wrap gap-4 mt-9 anim-fade" style={{ animationDelay: '350ms', opacity: 0 }}>
              <button onClick={onBook} className="btn-primary">
                Book an Appointment <span aria-hidden="true">→</span>
              </button>
              <a href="#services" className="btn-secondary">
                Explore Services <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 anim-fade" style={{ animationDelay: '450ms', opacity: 0 }}>
              <div>
                <p className="text-[10px] uppercase tracking-widest2 text-taupe">Est.</p>
                <p className="font-serif text-2xl text-espresso">{salon.established}</p>
              </div>
              <div className="w-px h-10 bg-espresso/15" />
              <div>
                <p className="text-[10px] uppercase tracking-widest2 text-taupe">Location</p>
                <p className="font-serif text-2xl text-espresso">{salon.location}</p>
              </div>
            </div>
          </div>

          {/* Image column - asymmetric editorial */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative grid grid-cols-12 gap-3 md:gap-4">
              {/* Main portrait */}
              <div className="col-span-9 aspect-[3/4] overflow-hidden bg-blush/30 anim-scale" style={{ animationDelay: '150ms', opacity: 0 }}>
                <img
                  src={images.heroMain}
                  alt="Woman with an elegant polished updo hairstyle in a studio editorial portrait"
                  className="w-full h-full object-cover anim-kenburns"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Secondary image */}
              <div className="col-span-3 flex flex-col gap-3 md:gap-4">
                <div className="aspect-[3/4] overflow-hidden bg-blush/30 anim-scale" style={{ animationDelay: '300ms', opacity: 0 }}>
                  <img
                    src={images.heroSecondary}
                    alt="Hair stylist applying color to a client's hair"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-blush/30 anim-scale" style={{ animationDelay: '400ms', opacity: 0 }}>
                  <img
                    src={images.heroDetail}
                    alt="Close-up of a hairdresser using a brush and hairdryer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating editorial label */}
              <div className="absolute -bottom-3 left-2 bg-cream/90 backdrop-blur-sm px-5 py-3 border border-espresso/10 anim-fade" style={{ animationDelay: '500ms', opacity: 0 }}>
                <p className="text-[10px] uppercase tracking-widest2 text-taupe">Editorial</p>
                <p className="font-serif text-lg text-espresso leading-tight">The Spring Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
