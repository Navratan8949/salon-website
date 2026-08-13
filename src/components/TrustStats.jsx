import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5K+', label: 'Happy Clients' },
  { value: '20+', label: 'Beauty Services' },
  { value: '15+', label: 'Expert Artists' },
];

export default function TrustStats() {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-espresso text-cream py-14 md:py-20">
      <div ref={ref} className="container-edit section-pad grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-serif text-5xl md:text-6xl text-cream leading-none">{s.value}</p>
            <p className="text-[10px] uppercase tracking-widest2 text-cream/60 mt-4">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
