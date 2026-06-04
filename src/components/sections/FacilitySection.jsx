import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wine, Sparkles, Utensils, Bath, Car, Waves, Flower2, Wifi } from 'lucide-react';

const facilities = [
  { name: 'Bars & Lounges', icon: Wine, isAccent: true },
  { name: 'Housekeeping Services', icon: Sparkles, isAccent: false },
  { name: 'Restaurant & Cafe', icon: Utensils, isAccent: true },
  { name: 'Private Bath & Shower', icon: Bath, isAccent: false },
  { name: 'Private Parking Space', icon: Car, isAccent: true },
  { name: 'Swimming Pools', icon: Waves, isAccent: false },
  { name: 'Wellness & Spa Center', icon: Flower2, isAccent: true },
  { name: 'High-Speed Wi-Fi', icon: Wifi, isAccent: false }
];

export default function FacilitySection() {
  return (
    <section className="bg-[#F8F4EE] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-13">
          <span className="text-[#5B6572]/60 text-[11px] font-bold tracking-[0.4em] uppercase block mb-4 font-inter">A Complete Facilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight max-w-4xl mx-auto">Experience The Luxury Of The Best Resorts</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch sm:mb-16">
          <div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] sm:h-[450px] lg:h-auto border-8 border-white">
            <img src="/images/Pulga.jpg" className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" alt="Main Facility" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-6 sm:p-8 rounded-[2rem] border border-[#243B53]/5 shadow-sm hover:bg-[#243B53] hover:shadow-2xl transition-all duration-500 flex flex-col items-start gap-4 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    fac.isAccent 
                      ? 'bg-[#C08B5C]/20 text-[#C08B5C] group-hover:bg-white/20 group-hover:text-white' 
                      : 'bg-[#243B53]/10 text-[#243B53] group-hover:bg-white/20 group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#243B53] font-bold leading-tight group-hover:text-white transition-colors duration-500">
                    {fac.name.split(' & ').map((part, i) => (
                      <React.Fragment key={i}>
                        {part} {i === 0 && fac.name.includes(' & ') && '&'} <br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 sm:border-t border-[#243B53]/10">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl text-center md:text-left font-inter">
            Beyond the physical facilities, we provide a level of service that is discreet, intuitive, and anticipatory to make every moment count.
          </p>
          <Link to="/amenities" className="inline-flex items-center gap-6 bg-[#243B53] text-white pl-8 pr-2 py-2 rounded-full group hover:bg-[#C08B5C] transition-all duration-500 shadow-xl shadow-[#243B53]/20">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">All Facilities</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#243B53] group-hover:text-[#C08B5C] transition-colors">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
