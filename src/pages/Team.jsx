import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const teamList = [
  { name: 'Satheeshan', role: 'General Manager', img: '/images/men.jpg', linkedin: '#', instagram: '#' },
  { name: 'Elena johnson', role: 'Head of Guest Experience', img: '/images/t2.jpg', linkedin: '#' },
  { name: 'Joseph V.', role: 'Executive Chef', img: '/images/t3.jpg', instagram: '#' },
  { name: 'Sarah Benny', role: 'Tourism Director', img: '/images/t4.jpg', linkedin: '#' },
  { name: 'David kattakada', role: 'Operations Manager', img: '/images/t1.webp' },
  { name: 'Maria Clara', role: 'Wellness Specialist', img: '/images/t2.jpg' },
  { name: 'Robert P', role: 'Marketing Lead', img: '/images/t3.jpg' },
  { name: 'Alexandra G.', role: 'Chief Concierge', img: '/images/t4.jpg' }
];

export default function Team() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-37 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {teamList.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-xl bg-[#F8F4EE]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                {(member.linkedin || member.instagram) && (
                  <div className="absolute inset-0 bg-[#10212B]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3 sm:gap-4">
                    {member.linkedin && (
                      <a href={member.linkedin} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:border-[#C08B5C] transition-all">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C08B5C] hover:border-[#C08B5C] transition-all">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="text-center font-inter">
                <h4 className="font-serif text-xl sm:text-2xl text-[#243B53] font-bold transition-colors group-hover:text-[#C08B5C]">{member.name}</h4>
                <p className="text-[#5B6572]/50 text-[9px] sm:text-xs font-bold uppercase tracking-widest mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
