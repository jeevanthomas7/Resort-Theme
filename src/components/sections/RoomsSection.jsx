import React, { useState, useEffect } from 'react';
import { ChevronDown, Maximize, Bed, Users, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const roomsData = {
  standard: { title: "Standard Room", images: ["/images/standard/s2.jpg", "/images/standard/s4.avif", "/images/standard/s3.jpg"], sqft: "1200 SQFT", beds: "1 Bed", guests: "1-2 Guest", price: "236.00", desc: "All our standard rooms have big windows to help you take a broad view of the cityscape and nature. Experience premium comfort in a space designed for modern living." },
  single: { title: "Single Room", images: ["/images/single/si4.webp", "/images/single/si2.jpg", "/images/deluxe/d1.jpg"], sqft: "1000 SQFT", beds: "1 Bed", guests: "1 Guest", price: "136.00", desc: "The single room offers a cozy sanctuary for the solo traveler, blending functional design with refined luxury finishes." },
  luxury: { title: "Luxury Room", images: ["/images/luxury/l4.jpg", "/images/luxury/l3.jpg", "/images/luxury/l2.jpg"], sqft: "1500 SQFT", beds: "2 Beds", guests: "2 Guest", price: "247.00", desc: "Step into elegance. Our luxury rooms feature premium bedding, a spacious private balcony, and top-tier amenities." },
  deluxe: { title: "Deluxe Room", images: ["/images/deluxe/d4.jpg", "/images/deluxe/d2.jpg", "/images/deluxe/d2.jpg"], sqft: "1800 SQFT", beds: "2 Beds", guests: "2-3 Guest", price: "320.00", desc: "Designed for relaxation, the deluxe room offers extra space and upgraded amenities to ensure a stay that is peaceful." },
  presidential: { title: "Presidential Suite", images: ["/images/presidential/p4.webp", "/images/presidential/p2.jpg", "/images/presidential/p3.jpg"], sqft: "3500 SQFT", beds: "3 Beds", guests: "4-6 Guest", price: "536.00", desc: "The ultimate expression of prestige. Our presidential suite offers unparalleled luxury and the resort's finest views." }
};

export default function RoomsSection() {
  const [activeKey, setActiveKey] = useState('standard');
  const [imgIdx, setImgIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const switchRoom = (key) => {
    setActiveKey(key);
    setImgIdx(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev + 1) % 3);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev - 1 + 3) % 3);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && isLightboxOpen) setImgIdx((prev) => (prev + 1) % 3);
      if (e.key === 'ArrowLeft' && isLightboxOpen) setImgIdx((prev) => (prev - 1 + 3) % 3);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const activeRoom = roomsData[activeKey];

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-8">
          <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Our Rooms</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#243B53] font-bold leading-tight">Choose Your Perfect Room & Suites</h2>
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden mb-10 px-2">
          <div className="relative">
            <select 
              value={activeKey}
              onChange={(e) => switchRoom(e.target.value)}
              className="w-full bg-[#F8F4EE] border border-[#243B53]/20 rounded-2xl px-6 py-4 text-sm font-bold tracking-wide text-[#243B53] appearance-none focus:outline-none focus:border-[#C08B5C] transition-all"
            >
              <option value="standard">Standard Room</option>
              <option value="single">Single Room</option>
              <option value="luxury">Luxury Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="presidential">Presidential Suite</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#C08B5C]">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-wrap justify-center border-b border-[#243B53]/10 gap-x-10 mb-12">
          {Object.keys(roomsData).map((key) => (
            <button
              key={key}
              onClick={() => switchRoom(key)}
              className={`pb-4 text-[15px] font-bold tracking-wide transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeKey === key
                  ? 'text-[#10212B] border-[#C08B5C]'
                  : 'text-[#5B6572] opacity-50 border-transparent hover:opacity-100'
              }`}
            >
              {roomsData[key].title}
            </button>
          ))}
        </div>

        {/* Room Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Room Image Slider */}
          <div className="lg:col-span-7 relative group/slider rounded-2xl overflow-hidden shadow-2xl h-[350px] sm:h-[450px] lg:h-[500px] w-full">
            <img 
              src={activeRoom.images[imgIdx]} 
              onClick={openLightbox} 
              className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 hover:scale-105" 
              alt="Room View" 
            />
            
            <button 
              onClick={prevImage} 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 right-6 bg-[#10212B]/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest z-20">
              <span>{imgIdx + 1}</span> / 3
            </div>
          </div>

          {/* Room Details Card */}
          <div className="lg:col-span-5 flex flex-col bg-[#F8F4EE]/30 p-8 sm:p-12 rounded-2xl border border-[#243B53]/10 h-full lg:h-[500px]">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#243B53] font-bold mb-6">{activeRoom.title}</h3>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#5B6572]/60 text-[11px] font-bold tracking-widest uppercase mb-6 border-b border-[#243B53]/10 pb-6 font-inter">
              <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-[#C08B5C]" /> <span>{activeRoom.sqft}</span></span>
              <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-[#C08B5C]" /> <span>{activeRoom.beds}</span></span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#C08B5C]" /> <span>{activeRoom.guests}</span></span>
            </div>

            <div className="flex-grow overflow-hidden mb-8">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-4 lg:line-clamp-6 font-inter">
                {activeRoom.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-6 border-t border-[#243B53]/10 mt-auto">
              <div className="flex items-end flex-wrap gap-1">
                <span className="text-[#243B53] font-serif text-2xl xs:text-3xl sm:text-4xl font-bold leading-none">
                  ₹{activeRoom.price}
                </span>
                <span className="text-[#5B6572]/50 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-1 font-inter">
                  /Night
                </span>
              </div>

              <Link to="/booking" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#243B53] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C08B5C] transition-all duration-300 shadow-xl group whitespace-nowrap">
                Book Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[999] bg-[#10212B]/85 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeRoom.images[imgIdx]} className="w-full h-full object-cover" alt="Fullscreen Room" />
            <button 
              onClick={prevImage} 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#C08B5C] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-8 font-serif text-white text-2xl tracking-widest">{activeRoom.title}</p>
        </div>
      )}
    </section>
  );
}
