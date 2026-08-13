import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Images */}
        <div className={`lg:col-span-6 grid grid-cols-2 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="aspect-[3/4] overflow-hidden bg-blush/30">
            <img src={images.aboutMain} alt="Professional hairdresser styling a client's hair in the studio" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-blush/30 mt-8">
              <img src={images.aboutSecondary} alt="Smiling stylist in the salon" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`lg:col-span-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">01 / The Studio</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Beauty,
            <br />
            <span className="italic">with Intention.</span>
          </h2>
          <p className="text-espresso/70 text-lg leading-relaxed mt-8 max-w-lg">
            A modern beauty studio where thoughtful styling, expert artistry and a calm environment come together to create an experience that feels entirely personal.
          </p>
          <a href="#salon" className="btn-secondary mt-10">
            Discover Our Story <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
