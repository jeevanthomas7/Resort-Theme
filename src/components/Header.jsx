import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // 'rooms' or 'pages'
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobileSubmenu = (menuName) => {
    setMobileSubmenu(mobileSubmenu === menuName ? null : menuName);
  };

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="font-sans absolute top-0 left-0 w-full z-50 bg-transparent py-2 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2 lg:py-4">
        <nav className="flex items-center justify-between gap-4">
          
          {/* Left Menu Links (Desktop) */}
          <div className="hidden lg:flex flex-1 items-center gap-6 xl:gap-10">
            <Link to="/" className="text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200 whitespace-nowrap">Home</Link>
            <Link to="/about" className="text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200 whitespace-nowrap">About Us</Link>
            
            {/* Rooms Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200 whitespace-nowrap">
                Rooms <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute top-full left-0 rounded-2xl mt-3 w-48 bg-[#10212B]/95 backdrop-blur-md py-4 border-t border-accent shadow-2xl transition-all duration-300 z-50">
                <Link to="/rooms" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">All Rooms</Link>
                <Link to="/standard-room" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Standard Room</Link>
                <Link to="/single-room" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Single Room</Link>
                <Link to="/luxury-room" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Luxury Room</Link>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 text-center px-2 sm:px-4 lg:px-8">
            <Link to="/" className="block group">
              <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-none font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">Luxury</h1>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="h-[1px] w-3 sm:w-4 bg-accent/40"></span>
                <span className="text-white text-[5px] sm:text-[7px] lg:text-[7px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light whitespace-nowrap">Resort & Tourism</span>
                <span className="h-[1px] w-3 sm:w-4 bg-accent/40"></span>
              </div>
            </Link>
          </div>

          {/* Right Menu Links (Desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-10">
            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200 whitespace-nowrap">
                Pages <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute top-full right-0 mt-3 w-48 rounded-2xl bg-[#10212B]/95 backdrop-blur-md py-4 border-t border-accent shadow-2xl transition-all duration-300 z-50 text-left">
                <Link to="/amenities" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Amenities</Link>
                <Link to="/booking" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Booking</Link>
                <Link to="/offers" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Offers</Link>
                <Link to="/team" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Our Team</Link>
                <Link to="/gallery" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">Gallery</Link>
                <Link to="/404" className="block px-6 py-2.5 text-cream/80 hover:text-accent hover:bg-white/5 text-[13px] tracking-widest transition-all duration-150">404 Page</Link>
              </div>
            </div>

            <Link to="/blog" className="text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200">Blog</Link>
            <Link to="/contact" className="text-white text-[11px] xl:text-[15px] font-medium tracking-[0.15em] hover:text-accent transition-colors duration-200">Contact Us</Link>
          </div>

          {/* Burger Icon (Mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`w-4 h-[1.5px] bg-accent transition-all duration-300 self-end ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </button>

        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#10212B]/95 backdrop-blur-xl z-[100] lg:hidden flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <Link to="/" onClick={closeMobileMenu} className="block">
              <h1 className="text-accent text-3xl font-medium tracking-tight">Luxury</h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-[1px] w-3 bg-accent/40"></span>
                <span className="text-white text-[6px] tracking-[0.3em] uppercase font-light">RESORT & TOURISM</span>
              </div>
            </Link>
            <button onClick={closeMobileMenu} className="text-white/60 hover:text-accent transition-colors p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-8 gap-1">
            <Link to="/" className="flex items-center justify-between py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="flex items-center justify-between py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors">About Us</Link>
            
            {/* Rooms Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('rooms')}
                className="flex items-center justify-between w-full py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors"
              >
                Rooms <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'rooms' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'rooms' && (
                <div className="pl-4 pb-2 pt-1 bg-white/5 rounded-b space-y-1">
                  <Link to="/rooms" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">All Rooms</Link>
                  <Link to="/standard-room" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Standard Room</Link>
                  <Link to="/single-room" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Single Room</Link>
                  <Link to="/luxury-room" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Luxury Room</Link>
                </div>
              )}
            </div>

            {/* Pages Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('pages')}
                className="flex items-center justify-between w-full py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors"
              >
                Pages <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'pages' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'pages' && (
                <div className="pl-4 pb-2 pt-1 bg-white/5 rounded-b space-y-1">
                  <Link to="/amenities" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Amenities</Link>
                  <Link to="/booking" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Booking</Link>
                  <Link to="/offers" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Offers</Link>
                  <Link to="/team" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Our Team</Link>
                  <Link to="/gallery" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">Gallery</Link>
                  <Link to="/404" className="block py-2 text-cream/80 hover:text-accent text-[12px] tracking-widest transition-colors">404 Page</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="flex items-center justify-between py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors">Blog</Link>
            <Link to="/contact" className="flex items-center justify-between py-4 text-white text-sm tracking-[0.2em] font-medium border-b border-white/5 hover:text-accent transition-colors">Contact Us</Link>
          </div>

          <div className="px-6 pb-10 mt-auto">
            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-accent hover:bg-white hover:text-[#10212B] text-white py-4 text-[11px] font-bold tracking-[0.25em] transition-all duration-200 uppercase"
            >
              BOOK NOW <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
