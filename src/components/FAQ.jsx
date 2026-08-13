import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Questions</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Before You <span className="italic">Visit.</span>
          </h2>
        </div>

        <div className={`mt-12 border-t border-espresso/15 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-espresso/15">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span className="font-serif text-xl md:text-2xl text-espresso group-hover:text-espresso/80 transition-colors">{f.q}</span>
                  <span className="shrink-0 text-espresso/60 group-hover:text-espresso transition-colors">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="text-espresso/65 text-sm md:text-base leading-relaxed pb-6 pr-10">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
