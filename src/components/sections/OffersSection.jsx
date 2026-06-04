import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const offers = [
  { title: 'Adventure Package', img: '/images/g4.jpg', label: 'Exclusive', discount: 'Get 40% Off' },
  { title: 'Family Package', img: '/images/Pulga.jpg', label: 'Unbundled', discount: 'Get 30% Off' },
  { title: 'Romantic Package', img: '/images/rom.jpg', label: 'Wellness', discount: 'Get 40% Off' }
];

export default function OffersSection() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Special Offers</span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#243B53] font-bold leading-tight">Exclusive Offers</h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md font-inter">
            Discover unbeatable value with our curated selection of special offers designed to make your stay even more memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, idx) => (
            <Link 
              key={idx} 
              to="/offers" 
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl block"
            >
              <img 
                src={offer.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={offer.title} 
              />
              <div className="absolute inset-0 bg-[#10212B]/40 z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="relative z-20 h-full flex flex-col items-center justify-between py-12 px-8 text-center text-white">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-inter">{offer.label}</span>
                  <div className="h-[1px] w-12 bg-white/50"></div>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl leading-tight px-4 font-bold">
                  {offer.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} <br />
                    </React.Fragment>
                  ))}
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-[1px] w-12 bg-white/50"></div>
                  <span className="text-[11px] font-bold tracking-widest uppercase font-inter">{offer.discount}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center text-center gap-8 pb-10">
          <p className="text-gray-500 text-sm sm:text-base tracking-wide font-inter">
            Never Miss Exclusive Holiday Experiences.
          </p>
          <Link to="/offers" className="inline-flex items-center gap-4 bg-[#243B53] text-white px-6 py-2 rounded-full group hover:bg-[#C08B5C] transition-all duration-500">
            <span className="text-[11px] font-bold tracking-widest uppercase">View More</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#243B53] group-hover:text-[#C08B5C] transition-colors">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
