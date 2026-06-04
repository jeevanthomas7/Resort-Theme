import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredPost = {
  title: "Everything You Need To Know Before Booking A Resort In Manali",
  image: "/images/slider2.jpg",
  date: "June 4, 2025"
};

const sidePosts = [
  {
    title: "Wellness and Spa Trends in Himalayan Resorts",
    image: "/images/g3.jpg",
    date: "June 4, 2025"
  },
  {
    title: "Essential Packing List for a Winter Trip to Manali",
    image: "/images/facility.jpg",
    date: "June 2, 2025"
  },
  {
    title: "Sustainable Tourism: Protecting the Himalayas",
    image: "/images/g1.jpg",
    date: "May 29, 2025"
  }
];

const gridPosts = [
  {
    title: "Top 10 Hidden Gem Viewpoints In Old Manali",
    image: "/images/g1.jpg",
    date: "May 24, 2025"
  },
  {
    title: "Traditional Himachali Cuisine: A Foodie Guide",
    image: "/images/g4.jpg",
    date: "May 18, 2025"
  },
  {
    title: "Private Treks: Exploring the Beas River Valley",
    image: "/images/bl.jpg",
    date: "May 12, 2025"
  }
];

export default function Blog() {
  const navigate = useNavigate();

  const handleGoToDetail = (title, image) => {
    localStorage.setItem('blog_title', title);
    localStorage.setItem('blog_image', image);
    navigate('/blog-details', { state: { title, image } });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16 lg:pb-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main/Featured Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-8 lg:mb-16">
          
          {/* Featured Post Column */}
          <div 
            className="lg:col-span-7 group cursor-pointer" 
            onClick={() => handleGoToDetail(featuredPost.title, featuredPost.image)}
          >
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-primary/10">
              <img 
                src={featuredPost.image} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                alt="Featured Post" 
              />
            </div>
            <div className="flex flex-col items-start px-2 font-inter">
              <div className="flex items-center gap-2 text-text/50 text-[11px] font-bold tracking-widest uppercase mb-2">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{featuredPost.date}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-primary font-bold mb-4 transition-colors group-hover:text-accent leading-tight">
                {featuredPost.title}
              </h3>
              <button className="inline-flex items-center gap-2 text-primary text-[13px] font-bold tracking-wide group/link">
                Read More 
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </button>
            </div>
          </div>

          {/* Side Posts Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sidePosts.map((post, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-6 group cursor-pointer font-inter" 
                onClick={() => handleGoToDetail(post.title, post.image)}
              >
                <div className="w-full sm:w-48 h-32 flex-shrink-0 rounded-2xl overflow-hidden border border-primary/10 shadow-lg">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={post.title}
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-2 text-text/50 text-[10px] font-bold uppercase mb-2">
                    <span>{post.date}</span>
                  </div>
                  <h4 className="font-serif text-lg text-primary font-bold mb-2 transition-colors group-hover:text-accent leading-snug">
                    {post.title}
                  </h4>
                  <button className="inline-flex items-center gap-1 text-primary text-[11px] font-bold group/link">
                    Read More 
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Grid Posts */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 font-inter">
          {gridPosts.map((post, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer border border-primary/20 p-8 rounded-2xl" 
              onClick={() => handleGoToDetail(post.title, post.image)}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-primary/10 shadow-xl">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={post.title}
                />
              </div>
              <h4 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-accent">
                {post.title}
              </h4>
              <button className="inline-flex items-center gap-1 text-primary text-[12px] font-bold group/link">
                Read More 
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 lg:mb-15 font-inter">
          <button 
            onClick={handleScrollToTop} 
            className="w-[45px] h-[45px] flex items-center justify-center rounded-[14px] bg-[#f9f8f4] text-primary border border-black/5 transition-all hover:bg-accent hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={handleScrollToTop} 
            className="w-[45px] h-[45px] flex items-center justify-center rounded-[14px] bg-primary text-white font-bold border border-primary shadow-lg shadow-primary/20"
          >
            1
          </button>
          <button 
            onClick={handleScrollToTop} 
            className="w-[45px] h-[45px] flex items-center justify-center rounded-[14px] bg-[#f9f8f4] text-primary font-bold border border-black/5 hover:bg-accent hover:text-white transition-all"
          >
            2
          </button>
          <button 
            onClick={handleScrollToTop} 
            className="w-[45px] h-[45px] flex items-center justify-center rounded-[14px] bg-[#f9f8f4] text-primary border border-black/5 transition-all hover:bg-accent hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
