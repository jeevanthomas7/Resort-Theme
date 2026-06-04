import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center font-sans overflow-hidden bg-dark">
      
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/slider1.jpg" 
          className="w-full h-full object-cover scale-110" 
          alt="Background" 
        />
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center animate-fade">
        
        <h1 className="font-serif text-[120px] sm:text-[180px] md:text-[240px] text-white/10 leading-none tracking-tighter select-none mb-15 sm:mb-20 font-bold">
          404
        </h1>

        <div className="max-w-xl mx-auto -mt-10 sm:-mt-20">
          <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6 leading-tight tracking-widest font-bold">
            Page Not Found
          </h2>
          
          <p className="text-cream/60 text-sm sm:text-base md:text-lg mb-12 leading-relaxed tracking-wide font-inter">
            The destination you are looking for is hidden in the mist. It may have moved or no longer exists in our sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 font-inter">
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-white px-12 py-4 rounded-full text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-dark shadow-2xl shadow-accent/20 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-12 py-4 rounded-full text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-dark group cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Footer Info */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-20 animate-fade font-inter" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.6em] text-white font-medium">
          <span>Paradise</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Found</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Elsewhere</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
