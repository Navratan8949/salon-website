import { serviceCategories } from '@/data/services';

export default function ServiceFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {serviceCategories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium border transition-all duration-300 ${
              isActive
                ? 'bg-espresso text-cream border-espresso'
                : 'bg-transparent text-espresso/70 border-espresso/20 hover:border-espresso/50 hover:text-espresso'
            }`}
            aria-pressed={isActive}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
