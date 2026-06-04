import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Eye, Plane, Check } from 'lucide-react';

export default function LogoTicker() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 bg-[#F8F4EE]/30 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#243B53] rounded-[1.5rem] sm:rounded-[2.5rem] px-8 py-8 sm:py-14 relative overflow-hidden">
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            slidesPerView="auto"
            centeredSlides={false}
            speed={6000}
            allowTouchMove={true}
            grabCursor={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            className="logoSwiper"
          >
            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#00af87] flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter">Tripadvisor</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-white font-medium text-xl sm:text-2xl tracking-tighter">make</span>
                <div className="bg-[#df3224] px-2 py-0.5 rounded-lg shadow-lg">
                  <span className="text-white font-serif italic font-bold text-xl sm:text-2xl">my</span>
                </div>
                <span className="text-white font-medium text-xl sm:text-2xl tracking-tighter">trip</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-[#1b2b48] border border-white/10 flex items-center justify-center overflow-hidden">
                  <Plane className="w-5 h-5 text-[#FFC107] -rotate-45" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter">Expedia</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-7 h-7 bg-[#F37021] rounded-md flex items-center justify-center shadow-lg">
                  <Check className="w-5 h-5 text-white stroke-[4]" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter uppercase">cleartrip</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#00af87] flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter">Tripadvisor</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-white font-medium text-xl sm:text-2xl tracking-tighter">make</span>
                <div className="bg-[#df3224] px-2 py-0.5 rounded-lg shadow-lg">
                  <span className="text-white font-serif italic font-bold text-xl sm:text-2xl">my</span>
                </div>
                <span className="text-white font-medium text-xl sm:text-2xl tracking-tighter">trip</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-[#1b2b48] border border-white/10 flex items-center justify-center overflow-hidden">
                  <Plane className="w-5 h-5 text-[#FFC107] -rotate-45" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter">Expedia</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="!w-auto px-8 sm:px-14">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-7 h-7 bg-[#F37021] rounded-md flex items-center justify-center shadow-lg">
                  <Check className="w-5 h-5 text-white stroke-[4]" />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tighter uppercase">cleartrip</span>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>

      <style>{`
        .logoSwiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
