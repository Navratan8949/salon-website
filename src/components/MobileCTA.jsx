import { Calendar, MessageCircle } from 'lucide-react';
import { salon } from '@/data/salon';

export default function MobileCTA({ onBook }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-cream/95 backdrop-blur-sm border-t border-espresso/10 px-4 py-3 grid grid-cols-2 gap-3">
      <button
        onClick={onBook}
        className="inline-flex items-center justify-center gap-2 bg-espresso text-cream px-4 py-3 text-[11px] uppercase tracking-[0.18em] font-medium"
      >
        <Calendar size={15} strokeWidth={1.5} />
        Book
      </button>
      <a
        href={salon.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 border border-espresso/40 text-espresso px-4 py-3 text-[11px] uppercase tracking-[0.18em] font-medium"
      >
        <MessageCircle size={15} strokeWidth={1.5} />
        WhatsApp
      </a>
    </div>
  );
}
