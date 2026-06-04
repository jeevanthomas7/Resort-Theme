import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import { Maximize, Bed, Users, Snowflake, ConciergeBell, Utensils, Sparkles, Tv, Wine, ShowerHead, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import TestimonialSection from '../components/sections/TestimonialSection';

const images = [
  "/images/luxury/l4.jpg",
  "/images/luxury/l2.jpg",
  "/images/luxury/l3.jpg"
];

export default function LuxuryRoom() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const changeImg = (dir) => {
    setCurrentIdx((prevIdx) => (prevIdx + dir + images.length) % images.length);
  };

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      loop: true
    });
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-10">
            
            {/* Image Slider Column */}
            <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl h-[350px] sm:h-[450px] lg:h-[600px] w-full border border-primary/10">
              <a href={images[currentIdx]} className="glightbox block w-full h-full" data-gallery="luxury">
                <img 
                  id="main-room-img" 
                  src={images[currentIdx]} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Luxury River Suite"
                />
              </a>
              
              <button 
                onClick={() => changeImg(-1)} 
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => changeImg(1)} 
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 right-6 bg-dark/60 backdrop-blur-md text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-widest z-20">
                <span id="current-idx">{currentIdx + 1}</span> / {images.length}
              </div>

              {/* Hidden anchors for remaining gallery images */}
              <div className="hidden">
                {images.map((img, idx) => (
                  <a key={idx} href={img} className="glightbox" data-gallery="luxury"></a>
                ))}
              </div>
            </div>

            {/* Room Info Column */}
            <div className="lg:col-span-5 flex flex-col bg-cream/30 p-8 sm:p-12 rounded-[2.5rem] border border-primary/10">
              <div className="mb-8 font-inter">
                <span className="text-accent text-[11px] font-bold tracking-[0.4em] uppercase block mb-4">Elite Accommodation</span>
                <h2 className="font-serif text-4xl sm:text-5xl text-primary leading-tight mb-6 font-bold tracking-tight">Luxury River Suite</h2>
                <p className="text-text/70 text-sm sm:text-base leading-relaxed font-sans">
                  Step into a world of refined elegance. Our Luxury Suites feature expansive layouts with handcrafted furniture, a private glass-enclosed balcony, and direct views of the roaring river below. It is the definitive Himalayan retreat for discerning travelers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-primary/10 py-8 mb-8 font-inter">
                <div className="flex items-center gap-3">
                  <Maximize className="w-5 h-5 text-accent" />
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">1500 SQFT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bed className="w-5 h-5 text-accent" />
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">2 Queen Beds</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">2-4 Guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <Snowflake className="w-5 h-5 text-accent" />
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">Climate Control</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-5 font-inter">
                <div className="flex items-baseline flex-wrap gap-1 sm:gap-2">
                  <span className="text-primary font-serif text-3xl sm:text-3xl lg:text-4xl leading-none font-bold">
                    ₹999.00
                  </span>
                  <span className="text-text/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                    /Night
                  </span>
                </div>

                <Link 
                  to="/booking"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 bg-primary text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-accent transition-all duration-300 shadow-xl group whitespace-nowrap"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Services Grid */}
          <div className="mb-0 py-10">
            <h3 className="font-serif text-3xl text-primary font-bold mb-12 text-center lg:text-left tracking-tight">Premium Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <ConciergeBell className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">Butler Service</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">Fine Dining</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">Evening Turndown</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">UHD Entertainment</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Wine className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">Premium Bar</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <ShowerHead className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest font-inter">Rain Shower</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="pb-12 md:pb-16 lg:pb-37">
        <TestimonialSection />
      </div>
    </>
  );
}
