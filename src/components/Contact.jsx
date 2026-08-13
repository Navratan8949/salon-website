import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Check } from 'lucide-react';
import { salon } from '@/data/salon';
import { bookingServices } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';

export default function Contact({ onBook }) {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number';
    else if (!/^[+\d\s-]{8,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.service) errs.service = 'Please select a service';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div ref={ref} className="container-edit section-pad">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Contact</p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mt-5 leading-[0.95]">
            Come Visit
            <br />
            <span className="italic">the Studio.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-14">
          {/* Info */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ul className="space-y-8">
              <InfoItem icon={MapPin} label="Address" value={salon.address} />
              <InfoItem icon={Phone} label="Phone" value={salon.phone} href={salon.phoneHref} />
              <InfoItem icon={Mail} label="Email" value={salon.email} href={`mailto:${salon.email}`} />
              <li>
                <div className="flex items-center gap-3 text-champagne">
                  <Clock size={18} strokeWidth={1.5} />
                  <span className="text-[11px] uppercase tracking-widest2 text-taupe">Opening Hours</span>
                </div>
                <div className="mt-3 space-y-2">
                  {salon.hours.map((h) => (
                    <div key={h.days} className="flex justify-between border-b border-espresso/10 pb-2">
                      <span className="text-espresso/70 text-sm">{h.days}</span>
                      <span className="text-espresso text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href={salon.phoneHref} className="inline-flex items-center gap-2 border border-espresso/30 text-espresso px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-espresso hover:text-cream transition-all duration-300">
                <Phone size={15} strokeWidth={1.5} /> Call Now
              </a>
              <a href={salon.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-espresso/30 text-espresso px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-espresso hover:text-cream transition-all duration-300">
                <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp
              </a>
              <a href={salon.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-espresso/30 text-espresso px-5 py-3 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-espresso hover:text-cream transition-all duration-300">
                <MapPin size={15} strokeWidth={1.5} /> Directions
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {sent ? (
              <div className="border border-espresso/15 p-10 md:p-14 text-center anim-fade">
                <div className="w-14 h-14 mx-auto rounded-full bg-espresso text-cream flex items-center justify-center">
                  <Check size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-espresso mt-6">Enquiry Sent</h3>
                <p className="text-espresso/70 mt-4 max-w-md mx-auto">
                  Thank you for reaching out. We will be in touch shortly to assist you.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' }); }} className="btn-secondary mt-8">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="border border-espresso/15 p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Name" error={errors.name}>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Your name" />
                  </FormField>
                  <FormField label="Phone" error={errors.phone}>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="+91 98290 12345" />
                  </FormField>
                </div>
                <FormField label="Email (optional)" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="you@email.com" />
                </FormField>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Service" error={errors.service}>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input appearance-none">
                      <option value="">Select a service</option>
                      {bookingServices.map((s) => <option key={s} value={s}>{s}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </FormField>
                  <FormField label="Preferred Date (optional)">
                    <input type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
                  </FormField>
                </div>
                <FormField label="Message (optional)">
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" placeholder="Tell us what you're looking for" />
                </FormField>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Enquiry <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value, href }) {
  return (
    <li>
      <div className="flex items-center gap-3 text-champagne">
        <Icon size={18} strokeWidth={1.5} />
        <span className="text-[11px] uppercase tracking-widest2 text-taupe">{label}</span>
      </div>
      {href ? (
        <a href={href} className="block text-espresso text-lg mt-2 hover:text-champagne transition-colors">{value}</a>
      ) : (
        <p className="text-espresso text-lg mt-2 leading-relaxed">{value}</p>
      )}
    </li>
  );
}

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-red-700 mt-1.5">{error}</p>}
    </div>
  );
}
