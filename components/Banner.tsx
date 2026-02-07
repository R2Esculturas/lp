
import React from 'react';

interface BannerProps {
  text: string;
  bgColor: string;
  textColor?: string;
  nowrap?: boolean;
}

const Banner: React.FC<BannerProps> = ({ text, bgColor, textColor = '#FFFFFF', nowrap = false }) => {
  return (
    <div className="w-full py-12 lg:py-20 px-6 flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: bgColor }}>
      <p 
        className={`text-xl md:text-4xl font-serif leading-relaxed italic px-4 md:px-0 ${nowrap ? 'whitespace-nowrap max-w-none' : 'max-w-4xl'}`}
        style={{ color: textColor }}
      >
        “{text}”
      </p>
    </div>
  );
};

export default Banner;
