import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function VideoPromo() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 font-sans">
      <div className="w-full">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden shadow-2xl">
          
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-[#10212B]/40 z-10"></div>

          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1] font-bold max-w-5xl mb-10">
              Let The Ocean Wait For <br className="hidden md:block" /> You - Book Your Stay
            </h2>

            <Link to="/booking" className="inline-flex items-center gap-4 border border-white/40 text-white px-6 py-2 rounded-full group hover:bg-[#C08B5C] hover:text-[#10212B] hover:border-[#C08B5C] transition-all duration-500 backdrop-blur-sm shadow-xl">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Book Your Stay</span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#243B53] transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
