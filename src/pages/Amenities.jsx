import React from 'react';
import FacilitySection from '../components/sections/FacilitySection';
import TestimonialSection from '../components/sections/TestimonialSection';
import BlogSection from '../components/sections/BlogSection';
import { 
  Coffee, Gamepad2, ShieldCheck, Gift, Briefcase, Wifi, 
  Scissors, HeartPulse, Coins, Bell, Car, Stethoscope 
} from 'lucide-react';

const benefits = [
  { name: 'Buffet breakfast', icon: Coffee },
  { name: 'Indoor games', icon: Gamepad2 },
  { name: 'Electronic safe', icon: ShieldCheck },
  { name: 'Complimentary', icon: Gift },
  { name: 'Business centre', icon: Briefcase },
  { name: 'Wi-fi connect', icon: Wifi },
  { name: 'Signature salon', icon: Scissors },
  { name: 'Wellness centre', icon: HeartPulse },
  { name: 'Foreign exchange', icon: Coins },
  { name: 'Concierge desk', icon: Bell },
  { name: 'Valet parking', icon: Car },
  { name: 'Doctor on call', icon: Stethoscope }
];

export default function Amenities() {
  return (
    <>
      <FacilitySection />

      {/* Benefits Section */}
      <section className="pt-12 md:pt-16 lg:pt-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-20">
            <span className="text-[#5B6572]/60 text-[11px] font-bold tracking-[0.4em] uppercase block mb-4 font-inter">where luxury meets comfort</span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#243B53] font-bold leading-tight mb-6">Benefits of staying with us</h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-inter">
              We believe in caring for our guests as family members. All facilities are re-assured with voguish care in all attempts to make your days count with us.
            </p>
          </div>

          {/* Mobile Grid Layout */}
          <div className="lg:hidden grid grid-cols-4 grid-rows-4 gap-2 sm:gap-4 max-w-4xl mx-auto font-inter">
            {benefits.slice(0, 5).map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <div key={idx} className="bg-[#243B53] aspect-square rounded-xl flex flex-col items-center justify-center text-center p-1 group hover:bg-[#C08B5C] transition-all duration-500">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#C08B5C] group-hover:text-white mb-1 transition-colors" />
                  <span className="text-white text-[7px] sm:text-[9px] font-bold tracking-tighter leading-tight">{ben.name}</span>
                </div>
              );
            })}
            
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative">
              <img src="/images/slider2.jpg" className="w-full h-full object-cover" alt="Resort" />
            </div>

            {benefits.slice(5).map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <div key={idx} className="bg-[#243B53] aspect-square rounded-xl flex flex-col items-center justify-center text-center p-1 group hover:bg-[#C08B5C] transition-all duration-500">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#C08B5C] group-hover:text-white mb-1 transition-colors" />
                  <span className="text-white text-[7px] sm:text-[9px] font-bold tracking-tighter leading-tight">{ben.name}</span>
                </div>
              );
            })}
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:block space-y-12 font-inter">
            <div className="grid grid-cols-6 gap-6">
              {benefits.slice(0, 6).map((ben, idx) => {
                const Icon = ben.icon;
                return (
                  <div key={idx} className="bg-[#243B53] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-[#C08B5C] transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#C08B5C] group-hover:text-white mb-4 transition-colors" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest leading-tight">{ben.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-6 gap-6">
              {benefits.slice(6).map((ben, idx) => {
                const Icon = ben.icon;
                return (
                  <div key={idx} className="bg-[#243B53] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-[#C08B5C] transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#C08B5C] group-hover:text-white mb-4 transition-colors" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest leading-tight">{ben.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <TestimonialSection />
      <BlogSection />
    </>
  );
}
