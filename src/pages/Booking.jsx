import React, { useState } from 'react';
import TestimonialSection from '../components/sections/TestimonialSection';
import FaqSection from '../components/sections/FaqSection';
import { PhoneCall, Mail, MapPin, ChevronDown, Bed, ArrowRight } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    roomType: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut || !formData.adults || !formData.roomType) {
      alert('Please fill in the required fields (Check-In, Check-Out, Adults, Room Type).');
      return;
    }
    alert(`Booking Request Received!\nRoom: ${formData.roomType}\nDates: ${formData.checkIn} to ${formData.checkOut}\nNotes: ${formData.notes || 'None'}`);
    setFormData({ checkIn: '', checkOut: '', adults: '', children: '', roomType: '', notes: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="pt-12 sm:pt-16 md:pt-20 bg-white font-sans overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <span className="text-[#5B6572]/60 text-[11px] font-bold tracking-[0.4em] uppercase block mb-4 font-inter">Reservations</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight mb-5 lg:mb-8 tracking-tighter">Your Stay Starts Right Here</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-9 lg:mb-10 font-inter">
                Find your peace amidst the clouds. Our reservation system ensures a seamless booking experience for your luxury retreat. Our concierge team is ready to assist you with specific requirements.
              </p>

              <div className="space-y-6 font-inter">
                <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#F8F4EE]/40 border border-[#243B53]/20 group hover:bg-[#243B53] transition-all duration-500 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#C08B5C] group-hover:bg-[#C08B5C] group-hover:text-white transition-all shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">Direct Line</p>
                    <p className="text-[#243B53] font-serif text-xl font-bold group-hover:text-white transition-colors">+1 800 222 000</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#F8F4EE]/40 border border-[#243B53]/20 group hover:bg-[#243B53] transition-all duration-500 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#C08B5C] group-hover:bg-[#C08B5C] group-hover:text-white transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">Email Us</p>
                    <p className="text-[#243B53] font-serif text-xl font-bold group-hover:text-white transition-colors">booking@zmoksha.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#F8F4EE]/40 border border-[#243B53]/20 group hover:bg-[#243B53] transition-all duration-500 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#C08B5C] group-hover:bg-[#C08B5C] group-hover:text-white transition-all shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-text/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-white/40 transition-colors">Location</p>
                    <p className="text-[#243B53] font-serif text-xl font-bold group-hover:text-white transition-colors">All Over India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-[#F8F4EE]/30 p-8 sm:p-12 rounded-[2.5rem] border border-[#243B53]/20 shadow-sm font-inter">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Check-In *</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-700 border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Check-Out *</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-700 border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Adults *</label>
                    <div className="relative">
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all appearance-none cursor-pointer text-gray-700"
                      >
                        <option value="" disabled>Select Choice</option>
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C08B5C] pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Children</label>
                    <div className="relative">
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all appearance-none cursor-pointer text-gray-700"
                      >
                        <option value="" disabled>Select Choice</option>
                        <option>0 Children</option>
                        <option>1 Child</option>
                        <option>2 Children</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C08B5C] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Room Category *</label>
                  <div className="relative">
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all appearance-none cursor-pointer text-gray-700"
                    >
                      <option value="" disabled>Select Your Room</option>
                      <option>Standard Room</option>
                      <option>Luxury Suite</option>
                      <option>Single Room</option>
                      <option>Presidential Suite</option>
                      <option>Deluxe Rooms</option>
                    </select>
                    <Bed className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C08B5C] pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 mb-10">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Special requirements..."
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all resize-none text-gray-700"
                  ></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-4 bg-[#243B53] text-white py-5 rounded-2xl text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#C08B5C] group shadow-xl">
                  Proceed to Booking <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
      
      <TestimonialSection />
      
      <div className="pt-12 md:pt-16 lg:pt-20 bg-white">
        <FaqSection />
      </div>
    </>
  );
}
