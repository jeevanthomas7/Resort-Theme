import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import ScrollToTop from './ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  const isHome = pathname === '/';

  // Determine banner title and optional custom banner image
  let bannerTitle = 'Luxury Resort';
  let bannerImage = undefined; // Will default to /images/facility.jpg

  if (pathname === '/about') {
    bannerTitle = 'About Us';
    bannerImage = '/images/slider1.jpg';
  } else if (pathname === '/rooms') {
    bannerTitle = 'Our Rooms';
    bannerImage = '/images/slider2.jpg';
  } else if (pathname === '/standard-room') {
    bannerTitle = 'Standard Room';
    bannerImage = '/images/slider3.jpg';
  } else if (pathname === '/single-room') {
    bannerTitle = 'Single Room';
    bannerImage = '/images/slider1.jpg';
  } else if (pathname === '/luxury-room') {
    bannerTitle = 'Luxury Room';
    bannerImage = '/images/slider2.jpg';
  } else if (pathname === '/deluxe-room') {
    bannerTitle = 'Deluxe Room';
    bannerImage = '/images/slider3.jpg';
  } else if (pathname === '/presidential-room') {
    bannerTitle = 'Presidential Suite';
    bannerImage = '/images/slider1.jpg';
  } else if (pathname === '/amenities') {
    bannerTitle = 'Amenities';
    bannerImage = '/images/facility.jpg';
  } else if (pathname === '/booking') {
    bannerTitle = 'Book A Room';
    bannerImage = '/images/slider3.jpg';
  } else if (pathname === '/offers') {
    bannerTitle = 'Special Offers';
    bannerImage = '/images/slider2.jpg';
  } else if (pathname === '/team') {
    bannerTitle = 'Our Team';
    bannerImage = '/images/facility.jpg';
  } else if (pathname === '/gallery') {
    bannerTitle = 'Gallery';
    bannerImage = '/images/slider1.jpg';
  } else if (pathname === '/blog') {
    bannerTitle = 'Our Blog';
    bannerImage = '/images/slider2.jpg';
  } else if (pathname.startsWith('/blog-details')) {
    bannerTitle = 'Blog Details';
    bannerImage = '/images/slider2.jpg';
  } else if (pathname === '/contact') {
    bannerTitle = 'Contact Us';
    bannerImage = '/images/facility.jpg';
  } else if (pathname === '/404') {
    bannerTitle = '404 - Page Not Found';
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-[#5B6572] overflow-x-hidden relative">
      <ScrollToTop />
      <Header />
      {!isHome && <Banner title={bannerTitle} image={bannerImage} />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
