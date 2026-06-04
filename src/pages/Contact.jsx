import React, { useState } from 'react';
import { MapPin, PhoneCall, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields (Name, Email, Message).');
      return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 sm:pb-16 pb-12 md:pb-37 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-12 sm:mb-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Contact Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight mb-8">Get In Touch With Us</h2>
            <p className="text-[#5B6572]/70 text-sm sm:text-base leading-relaxed mb-10 lg:mb-5 max-w-md font-inter">
              Whether you have questions about our rooms, services, or special events, our team is here to assist you with everything you need.
            </p>

            <div className="space-y-3 lg:space-y-6 font-inter">
              <div className="flex items-start gap-6 group border border-[#243B53]/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F4EE] border border-[#243B53]/10 flex items-center justify-center text-[#C08B5C] shrink-0 group-hover:bg-[#243B53] group-hover:text-white transition-all duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#243B53] font-bold text-xs tracking-widest uppercase mb-1">Our Location</h4>
                  <p className="text-[#5B6572]/70 text-sm leading-relaxed">Jalan By Pass Ngurah Rai – <br /> Denpasar, Bali. India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group border border-[#243B53]/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F4EE] border border-[#243B53]/10 flex items-center justify-center text-[#C08B5C] shrink-0 group-hover:bg-[#243B53] group-hover:text-white transition-all duration-500">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#243B53] font-bold text-xs tracking-widest uppercase mb-1">Reservation</h4>
                  <p className="text-[#5B6572]/70 text-sm">Main: (555) 987-6543</p>
                  <p className="text-[#5B6572]/70 text-sm">Toll Free: 1-800-LUXURY</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group border border-[#243B53]/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F4EE] border border-[#243B53]/10 flex items-center justify-center text-[#C08B5C] shrink-0 group-hover:bg-[#243B53] group-hover:text-white transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#243B53] font-bold text-xs tracking-widest uppercase mb-1">Email Address</h4>
                  <p className="text-[#5B6572]/70 text-sm">info@zmoksha.com</p>
                  <p className="text-[#5B6572]/70 text-sm">booking@luxury.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#F8F4EE]/30 p-8 sm:p-12 rounded-[2.5rem] border border-[#10212B]/20 shadow-sm font-inter">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-0 sm:mb-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#10212B]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all placeholder:text-[#5B6572]/50 text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white border border-[#10212B]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all placeholder:text-[#5B6572]/50 text-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full bg-white border border-[#10212B]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all placeholder:text-[#5B6572]/50 text-gray-700"
                />
              </div>
              <div className="space-y-2 mb-10">
                <label className="block text-[11px] font-bold tracking-widest uppercase text-[#243B53]/80 ml-1">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-white border border-[#10212B]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#C08B5C] transition-all resize-none placeholder:text-[#5B6572]/50 text-gray-700"
                ></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#243B53] text-white px-12 py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#C08B5C] group shadow-xl">
                Send Message <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Frame */}
        <div className="rounded-[2.5rem] overflow-hidden h-[400px] sm:h-[550px] w-full shadow-2xl relative border border-[#243B53]/10">
          <iframe 
            src="https://www.google.com/maps?q=Manali,Himachal+Pradesh&output=embed" 
            title="Zmoksha Map"
            className="absolute inset-0 w-full h-full opacity-80" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Bottom Help Promo */}
        <div className="mt-12 p-10 px-8 rounded-3xl bg-[#F8F4EE] border border-[#243B53]/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-serif">
          <div className="w-12 h-12 rounded-full bg-[#243B53]/5 flex items-center justify-center text-[#C08B5C]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-[#243B53] text-lg sm:text-2xl font-serif text-center font-bold">
            Have any questions about booking? 
            <a href="tel:+1800222000" className="text-[#C08B5C] hover:underline ml-2 transition-all">Call +1 800 222 000</a>
          </h3>
        </div>

      </div>
    </section>
  );
}
