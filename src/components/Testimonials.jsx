import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();
  const t = testimonials[active];

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Client Words</p>
          <div className="flex justify-center gap-1 mt-5" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="text-champagne fill-champagne" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2] mt-8 italic">
            "{t.quote}"
          </blockquote>
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-espresso">— {t.name}</p>
            <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-1">{t.service}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={prev} aria-label="Previous testimonial" className="text-espresso/60 hover:text-espresso p-2 transition-colors">
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${i === active ? 'w-8 bg-espresso' : 'w-1.5 bg-espresso/25'}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="text-espresso/60 hover:text-espresso p-2 transition-colors">
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
