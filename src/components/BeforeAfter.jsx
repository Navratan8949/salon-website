import { useRef, useState } from 'react';
import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

const transformations = [
  { title: 'Hair Color Transformation', before: images.beforeAfter[0].before, after: images.beforeAfter[0].after },
  { title: 'Bridal Makeup', before: images.beforeAfter[1].before, after: images.beforeAfter[1].after },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const { ref, visible } = useReveal();

  const updateFromClientX = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  const onDown = (e) => {
    draggingRef.current = true;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { draggingRef.current = false; };

  const t = transformations[active];

  return (
    <section className="py-20 md:py-32 bg-brown text-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow text-champagne">Transformations</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mt-5 leading-[0.95]">
            The Difference
            <br />
            <span className="italic text-champagne">Is in the Detail.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mt-10">
          {transformations.map((tr, i) => (
            <button
              key={tr.title}
              onClick={() => { setActive(i); setPos(50); }}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-300 ${
                active === i ? 'bg-cream text-espresso border-cream' : 'bg-transparent text-cream/70 border-cream/25 hover:border-cream/60 hover:text-cream'
              }`}
              aria-pressed={active === i}
            >
              {tr.title}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] overflow-hidden bg-brown select-none cursor-ew-resize"
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
          >
            {/* After (full) */}
            <img src={t.after} alt={`${t.title} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
            {/* Before (clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img src={t.before} alt={`${t.title} before`} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: 'none' }} loading="lazy" draggable={false} />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest2 text-cream bg-brown/50 px-2 py-1">Before</span>
            <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest2 text-cream bg-brown/50 px-2 py-1">After</span>

            {/* Handle */}
            <div className="absolute top-0 bottom-0 w-px bg-cream pointer-events-none" style={{ left: `${pos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-cream text-espresso flex items-center justify-center text-xs font-medium">
                ⇄
              </div>
            </div>
          </div>
          <p className="text-center text-[11px] uppercase tracking-widest2 text-cream/50 mt-5">Drag to reveal</p>
        </div>
      </div>
    </section>
  );
}
