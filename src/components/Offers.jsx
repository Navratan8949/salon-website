import { useReveal } from '@/hooks/useReveal';

const offers = [
  {
    label: 'New Client Edit',
    title: '15% Off Your First Visit',
    desc: 'A warm welcome to the studio — enjoy 15% off your first service with us.',
  },
  {
    label: 'Bridal Consultation',
    title: 'Complimentary Consultation',
    desc: 'For bridal bookings, a complimentary pre-bridal consultation is included.',
  },
  {
    label: 'Birthday Beauty Edit',
    title: 'Special Birthday-Month Offer',
    desc: 'Celebrate your birthday month with an exclusive edit on selected services.',
  },
];

export default function Offers() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-28 bg-brown text-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow text-champagne">Offers</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-5 leading-[1.05]">
            A Few <span className="italic text-champagne">Considered Offers.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {offers.map((o, i) => (
            <div
              key={o.label}
              className={`border border-cream/15 p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-cream/35`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-[10px] uppercase tracking-widest2 text-champagne">{o.label}</p>
              <h3 className="font-serif text-2xl md:text-3xl text-cream mt-4 leading-tight">{o.title}</h3>
              <p className="text-cream/60 text-sm mt-4 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] uppercase tracking-widest2 text-cream/40 mt-10">
          Offers are limited and may be withdrawn at any time
        </p>
      </div>
    </section>
  );
}
