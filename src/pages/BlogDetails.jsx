import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogDetails() {
  const location = useLocation();
  const [title, setTitle] = useState("Resort Travel Guide");
  const [image, setImage] = useState("/images/slider2.jpg");
  const [commentStatus, setCommentStatus] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const stateTitle = location.state?.title || localStorage.getItem('blog_title');
    const stateImage = location.state?.image || localStorage.getItem('blog_image');

    if (stateTitle) {
      setTitle(stateTitle);
    }
    if (stateImage) {
      setImage(stateImage);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentStatus("Thank you! Your comment has been submitted and is awaiting moderation.");
    e.target.reset();
  };

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-37 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 font-inter">
        <div className="max-w-4xl mx-auto">
          
          {/* Category & Date */}
          <div className="flex items-center gap-4 text-text/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            <span className="text-accent">HOSPITALITY</span>
            <span className="w-1.5 h-1.5 bg-accent/30 rounded-full"></span>
            <span>June 4, 2025</span>
          </div>
          
          {/* Title */}
          <h1 id="detail-title" className="font-serif text-3xl sm:text-5xl md:text-5xl text-primary leading-tight font-bold mb-10">
            {title}
          </h1>

          {/* Banner Image */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 aspect-[16/9] border border-primary/5">
            <img 
              id="detail-img" 
              src={image} 
              className="w-full h-full object-cover" 
              alt={title}
            />
          </div>

          {/* Article Prose Content */}
          <div className="prose prose-lg text-text/80 space-y-8 leading-relaxed mb-10 lg:mb-15">
            <p className="text-xl text-primary font-medium font-serif leading-relaxed">
              Nestled deep within the snow-capped peaks of the Himalayas, Zmoksha Resort offers a gateway to Manali's most breathtaking natural treasures.
            </p>
            <p className="font-sans text-base">
              Booking a luxury resort in Manali requires understanding the local seasons. While winter offers a snowy paradise perfect for cozy indoor luxury, the summer months bring vibrant trekking opportunities and river-side activities. Our suites are designed to bridge these seasons with heated floors and panoramic glass walls that never obscure the view.
            </p>
            <p className="font-sans text-base">
              Beyond comfortable lodging, visitors should also seek out curated wellness experiences. From traditional Ayurvedic therapies to organic farm-to-table cuisine prepared by our chefs, your time here is focused entirely on restoration, mindfulness, and direct connection with nature.
            </p>
          </div>

          {/* Comment Form Section */}
          <div className="bg-[#F8F4EE]/20 p-8 sm:p-12 rounded-[2.5rem] border border-primary/20">
            <h3 className="font-serif text-3xl text-primary font-bold mb-2">Leave a Comment</h3>
            <p className="text-text/60 text-sm mb-10">Your email address will not be published. Required fields are marked *</p>
            
            {commentStatus && (
              <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-sm">
                {commentStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  required
                  className="w-full bg-white border border-primary/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all text-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required
                  className="w-full bg-white border border-primary/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all text-primary"
                />
              </div>
              <input 
                type="text" 
                placeholder="Website" 
                className="w-full bg-white border border-primary/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all text-primary"
              />
              <textarea 
                rows="6" 
                placeholder="Message *" 
                required
                className="w-full bg-white border border-primary/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all resize-none text-primary"
              ></textarea>
              
              <div className="flex items-start gap-3 px-2">
                <input type="checkbox" id="save-info" className="mt-1 accent-accent" />
                <label htmlFor="save-info" className="text-text/60 text-[12px] cursor-pointer">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <button 
                type="submit" 
                className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent group shadow-lg cursor-pointer"
              >
                Post Comment 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
