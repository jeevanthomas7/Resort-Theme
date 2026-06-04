import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2 Adults',
    children: '0 Children',
    roomType: 'Standard Room'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    alert(`Booking Request Submitted!\nRoom: ${formData.roomType}\nDates: ${formData.checkIn} to ${formData.checkOut}\nGuests: ${formData.adults}, ${formData.children}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Reservation Info */}
          <div className="lg:col-span-4">
            <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Reservations</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#243B53] font-bold leading-tight mb-6">Book Your Dream Suite</h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 font-inter">
              Secure your sanctuary in paradise. Select your preferred dates and guest details to view our current availability and exclusive rates.
            </p>
            <div className="flex items-center gap-4 text-[#243B53]">
              <div className="w-12 h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#C08B5C]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 font-inter">Direct Line</p>
                <p className="text-lg font-serif font-bold">(555) 987-6543</p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#F8F4EE] rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-[#243B53]/5">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 font-inter">
                
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/60 ml-1">Check-In</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-colors text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/60 ml-1">Check-Out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-colors text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/60 ml-1">Adults</label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-colors text-gray-700"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/60 ml-1">Children</label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-colors text-gray-700"
                  >
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/60 ml-1">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#243B53]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-colors text-gray-700"
                  >
                    <option>Standard Room</option> 
                    <option>Single Room</option>   
                    <option>Luxury Suite</option>
                    <option>Deluxe Room</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button type="submit" className="w-full flex items-center justify-center gap-4 bg-[#243B53] text-white py-5 rounded-full text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#C08B5C] group shadow-lg shadow-[#243B53]/10">
                    Check Availability <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
