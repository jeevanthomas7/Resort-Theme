import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CounterItem({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        
        let timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, stepTime);

        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="flex items-baseline justify-center sm:justify-start">
        <span className="font-serif text-4xl md:text-6xl text-[#243B53] font-bold">
          {count}
        </span>
        <span className="font-serif text-4xl text-[#243B53] ml-1">+</span>
      </div>
      <p className="text-gray-500/60 text-xs sm:text-sm mt-2 tracking-wide font-medium font-inter">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-16 lg:pb-20 font-sans bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="space-y-10">
            <div>
              <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">The Luxury Resort & Tourism</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight mb-6">
                Relax At The Luxury Resorts Around The Entire World.
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-inter">
                Zmoksha Tourism & Resort offers luxury stays, unforgettable mountain adventures, peaceful nature escapes, and premium travel experiences amidst the scenic beauty of Manali and the Himalayas.
              </p>
              
              <Link to="/about" className="inline-flex items-center gap-4 bg-[#243B53] text-white px-6 py-2 rounded-full group hover:bg-[#C08B5C] transition-all duration-500 shadow-xl">
                <span className="text-xs font-bold tracking-widest uppercase">More About Us</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#243B53] group-hover:text-[#C08B5C] transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="relative pt-5">
              <img src="/images/fac.jpg" className="w-full h-[300px] sm:h-[330px] object-cover rounded-2xl shadow-2xl" alt="Resort Pool" />
              <p className="mt-4 text-gray-500/80 text-[13px] sm:text-[16px] tracking-wide font-medium">
                Experience peaceful luxury stays, breathtaking mountain landscapes, and unforgettable escapes amidst the beauty of Manali.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <img src="/images/slider2.jpg" className="w-full h-[350px] sm:h-[500px] object-cover rounded-2xl shadow-2xl" alt="Luxury View" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 py-4 lg:pt-18">
              <CounterItem target={49} label="Years Experiences" />
              <CounterItem target={144} label="Professional Staff" />
              <CounterItem target={1200} label="Happy Customers" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
