import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import FaqSection from '../components/sections/FaqSection';
import { ShieldCheck, MapPin, Award, Users, Linkedin, Instagram } from 'lucide-react';

const coreValues = [
  {
    title: "Safe and secure",
    desc: "Your safety is our priority with 24/7 security and premium health protocols.",
    icon: ShieldCheck
  },
  {
    title: "Prime locations",
    desc: "Each property is situated in the most breathtaking, accessible yet private spots.",
    icon: MapPin
  },
  {
    title: "Award winning",
    desc: "Consistently rated as the best luxury resort for service and design excellence.",
    icon: Award
  },
  {
    title: "Expert staff",
    desc: "Our multi-lingual concierge team is dedicated to curating your perfect journey.",
    icon: Users
  }
];

const team = [
  { name: 'Satheeshan', role: 'General Manager', img: '/images/men.jpg' },
  { name: 'Elena Johnson', role: 'Guest Experience', img: '/images/t2.jpg' },
  { name: 'Joseph v', role: 'Executive Chef', img: '/images/t3.jpg' },
  { name: 'Sarah Benny', role: 'Tourism Director', img: '/images/t4.jpg' }
];

export default function About() {
  return (
    <>
      <AboutSection />

      {/* Core Values Section */}
      <section className="pb-12 md:pb-16 lg:pb-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="mb-5 lg:mb-12">
                <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Core values</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight mb-6">Why choose Zmoksha</h2>
                <p className="text-gray-500 text-base max-w-xl font-inter">
                  We combine world-class hospitality with a deep respect for local culture and the natural environment, ensuring every moment is extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-inter">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="p-8 rounded-3xl bg-[#243B53] text-white hover:bg-[#C08B5C] transition-all duration-500 group shadow-xl">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C08B5C] mb-6 group-hover:bg-white group-hover:text-[#243B53] transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-2xl mb-3 font-bold">{val.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video Frame */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 aspect-[4/5]">
                <video 
                  src="/videos/video.mp4" 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                ></video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dedicated Team Section */}
      <section className="pb-12 md:pb-16 lg:pb-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end mb-7 lg:mb-16">
            <div className="lg:col-span-5">
              <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Dedicated Team</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#243B53] font-bold leading-tight">The Minds Behind Zmoksha</h2>
            </div>
            <div className="lg:col-span-7 lg:mb-15">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl font-inter">
                Our team brings together decades of global hospitality expertise and deep local knowledge to curate your perfect sanctuary in paradise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-xl bg-[#F8F4EE]">
                  <img src={member.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" alt={member.name} />
                  <div className="absolute inset-0 bg-[#10212B]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:border-[#C08B5C] transition-all duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:border-[#C08B5C] transition-all duration-300">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="text-center sm:text-left px-2">
                  <h4 className="font-serif text-xl sm:text-2xl text-[#243B53] font-bold transition-colors group-hover:text-[#C08B5C]">{member.name}</h4>
                  <p className="text-[#5B6572]/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-2 font-inter">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
