import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const sidebarPosts = [
  {
    title: "How Resorts Are Evolving With The Wellness Travel Trend",
    date: "June 4, 2025",
    img: "/images/g3.jpg"
  },
  {
    title: "What Amenities To Expect From Top-Tier Hotels & Resorts",
    date: "June 4, 2025",
    img: "/images/facility.jpg"
  },
  {
    title: "How To Choose The Right Hotel Or Resort For Your Vacation",
    date: "June 4, 2025",
    img: "/images/blog3.jpg"
  }
];

export default function BlogSection() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-30 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-8 md:mb-16">
          <span className="text-[#5B6572]/60 text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase block mb-4 font-inter">Latest Blog & Articles</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#243B53] font-bold leading-tight">Travel & Lifestyle Inspiration</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Featured Post (Left) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
              <img src="/images/slider2.jpg" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Featured Post" />
            </div>
            <div className="flex flex-col items-start font-inter">
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-2">
                <Calendar className="w-4 h-4 text-[#C08B5C]" />
                <span>June 4, 2025</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#10212B] font-bold mb-3 transition-colors group-hover:text-[#C08B5C] leading-tight">
                Everything You Need To Know Before Booking A Resort
              </h3>
              <Link to="/blog" className="inline-flex items-center gap-2 text-[#243B53] text-[13px] font-bold tracking-wide group/link transition-colors hover:text-[#C08B5C]">
                Read More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Sidebar Posts (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {sidebarPosts.map((post, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group cursor-pointer">
                <div className="w-full sm:w-45 h-40 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={post.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={post.title} 
                  />
                </div>
                <div className="flex flex-col items-start text-left w-full font-inter">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                    <Calendar className="w-4 h-4 text-[#C08B5C]" />
                    <span>{post.date}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#10212B] font-bold mb-4 transition-colors group-hover:text-[#C08B5C] leading-snug">
                    {post.title}
                  </h4>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-[#243B53] text-[13px] font-bold tracking-wide group/link transition-colors hover:text-[#C08B5C]">
                    Read More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
