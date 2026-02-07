
import React from 'react';
import { COLORS } from '../constants';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const isLarge = size === 'lg';
  
  const escColors = [
    COLORS.blue, COLORS.green, COLORS.terracotta, COLORS.gold, 
    COLORS.teal, COLORS.wine, COLORS.blue, COLORS.green, 
    COLORS.terracotta, COLORS.gold, COLORS.teal
  ];

  // R2 sempre cinza escuro
  const r2Color = COLORS.darkGrey;

  return (
    <div className="flex items-baseline gap-2 leading-none whitespace-nowrap">
      <div className={`font-bold uppercase tracking-tighter ${isLarge ? 'text-4xl' : 'text-2xl'}`} style={{ color: r2Color }}>
        R2
      </div>
      <div className={`flex ${isLarge ? 'text-2xl' : 'text-xl'} font-extralight tracking-[0.05em] uppercase`}>
        {"Esculturas".split("").map((char, i) => (
          <span 
            key={i} 
            style={{ color: escColors[i % escColors.length] }}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logo;
