import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const offersList = [
  { title: 'Adventure Package', img: '/images/g4.jpg', label: 'Exclusive', discount: 'Get 40% Off' },
  { title: 'Family Package', img: '/images/Pulga.jpg', label: 'Unbundled', discount: 'Get 30% Off' },
  { title: 'Romantic Package', img: '/images/rom.jpg', label: 'Wellness', discount: 'Get 40% Off' }
];

const doubleOffers = [
  { title: 'Holiday Package', img: '/images/slider2.jpg', label: 'Exclusive', discount: 'Get 35% Off' },
  { title: 'Weekend Package', img: '/images/bann.jpg', label: 'Exclusive', discount: 'Get 40% Off' }
];

export default function Offers() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-37 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {offersList.map((offer, idx) => (
            <Link 
              key={idx} 
              to="/contact" 
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl block bg-[#10212B]"
            >
              <img 
                src={offer.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                alt={offer.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10212B]/95 via-[#10212B]/20 to-[#10212B]/40 z-10"></div>
              <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-8 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white font-inter">{offer.label}</span>
                  <div className="h-[1px] w-12 bg-[#C08B5C]/40"></div>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl leading-tight px-4 font-bold">
                  {offer.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br />
                    </React.Fragment>
                  ))}
                </h3>
                <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between transition-all duration-500 group-hover:bg-[#C08B5C] group-hover:border-[#C08B5C] font-inter">
                  <span className="text-[11px] font-bold tracking-widest uppercase">{offer.discount}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                    Contact Us <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doubleOffers.map((offer, idx) => (
            <Link 
              key={idx} 
              to="/contact" 
              className="group relative aspect-[4/5] md:aspect-auto md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl block bg-[#10212B]"
            >
              <img 
                src={offer.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                alt={offer.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10212B]/95 via-[#10212B]/30 to-[#10212B]/10 z-10"></div>
              <div className="relative z-20 h-full flex flex-col items-center justify-between py-10 px-6 sm:px-10 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white font-inter">{offer.label}</span>
                  <div className="h-[1px] w-12 bg-[#C08B5C]/40"></div>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight px-2 transition-transform duration-500 group-hover:scale-105 font-bold">
                  {offer.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br className="sm:hidden" />
                    </React.Fragment>
                  ))}
                </h3>
                <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-between transition-all duration-500 group-hover:bg-[#C08B5C] group-hover:border-[#C08B5C] font-inter">
                  <span className="text-[10px] sm:text-[12px] font-bold tracking-widest uppercase">{offer.discount}</span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
                    For More Info <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
