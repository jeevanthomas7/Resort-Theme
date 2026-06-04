import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: "What are the standard check-in and check-out times?",
    a: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be requested but is subject to availability upon arrival."
  },
  {
    q: "Do you offer airport transportation for guests?",
    a: "Yes, we provide luxury private transfers to and from the international airport. Please provide your flight details at least 48 hours in advance to schedule your pickup."
  },
  {
    q: "Can the resort help book local sightseeing tours?",
    a: "Absolutely! Our concierge desk specializes in curated local tourism experiences, including guided cultural walks, adventure treks, and private boat excursions."
  },
  {
    q: "Are there wellness and spa facilities available?",
    a: "Yes, the resort features a full-service luxury spa, yoga shala, and a fitness center. Guests are encouraged to book treatments in advance to secure preferred times."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-12 md:pb-16 lg:pb-37 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* Left Images (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 h-[520px] xl:h-[620px]">
              <img src="/images/slider2.jpg" className="w-full h-full object-cover" alt="Resort Life" />
            </div>
            <div className="absolute -bottom-10 -right-8 w-[65%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img src="/images/facility.jpg" className="w-full h-full object-cover" alt="Interior Details" />
            </div>
          </div>

          {/* Right Accordion Content */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <span className="text-[#5B6572]/60 text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase block mb-3 sm:mb-4 font-inter">
                Common questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#243B53] font-bold leading-tight mb-5 sm:mb-6 break-words">
                Frequently asked questions
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl font-inter">
                Planning your perfect getaway? Here are the most common questions our guests ask about their stay and local tourism experiences.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className="border border-[#243B53]/5 bg-[#F8F4EE]/20 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 lg:px-8 text-left hover:bg-[#F8F4EE]/40 transition-colors"
                    >
                      <span className="text-[#243B53] font-semibold text-sm sm:text-base lg:text-lg leading-relaxed pr-2 font-serif">
                        {faq.q}
                      </span>
                      <div 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C08B5C] shadow-sm shrink-0 transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>

                    <div 
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{ maxHeight: isOpen ? '200px' : '0' }}
                    >
                      <div className="px-5 sm:px-6 lg:px-8 pb-6 sm:pb-8 text-gray-500 text-sm sm:text-base leading-relaxed font-inter">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Card */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-3xl bg-[#243B53] text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C08B5C] shrink-0 mx-auto sm:mx-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0 font-inter">
                <p className="font-medium text-lg leading-tight">
                  Still have questions?
                </p>
                <p className="text-white/60 text-sm mt-1">
                  We are available 24/7 to assist you.
                </p>
              </div>
              <Link 
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center text-center px-6 sm:px-8 py-3 bg-[#C08B5C] text-white rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#243B53] transition-all duration-300 whitespace-nowrap font-inter"
              >
                Contact us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
