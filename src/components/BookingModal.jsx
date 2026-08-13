import { useEffect, useMemo, useState } from 'react';
import { X, Check, ChevronRight } from 'lucide-react';
import { bookingServices } from '@/data/services';
import { bookingArtists } from '@/data/stylists';

const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'];

const steps = ['Service', 'Artist', 'Date', 'Time', 'Details'];

function getMinDate() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

export default function BookingModal({ open, onClose, presetService, presetArtist }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: '',
    artist: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setSubmitted(false);
      setErrors({});
      setData((d) => ({
        ...d,
        service: presetService || d.service,
        artist: presetArtist || d.artist,
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
      }));
    }
  }, [open, presetService, presetArtist]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const canNext = useMemo(() => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.artist;
    if (step === 2) return !!data.date;
    if (step === 3) return !!data.time;
    return true;
  }, [step, data]);

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
  };
  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.name.trim()) errs.name = 'Please enter your name';
    if (!data.phone.trim()) errs.phone = 'Please enter your phone number';
    else if (!/^[+\d\s-]{8,}$/.test(data.phone.trim())) errs.phone = 'Enter a valid phone number';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Enter a valid email';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true" aria-label="Book an appointment">
      <div className="absolute inset-0 bg-brown/60 backdrop-blur-sm anim-fade" onClick={onClose} />

      <div className="relative bg-cream w-full max-w-2xl max-h-[90vh] overflow-y-auto anim-scale border border-espresso/10">
        {/* Header */}
        <div className="sticky top-0 bg-cream/95 backdrop-blur-sm flex items-center justify-between px-6 md:px-8 py-5 border-b border-espresso/10 z-10">
          <div>
            <p className="eyebrow">Book an Appointment</p>
            <h3 className="font-serif text-2xl text-espresso mt-1">{submitted ? 'Confirmation' : `Step ${step + 1} of ${steps.length}`}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-espresso/70 hover:text-espresso p-2 -mr-2">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 md:px-8 py-16 text-center anim-fade">
            <div className="w-14 h-14 mx-auto rounded-full bg-espresso text-cream flex items-center justify-center">
              <Check size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl text-espresso mt-6">Appointment Request Received</h3>
            <p className="text-espresso/70 mt-4 max-w-md mx-auto">
              We will contact you shortly to confirm your appointment.
            </p>
            <div className="mt-8 max-w-sm mx-auto text-left border-t border-espresso/10 pt-6 space-y-2">
              <Row label="Service" value={data.service} />
              <Row label="Artist" value={data.artist} />
              <Row label="Date" value={data.date} />
              <Row label="Time" value={data.time} />
              <Row label="Name" value={data.name} />
            </div>
            <button onClick={onClose} className="btn-primary mt-8">Done</button>
          </div>
        ) : (
          <div className="px-6 md:px-8 py-8">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {steps.map((s, i) => (
                <div key={s} className="flex-1">
                  <div className={`h-px transition-colors duration-300 ${i <= step ? 'bg-espresso' : 'bg-espresso/15'}`} />
                  <p className={`text-[9px] uppercase tracking-widest2 mt-2 transition-colors duration-300 ${i <= step ? 'text-espresso' : 'text-taupe'}`}>{s}</p>
                </div>
              ))}
            </div>

            {/* Step 0: Service */}
            {step === 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 anim-fade">
                {bookingServices.map((svc) => (
                  <button
                    key={svc}
                    onClick={() => setData((d) => ({ ...d, service: svc }))}
                    className={`px-4 py-5 text-[11px] uppercase tracking-[0.15em] font-medium border transition-all duration-300 ${
                      data.service === svc ? 'bg-espresso text-cream border-espresso' : 'bg-transparent text-espresso border-espresso/20 hover:border-espresso/50'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            )}

            {/* Step 1: Artist */}
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 anim-fade">
                {bookingArtists.map((a) => (
                  <button
                    key={a}
                    onClick={() => setData((d) => ({ ...d, artist: a }))}
                    className={`px-5 py-4 text-sm font-medium border transition-all duration-300 text-left ${
                      data.artist === a ? 'bg-espresso text-cream border-espresso' : 'bg-transparent text-espresso border-espresso/20 hover:border-espresso/50'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Date */}
            {step === 2 && (
              <div className="anim-fade">
                <label className="eyebrow block mb-3" htmlFor="booking-date">Choose a date</label>
                <input
                  id="booking-date"
                  type="date"
                  min={getMinDate()}
                  value={data.date}
                  onChange={(e) => setData((d) => ({ ...d, date: e.target.value }))}
                  className="w-full bg-transparent border border-espresso/25 px-4 py-3.5 text-espresso focus:outline-none focus:border-espresso transition-colors"
                />
              </div>
            )}

            {/* Step 3: Time */}
            {step === 3 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 anim-fade">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setData((d) => ({ ...d, time: t }))}
                    className={`px-4 py-4 text-sm font-medium border transition-all duration-300 ${
                      data.time === t ? 'bg-espresso text-cream border-espresso' : 'bg-transparent text-espresso border-espresso/20 hover:border-espresso/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Details */}
            {step === 4 && (
              <form className="space-y-4 anim-fade" onSubmit={validateAndSubmit} noValidate>
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                    className="input"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                    className="input"
                    placeholder="+91 98290 12345"
                  />
                </Field>
                <Field label="Email (optional)" error={errors.email}>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                    className="input"
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="Notes (optional)">
                  <textarea
                    value={data.notes}
                    onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))}
                    rows={3}
                    className="input resize-none"
                    placeholder="Anything we should know before your visit"
                  />
                </Field>
              </form>
            )}

            {/* Footer nav */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-espresso/10">
              <button
                onClick={back}
                disabled={step === 0}
                className="text-[11px] uppercase tracking-[0.18em] font-medium text-espresso/60 hover:text-espresso disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 bg-espresso text-cream px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              ) : (
                <button
                  onClick={validateAndSubmit}
                  className="inline-flex items-center gap-2 bg-espresso text-cream px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:gap-3"
                >
                  Confirm Appointment <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex justify-between text-sm">
      <span className="text-[11px] uppercase tracking-widest2 text-taupe">{label}</span>
      <span className="text-espresso font-medium">{value}</span>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-red-700 mt-1.5">{error}</p>}
    </div>
  );
}
