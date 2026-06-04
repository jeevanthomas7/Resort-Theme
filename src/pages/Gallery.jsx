import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import { ZoomIn, Play } from 'lucide-react';
import 'glightbox/dist/css/glightbox.min.css';

const galleryItems = [
  { type: 'image', thumb: '/images/g1.jpg', src: '/images/g1.jpg', alt: 'Resort View' },
  { type: 'video', thumb: '/images/slider2.jpg', src: '/videos/video.mp4', alt: 'Interior Video' },
  { type: 'image', thumb: '/images/g3.jpg', src: '/images/g3.jpg', alt: 'Nature' },
  { type: 'image', thumb: '/images/g4.jpg', src: '/images/g4.jpg', alt: 'Himalayas' },
  { type: 'image', thumb: '/images/slider1.jpg', src: '/images/slider1.jpg', alt: 'Exterior' },
  { type: 'youtube', thumb: '/images/g2.jpg', src: 'https://www.youtube.com/watch?v=Y-x0efG1seA', alt: 'Video Tour' },
  { type: 'image', thumb: '/images/slider3.jpg', src: '/images/slider3.jpg', alt: 'Room View' },
  { type: 'image', thumb: '/images/facility.jpg', src: '/images/facility.jpg', alt: 'Facilities' },
  { type: 'image', thumb: '/images/rom.jpg', src: '/images/rom.jpg', alt: 'Romantic Suite' },
  { type: 'image', thumb: '/images/fac.jpg', src: '/images/fac.jpg', alt: 'Adventure' },
  { type: 'image', thumb: '/images/blog3.jpg', src: '/images/blog3.jpg', alt: 'Adventure 2' },
  { type: 'image', thumb: '/images/bl.jpg', src: '/images/bl.jpg', alt: 'Adventure 3' }
];

export default function Gallery() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      zoomable: true,
      draggable: true,
      openEffect: 'zoom',
      closeEffect: 'fade',
      closeOnOutsideClick: true
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-37 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => {
            if (item.type === 'image') {
              return (
                <a
                  key={idx}
                  href={item.src}
                  className="glightbox block relative group rounded-xl sm:rounded-2xl overflow-hidden aspect-square shadow-sm"
                  data-gallery="resort"
                >
                  <img
                    src={item.thumb}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-[#10212B]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-6 h-6" />
                  </div>
                </a>
              );
            } else if (item.type === 'video') {
              return (
                <a
                  key={idx}
                  href={item.src}
                  className="glightbox block relative group rounded-xl sm:rounded-2xl overflow-hidden aspect-square shadow-sm"
                  data-gallery="resort"
                >
                  <img
                    src={item.thumb}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-[#10212B]/40 flex items-center justify-center transition-colors group-hover:bg-[#10212B]/20">
                    <div className="w-12 h-12 rounded-full bg-white text-[#243B53] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current text-[#243B53] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[9px] text-white/70 font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md px-2 py-1 rounded">
                      Video
                    </span>
                  </div>
                </a>
              );
            } else {
              // YouTube / External Video
              return (
                <a
                  key={idx}
                  href={item.src}
                  className="glightbox block relative group rounded-xl sm:rounded-2xl overflow-hidden aspect-square shadow-sm"
                  data-gallery="resort"
                >
                  <img
                    src={item.thumb}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-[#10212B]/40 flex items-center justify-center transition-colors group-hover:bg-[#10212B]/20">
                    <div className="w-12 h-12 rounded-full bg-[#C08B5C] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current text-white ml-1" />
                    </div>
                  </div>
                </a>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
