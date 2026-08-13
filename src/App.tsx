import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Hero from '@/components/Hero';
import TrustStats from '@/components/TrustStats';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedExperience from '@/components/FeaturedExperience';
import PricingMenu from '@/components/PricingMenu';
import Portfolio from '@/components/Portfolio';
import BeforeAfter from '@/components/BeforeAfter';
import Stylists from '@/components/Stylists';
import Packages from '@/components/Packages';
import Bridal from '@/components/Bridal';
import SalonExperience from '@/components/SalonExperience';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import InstagramSection from '@/components/InstagramSection';
import Offers from '@/components/Offers';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import BookingModal from '@/components/BookingModal';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [presetService, setPresetService] = useState('');
  const [presetArtist, setPresetArtist] = useState('');

  const openBooking = (service = '', artist = '') => {
    setPresetService(service);
    setPresetArtist(artist);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <TrustStats />
        <About />
        <Services onBook={(svc: string) => openBooking(svc)} />
        <FeaturedExperience onBook={() => openBooking('Hair Color')} />
        <PricingMenu onBook={() => openBooking()} />
        <Portfolio />
        <BeforeAfter />
        <Stylists onBook={(artist: string) => openBooking('', artist)} />
        <Packages onBook={() => openBooking()} />
        <Bridal onBook={() => openBooking('Bridal Makeup')} />
        <SalonExperience />
        <Brands />
        <Testimonials />
        <Offers />
        <InstagramSection />
        <FAQ />
        <Contact onBook={() => openBooking()} />
      </main>
      <Footer onBook={() => openBooking()} />
      <MobileCTA onBook={() => openBooking()} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        presetService={presetService}
        presetArtist={presetArtist}
      />
    </div>
  );
}

export default App;
