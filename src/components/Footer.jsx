import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollUp = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#243B53] pt-10 md:pt-20 pb-5 sm:pb-10 font-sans text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-32 h-32 md:w-44 md:h-44 mb-8 lg:-mt-40 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden border-3 border-white">
            <img src="/images/slider2.jpg" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Newsletter" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5 max-w-3xl tracking-tight">
            Escape Into Nature’s <br className="hidden md:block" />
            Finest Luxury Experience
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-8 font-inter">
            Discover handcrafted stays, breathtaking destinations, and unforgettable journeys 
            designed for comfort, adventure, and timeless memories.
          </p>

          <Link to="/booking" className="inline-flex items-center gap-4 bg-[#C08B5C] text-white px-6 py-2 rounded-full group hover:bg-white hover:text-[#243B53] transition-all duration-500 shadow-xl hover:scale-105">
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Book Now
            </span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#243B53] group-hover:bg-[#243B53] group-hover:text-white transition-all duration-500">
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </Link>

          <p className="mt-8 text-white/50 text-[10px] sm:text-xs font-medium tracking-wide font-inter">
            We are committed to protecting your <a href="#" className="text-white border-b border-white/20 pb-0.5 hover:text-accent hover:border-accent transition-all">privacy policy</a>.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 border-t border-white/10 pt-12">
          <a 
            href="#" 
            onClick={scrollUp}
            className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white/20 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#243B53] transition-all duration-500 group shadow-lg z-20"
          >
            <ArrowUp className="w-4 h-4 text-white group-hover:text-[#243B53] group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <div className="order-3 lg:order-1 text-white/40 text-[10px] sm:text-xs tracking-wide font-medium font-inter">
            &copy; {new Date().getFullYear()} Zmoksha Tourism & Resort. All rights reserved.
          </div>

          <div className="order-1 lg:order-2 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/" className="text-white text-[13px] font-semibold hover:text-[#C08B5C] transition-colors">Home</Link>
            <Link to="/about" className="text-white text-[13px] font-semibold hover:text-[#C08B5C] transition-colors">About</Link>
            <Link to="/rooms" className="text-white text-[13px] font-semibold hover:text-[#C08B5C] transition-colors">Rooms</Link>
            <Link to="/blog" className="text-white text-[13px] font-semibold hover:text-[#C08B5C] transition-colors">Blog</Link>
            <Link to="/contact" className="text-white text-[13px] font-semibold hover:text-[#C08B5C] transition-colors">Contact</Link>
          </div>

          <div className="order-2 lg:order-3 flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:text-white hover:border-[#C08B5C] transition-all duration-300 shadow-sm">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:text-white hover:border-[#C08B5C] transition-all duration-300 shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:text-white hover:border-[#C08B5C] transition-all duration-300 shadow-sm">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:text-white hover:border-[#C08B5C] transition-all duration-300 shadow-sm">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
