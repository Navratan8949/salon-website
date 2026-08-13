import { images } from '@/data/images';
import { useReveal } from '@/hooks/useReveal';

const brands = ["L'Oréal Professionnel", 'Wella Professionals', 'Schwarzkopf Professional', 'Olaplex', 'Kérastase'];

export default function Brands() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-espresso/10">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Professional Product Brands</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mt-5 leading-[1.05] max-w-2xl mx-auto">
            Professional Products.
            <br />
            <span className="italic">Thoughtful Results.</span>
          </h2>
        </div>

        <div className={`mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {brands.map((b) => (
            <span key={b} className="font-serif text-xl md:text-2xl text-espresso/55 hover:text-espresso transition-colors duration-300 tracking-wide">
              {b}
            </span>
          ))}
        </div>

        <p className="text-center text-[11px] uppercase tracking-widest2 text-taupe mt-10">
          Professional product brands — placeholders to be replaced with confirmed partners
        </p>
      </div>
    </section>
  );
}
