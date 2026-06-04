import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import FacilitySection from '../components/sections/FacilitySection';
import OffersSection from '../components/sections/OffersSection';
import LogoTicker from '../components/sections/LogoTicker';
import BookingSection from '../components/sections/BookingSection';
import VideoPromo from '../components/sections/VideoPromo';
import RoomsSection from '../components/sections/RoomsSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import BlogSection from '../components/sections/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FacilitySection />
      <OffersSection />
      <LogoTicker />
      <BookingSection />
      <VideoPromo />
      <RoomsSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
