import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

const points = [
  { title: 'Hygiene', desc: 'Sanitised tools, single-use items and a spotless station for every guest.' },
  { title: 'Comfort', desc: 'Considered seating, calm lighting and a pace that never feels rushed.' },
  { title: 'Professional Products', desc: 'Premium professional-only formulations for lasting, healthy results.' },
  { title: 'Personalized Service', desc: 'Every visit begins with a consultation, not an assumption.' },
  { title: 'Calm Environment', desc: 'A quiet, unhurried space designed to let you exhale.' },
];

const gallery = [
  { src: images.salon1, alt: 'Chic modern beauty salon interior with black and white decor', span: 'col-span-2 row-span-2' },
  { src: images.salon2, alt: 'Spacious contemporary salon interior with mirrors and seating', span: 'col-span-1' },
  { src: images.salon3, alt: 'White reception counter with flowers in the salon', span: 'col-span-1' },
  { src: images.salon4, alt: 'Backwash chairs and sinks in the salon', span: 'col-span-1' },
  { src: images.salon5, alt: 'Reception counter with black chairs in the salon', span: 'col-span-1' },
];

export default function SalonExperience() {
  const { ref, visible } = useReveal();
  return (
    <section id="salon" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">The Space</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            A Space Designed
            <br />
            <span className="italic">to Slow Down.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mt-14 items-center">
          {/* Gallery */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
              {gallery.map((g, i) => (
                <div key={i} className={`overflow-hidden bg-blush/30 ${g.span}`}>
                  <img src={g.src} alt={g.alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Points */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ul className="space-y-7">
              {points.map((p) => (
                <li key={p.title} className="border-b border-espresso/10 pb-6">
                  <h3 className="font-serif text-2xl text-espresso">{p.title}</h3>
                  <p className="text-espresso/60 text-sm mt-2 leading-relaxed">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
