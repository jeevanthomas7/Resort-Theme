import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "“The breathtaking mountain views and warm hospitality made our Manali stay truly unforgettable. Every moment felt peaceful and luxurious.”",
    author: "Sarah Thomas",
    location: "Bangalore",
    img: "/images/t2.jpg"
  },
  {
    text: "“The mountain retreat experience was beyond expectations. Every moment felt peaceful and refreshing. Highly recommend getaway.”",
    author: "Mathew kattapana",
    location: "Hyderabad",
    img: "/images/t1.webp"
  },
  {
    text: "“The luxurious stay and breathtaking landscapes made our vacation truly memorable. Every experience felt relaxing, refreshing, curated.”",
    author: "Trisha Krish",
    location: "Chennai",
    img: "/images/t4.jpg"
  },
  {
    text: "“The peaceful atmosphere and stunning mountain scenery exceeded our expectations. Highly recommend this resort for a perfect nature escape.”",
    author: "Shaji puthothara",
    location: "Kerala",
    img: "/images/t3.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-5 md:mb-8">
          <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight">What Our Guests Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ el: '.testimonial-pagination', clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: false },
            768: { slidesPerView: 2, spaceBetween: 30, centeredSlides: false },
            1024: { slidesPerView: 2.4, spaceBetween: 30, centeredSlides: false },
            1280: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false }
          }}
          className="testimonialSwiper"
        >
          {testimonials.map((test, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="bg-[#F8F4EE] rounded-[2.5rem] p-8 md:p-12 min-h-[430px] md:min-h-[500px] flex flex-col items-center text-center border border-[#243B53]/5 shadow-sm transition-all duration-300">
                <div className="flex gap-1 text-[#C08B5C] mb-6 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#C08B5C]" />
                  ))}
                </div>
                <div className="flex-grow flex items-center justify-center font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-[#243B53]">
                  <p>{test.text}</p>
                </div>
                <div className="flex flex-col items-center gap-3 shrink-0 mt-8 font-inter">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={test.img} className="w-full h-full object-cover" alt={test.author} />
                  </div>
                  <div>
                    <h4 className="text-[#243B53] font-bold text-sm tracking-wide uppercase leading-none">{test.author}</h4>
                    <p className="text-[#5B6572]/50 text-[10px] uppercase tracking-widest font-medium mt-1">{test.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="hidden sm:flex justify-center mt-12 md:mt-16 testimonial-pagination"></div>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet { 
          width: 35px !important;
          height: 2px !important;
          background: #10212B !important; 
          border-radius: 0 !important; 
          opacity: 0.15;
          transition: all 0.4s ease; 
          cursor: pointer;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #C08B5C !important; 
          opacity: 1; 
          width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
