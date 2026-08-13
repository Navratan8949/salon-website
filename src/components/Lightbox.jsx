import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, index, onClose, onNav }) {
  const next = useCallback(() => onNav((index + 1) % images.length), [index, images.length, onNav]);
  const prev = useCallback(() => onNav((index - 1 + images.length) % images.length), [index, images.length, onNav]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, next, prev]);

  if (!images[index]) return null;
  const item = images[index];

  return (
    <div className="fixed inset-0 z-[80] bg-brown/95 backdrop-blur-sm anim-fade flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 text-cream/80 hover:text-cream p-2 transition-colors">
        <X size={26} strokeWidth={1.5} />
      </button>
      <button onClick={prev} aria-label="Previous" className="absolute left-3 md:left-6 text-cream/80 hover:text-cream p-2 transition-colors">
        <ChevronLeft size={30} strokeWidth={1.5} />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 md:right-6 text-cream/80 hover:text-cream p-2 transition-colors">
        <ChevronRight size={30} strokeWidth={1.5} />
      </button>

      <figure className="max-w-4xl w-full anim-scale">
        <img src={item.image} alt={item.title} className="w-full max-h-[75vh] object-contain" />
        <figcaption className="text-center mt-5">
          <p className="font-serif text-2xl text-cream">{item.title}</p>
          <p className="text-[11px] uppercase tracking-widest2 text-cream/60 mt-2">{item.service} — {item.category}</p>
        </figcaption>
      </figure>
    </div>
  );
}
