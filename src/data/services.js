export const serviceCategories = ['ALL', 'HAIR', 'MAKEUP', 'BEAUTY', 'GROOMING'];

export const services = [
  // HAIR
  { id: 'h1', category: 'HAIR', name: 'Signature Haircut & Styling', desc: 'Consultation, cut, wash and finish styling tailored to your face and lifestyle.', duration: '60 MIN', price: '₹1,200' },
  { id: 'h2', category: 'HAIR', name: 'Blow Dry', desc: 'Smooth, voluminous or waved finish using professional tools and products.', duration: '45 MIN', price: '₹800' },
  { id: 'h3', category: 'HAIR', name: 'Hair Color', desc: 'Full-saturation global color with premium ammonia-free formulations.', duration: '120 MIN', price: '₹2,500+' },
  { id: 'h4', category: 'HAIR', name: 'Highlights', desc: 'Dimensional foils placed to frame the face and add movement.', duration: '180 MIN', price: '₹4,500+' },
  { id: 'h5', category: 'HAIR', name: 'Balayage', desc: 'Hand-painted, sun-kissed dimension for a lived-in, soft grow-out.', duration: '3–4 HOURS', price: '₹6,500+' },
  { id: 'h6', category: 'HAIR', name: 'Global Color', desc: 'Single-tone refresh to even tone and restore depth and shine.', duration: '90 MIN', price: '₹2,200+' },
  { id: 'h7', category: 'HAIR', name: 'Hair Spa', desc: 'Deep-conditioning ritual with scalp massage and steam therapy.', duration: '60 MIN', price: '₹1,500' },
  { id: 'h8', category: 'HAIR', name: 'Keratin / Smoothening', desc: 'Frizz-taming treatment that leaves hair glossy and manageable.', duration: '3 HOURS', price: '₹5,000+' },
  { id: 'h9', category: 'HAIR', name: 'Hair Treatment', desc: 'Bond-building and repair therapy for damaged or chemically treated hair.', duration: '75 MIN', price: '₹2,000+' },

  // MAKEUP
  { id: 'm1', category: 'MAKEUP', name: 'Bridal Makeup', desc: 'HD bridal makeup, hair styling and draping for your ceremony.', duration: '3 HOURS', price: '₹12,000+' },
  { id: 'm2', category: 'MAKEUP', name: 'Party Makeup', desc: 'Long-wear glam with flawless base, defined eyes and lasting finish.', duration: '75 MIN', price: '₹3,500' },
  { id: 'm3', category: 'MAKEUP', name: 'Engagement Makeup', desc: 'Soft romantic look designed for pre-wedding functions and portraits.', duration: '90 MIN', price: '₹5,000' },
  { id: 'm4', category: 'MAKEUP', name: 'HD Makeup', desc: 'Camera-ready high-definition finish for events and photoshoots.', duration: '60 MIN', price: '₹3,000' },
  { id: 'm5', category: 'MAKEUP', name: 'Editorial Makeup', desc: 'Concept-led creative makeup for publications, runways and campaigns.', duration: '90 MIN', price: '₹4,500' },

  // BEAUTY
  { id: 'b1', category: 'BEAUTY', name: 'Facial', desc: 'Customised facial with cleansing, exfoliation, massage and mask.', duration: '60 MIN', price: '₹1,800' },
  { id: 'b2', category: 'BEAUTY', name: 'Cleanup', desc: 'Express skin refresh — cleanse, steam, extract and tone.', duration: '30 MIN', price: '₹700' },
  { id: 'b3', category: 'BEAUTY', name: 'Threading', desc: 'Precision brow shaping and facial hair removal.', duration: '15 MIN', price: '₹150' },
  { id: 'b4', category: 'BEAUTY', name: 'Waxing', desc: 'Smooth, hygienic waxing with premium low-temp formulations.', duration: '30 MIN', price: '₹500+' },
  { id: 'b5', category: 'BEAUTY', name: 'Manicure', desc: 'Nail shaping, cuticle care, hand massage and polish.', duration: '45 MIN', price: '₹900' },
  { id: 'b6', category: 'BEAUTY', name: 'Pedicure', desc: 'Foot soak, exfoliation, massage and polish for tired feet.', duration: '60 MIN', price: '₹1,100' },

  // GROOMING
  { id: 'g1', category: 'GROOMING', name: 'Beard Styling', desc: 'Shape, line and condition for a defined, groomed beard.', duration: '30 MIN', price: '₹600' },
  { id: 'g2', category: 'GROOMING', name: "Men's Haircut", desc: 'Tailored cut and style with consultation and finish.', duration: '45 MIN', price: '₹900' },
  { id: 'g3', category: 'GROOMING', name: "Men's Grooming", desc: 'Cut, beard, facial and styling in one complete edit.', duration: '90 MIN', price: '₹2,200' },
  { id: 'g4', category: 'GROOMING', name: 'Head Massage', desc: 'Relaxing oil-based scalp massage to relieve tension.', duration: '30 MIN', price: '₹500' },
];

// Services offered in the booking flow (subset)
export const bookingServices = [
  'Haircut', 'Hair Color', 'Hair Spa', 'Bridal Makeup', 'Facial', 'Manicure', 'Pedicure', 'Grooming',
];
