
import React, { useState } from 'react';

const TransitionalBanner: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <section className="py-12 lg:py-40 px-6 md:px-20 bg-transparent">
      <div 
        onClick={handleToggle}
        onMouseEnter={() => setIsHidden(true)}
        onMouseLeave={() => setIsHidden(false)}
        className="group relative max-w-7xl mx-auto overflow-hidden rounded-sm shadow-sm transition-all duration-1000 hover:shadow-2xl cursor-pointer"
      >
        {/* MOBILE FIX: aspect-video e object-contain para não cortar o mockup horizontal */}
        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden bg-white">
          <img 
            src="https://i.postimg.cc/dQ4yxRbQ/MOCKUP.webp" 
            alt="R2 Sculpture Showcase" 
            className={`w-full h-full object-contain md:object-cover transition-all duration-[2000ms] ease-out 
              ${isHidden ? 'blur-0 scale-105' : 'blur-[3px] scale-100'}`}
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isHidden ? 'opacity-10' : 'opacity-40'}`} />
        </div>

        <div className={`absolute inset-0 flex items-center justify-center p-4 md:p-6 transition-all duration-1000 ease-in-out
          ${isHidden ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          
          <div className="relative text-center w-full max-w-3xl py-8 md:py-16 px-6 md:px-20 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md border border-white/10" />
            
            <div className="relative z-10">
              <h2 className="flex flex-col items-center">
                <span className="text-[8px] md:text-[14px] font-bold tracking-[0.8em] md:tracking-[1.2em] uppercase text-white/90 mb-2 md:mb-6 drop-shadow-md">
                  Bem-vindos à
                </span>
                <span className="text-[8vw] md:text-8xl font-serif text-white leading-[0.8] tracking-tighter uppercase drop-shadow-2xl block">
                  R2 ESCULTURAS
                </span>
              </h2>
              <div className="w-8 md:w-20 h-[2px] bg-[#D97706] mx-auto mt-4 md:mt-12 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransitionalBanner;
