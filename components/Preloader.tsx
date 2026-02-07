
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        // Incremento não linear para parecer mais natural
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Carregando Acervo</span>
        <span className="text-4xl font-serif text-[#D97706] leading-none">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-[2px] bg-gray-100 overflow-hidden relative">
        <div 
          className="absolute left-0 top-0 h-full bg-[#D97706] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
