import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import TestimonialSection from '../components/sections/TestimonialSection';
import FaqSection from '../components/sections/FaqSection';
import { ChevronLeft, ChevronRight, Maximize, Bed, Users } from 'lucide-react';
import 'glightbox/dist/css/glightbox.min.css';

const roomsList = [
  {
    key: 'standard',
    title: 'Standard Room',
    images: ["/images/standard/s3.jpg", "/images/standard/s4.avif", "/images/standard/s2.jpg"],
    sqft: '1200 SQFT',
    beds: '1 Bed',
    guests: '1-2 Guest',
    desc: 'Elegant mountain-view rooms designed with a minimalist aesthetic and premium Himalayan finishes. Perfect for short escapes.',
    price: '799.00',
    path: '/standard-room',
    gallerySelector: 'glightbox-std'
  },
  {
    key: 'luxury',
    title: 'Luxury Suite',
    images: ["/images/luxury/l4.jpg", "/images/luxury/l2.jpg", "/images/luxury/l3.jpg"],
    sqft: '1800 SQFT',
    beds: '2 Beds',
    guests: '2 Guest',
    desc: 'Expansive suites with hand-crafted decor and private balconies overlooking the valley floor. High-end comfort for the elite traveler.',
    price: '1500.00',
    path: '/luxury-room',
    gallerySelector: 'glightbox-lux',
    orderReversed: true
  },
  {
    key: 'single',
    title: 'Single Room',
    images: ["/images/single/si4.webp", "/images/single/si2.jpg", "/images/deluxe/d1.jpg"],
    sqft: '1000 SQFT',
    beds: '1 Bed',
    guests: '1 Guest',
    desc: 'Ideal for independent souls. These rooms prioritize efficiency and serenity, providing a quiet space to reconnect with nature.',
    price: '399.00',
    path: '/single-room',
    gallerySelector: 'glightbox-sin'
  },
  {
    key: 'presidential',
    title: 'Presidential Suite',
    images: ["/images/presidential/p4.webp", "/images/presidential/p2.jpg", "/images/presidential/p3.jpg"],
    sqft: '3500 SQFT',
    beds: '3 Beds',
    guests: '4-6 Guest',
    desc: 'The pinnacle of mountain prestige. Multiple living zones, a private fireplace, and panoramic floor-to-ceiling glass walls.',
    price: '1400.00',
    path: '/presidential-room',
    gallerySelector: 'glightbox-pre',
    orderReversed: true
  },
  {
    key: 'deluxe',
    title: 'Deluxe Room',
    images: ["/images/deluxe/d4.jpg", "/images/deluxe/d2.jpg", "/images/deluxe/d3.jpg"],
    sqft: '1500 SQFT',
    beds: '2 Beds',
    guests: '2-3 Guest',
    desc: 'Sophisticated spaces with expanded lounge areas and premium bath amenities. Designed for families who value serenity.',
    price: '600.00',
    path: '/deluxe-room',
    gallerySelector: 'glightbox-del'
  }
];

export default function AllRooms() {
  const [slideIndices, setSlideIndices] = useState({
    standard: 0,
    luxury: 0,
    single: 0,
    presidential: 0,
    deluxe: 0
  });

  const navRoom = (roomKey, dir) => {
    setSlideIndices((prev) => ({
      ...prev,
      [roomKey]: (prev[roomKey] + dir + 3) % 3
    }));
  };

  useEffect(() => {
    const lbStd = GLightbox({ selector: '.glightbox-std', loop: true });
    const lbLux = GLightbox({ selector: '.glightbox-lux', loop: true });
    const lbSin = GLightbox({ selector: '.glightbox-sin', loop: true });
    const lbPre = GLightbox({ selector: '.glightbox-pre', loop: true });
    const lbDel = GLightbox({ selector: '.glightbox-del', loop: true });

    return () => {
      lbStd.destroy();
      lbLux.destroy();
      lbSin.destroy();
      lbPre.destroy();
      lbDel.destroy();
    };
  }, []);

  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 lg:space-y-24">
          
          {roomsList.map((room) => {
            const currentIdx = slideIndices[room.key];
            const currentImg = room.images[currentIdx];
            
            return (
              <div 
                key={room.key} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-stretch"
              >
                {/* Image Slider Column */}
                <div className={`lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl h-[350px] sm:h-[450px] lg:h-[550px] w-full border border-[#243B53]/10 ${room.orderReversed ? 'lg:order-2' : ''}`}>
                  <a 
                    href={currentImg} 
                    className={`${room.gallerySelector} block w-full h-full`} 
                    data-gallery={room.key}
                  >
                    <img 
                      src={currentImg} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      alt={room.title}
                    />
                  </a>
                  
                  <button 
                    onClick={() => navRoom(room.key, -1)} 
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => navRoom(room.key, 1)} 
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Hidden anchors for remaining gallery images */}
                  <div className="hidden">
                    {room.images.map((img, i) => (
                      <a 
                        key={i} 
                        href={img} 
                        className={room.gallerySelector} 
                        data-gallery={room.key}
                        title={`${room.title} - Image ${i + 1}`}
                      ></a>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 flex flex-col bg-[#F8F4EE]/30 p-8 sm:p-12 rounded-2xl border border-[#243B53]/10 h-full ${room.orderReversed ? 'lg:order-1' : ''}`}>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#243B53] font-bold mb-6">{room.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#5B6572]/60 text-[11px] font-bold tracking-widest uppercase mb-8 border-b border-[#243B53]/10 pb-8 font-inter">
                    <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-[#C08B5C]" /> <span>{room.sqft}</span></span>
                    <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-[#C08B5C]" /> <span>{room.beds}</span></span>
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#C08B5C]" /> <span>{room.guests}</span></span>
                  </div>

                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-12 font-inter">
                    {room.desc}
                  </p>

                  <div className="flex flex-col gap-6 pt-8 sm:pt-10 border-t border-[#243B53]/10 mt-auto">
                    <div className="flex items-end flex-wrap gap-2 font-inter">
                      <span className="text-[#243B53] font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-none break-words">
                        ₹{room.price}
                      </span>
                      <span className="text-[#5B6572]/50 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1">
                        /Night
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full font-inter">
                      <Link 
                        to={room.path}
                        className="flex items-center justify-center text-center min-h-[52px] border border-[#243B53]/10 text-[#243B53] px-5 sm:px-6 py-3 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#243B53] hover:text-white transition-all duration-300 whitespace-nowrap"
                      >
                        More Info
                      </Link>
                      <Link 
                        to="/booking"
                        className="flex items-center justify-center text-center min-h-[52px] bg-[#243B53] text-white px-5 sm:px-6 lg:px-8 py-3 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#C08B5C] transition-all duration-300 shadow-xl whitespace-nowrap"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      <TestimonialSection />
      
      <div className="pt-12 md:pt-16 lg:pt-20">
        <FaqSection />
      </div>
    </>
  );
}
