import { Instagram } from 'lucide-react';
import { instagramImages } from '@/data/images';
import { salon } from '@/data/salon';
import { useReveal } from '@/hooks/useReveal';

export default function InstagramSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-32 bg-cream border-t border-espresso/10">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Social</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Follow the
            <br />
            <span className="italic">Studio.</span>
          </h2>
          <a
            href={salon.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[12px] uppercase tracking-[0.2em] font-medium text-espresso hover:text-champagne transition-colors"
          >
            <Instagram size={16} strokeWidth={1.5} />
            @{salon.name.toLowerCase().replace(/\s+/g, '')}
          </a>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-12 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {instagramImages.map((src, i) => (
            <a
              key={i}
              href={salon.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-blush/30"
            >
              <img src={src} alt={`Studio Instagram post ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-colors duration-500 flex items-center justify-center">
                <Instagram size={22} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={salon.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow on Instagram <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
