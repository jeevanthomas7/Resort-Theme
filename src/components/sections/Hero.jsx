import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css/effect-fade';

export default function Hero() {
  return (
    <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden font-sans">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={2500}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ el: '.hero-pagination', clickable: true }}
        className="h-full w-full"
      >
        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#10212B]/45 z-10"></div>
          <img 
            src="/images/slider1.jpg" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110" 
            alt="Slider 1" 
          />
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="h-full flex items-center justify-center text-center">
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] max-w-5xl transition-all duration-1000 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Experience the <br /> <span className="font-light">Art of Luxury</span>
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-30 pb-10 md:pb-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pointer-events-none px-4 sm:px-6 lg:px-12">
              <p className="text-white/80 text-center md:text-left text-[12px] sm:text-xs leading-relaxed max-w-[320px] tracking-[0.2em] pointer-events-auto uppercase transition-all duration-1000 delay-300 opacity-0 -translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0">
                Discover a world of elegance where <br className="hidden md:block" /> luxury meets the horizon of your dreams.
              </p>
              <Link 
                to="/booking" 
                className="pointer-events-auto flex items-center gap-4 bg-[#C08B5C] hover:bg-white hover:text-[#10212B] text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-2xl group shadow-2xl opacity-0 translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0 delay-500"
              >
                BOOK YOUR STAY <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(16, 33, 43, 0.7) 0%, rgba(16, 33, 43, 0.2) 50%, rgba(16, 33, 43, 0.7) 100%)' }}></div>
          <img 
            src="/images/slider2.jpg" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110" 
            alt="Slider 2" 
          />
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="h-full flex items-center justify-center text-center">
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] max-w-5xl transition-all duration-1000 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Your Journey <br /> <span className="font-light">Begins Here</span>
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-30 pb-10 md:pb-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pointer-events-none px-4 sm:px-6 lg:px-12">
              <p className="text-white/80 text-center md:text-left text-[12px] sm:text-xs leading-relaxed max-w-[320px] tracking-[0.2em] pointer-events-auto uppercase transition-all duration-1000 delay-300 opacity-0 -translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0">
                A sanctuary of peace designed <br className="hidden md:block" /> specifically to heal and rejuvenate the soul.
              </p>
              <Link 
                to="/booking" 
                className="pointer-events-auto flex items-center gap-4 bg-[#C08B5C] hover:bg-white hover:text-[#10212B] text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-2xl group shadow-2xl opacity-0 translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0 delay-500"
              >
                BOOK YOUR STAY <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(16, 33, 43, 0.7) 0%, rgba(16, 33, 43, 0.4) 100%)' }}></div>
          <img 
            src="/images/slider3.jpg" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110" 
            alt="Slider 3" 
          />
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="h-full flex items-center justify-center text-center">
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] max-w-5xl transition-all duration-1000 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Escape Into<br /><span className="font-light">The Hills</span>
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-30 pb-10 md:pb-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pointer-events-none px-4 sm:px-6 lg:px-12">
              <p className="text-white/80 text-center md:text-left text-[12px] sm:text-xs leading-relaxed max-w-[320px] tracking-[0.2em] pointer-events-auto uppercase transition-all duration-1000 delay-300 opacity-0 -translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0">
                Experience hospitality that <br className="hidden md:block" /> transcends all your highest expectations.
              </p>
              <Link 
                to="/booking" 
                className="pointer-events-auto flex items-center gap-4 bg-[#C08B5C] hover:bg-white hover:text-[#10212B] text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-2xl group shadow-2xl opacity-0 translate-x-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-x-0 delay-500"
              >
                BOOK YOUR STAY <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="hero-pagination absolute !bottom-10 left-0 right-0 z-30 flex justify-center gap-3"></div>

      <style>{`
        .hero-pagination .swiper-pagination-bullet { 
          width: 35px !important; 
          height: 1.5px !important; 
          background: #fff !important; 
          border-radius: 0 !important; 
          opacity: 0.3; 
          transition: all 0.4s ease; 
        }
        .hero-pagination .swiper-pagination-bullet-active { 
          background: #C08B5C !important; 
          opacity: 1; 
          width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
