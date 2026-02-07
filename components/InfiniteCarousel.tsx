
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface InfiniteCarouselProps {
  products: Product[];
  objectFit?: 'cover' | 'contain';
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ products, objectFit = 'contain' }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Duplicar os produtos para criar o efeito infinito visualmente
  const displayProducts = [...products, ...products, ...products];

  const openLightbox = (originalIndex: number) => {
    setCurrentProductIndex(originalIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Previne scroll da página
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restaura scroll
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  // Controle por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, handleNext, handlePrev]);

  return (
    <>
      <div className="w-full overflow-hidden bg-transparent py-10 relative">
        {/* Degradês ajustados para transparente para combinar com fundos variados */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll hover:pause whitespace-nowrap">
          {displayProducts.map((product, idx) => {
            // Calculamos o índice original baseado na posição no array duplicado
            const originalIndex = idx % products.length;
            
            // Prioriza o fit individual do produto, se não existir, usa o padrão do carrossel
            const finalFit = product.fit || objectFit;
            const fitClass = finalFit === 'cover' 
              ? "object-cover" 
              : "object-contain bg-white";

            return (
              <button 
                key={`${product.id}-${idx}`} 
                onClick={() => openLightbox(originalIndex)}
                // MOBILE TWEAK: Largura reduzida para 160px (era 280px) para exibir mais itens e parecer menos "agigantado"
                className="flex-none w-[160px] md:w-[18vw] mx-2 md:mx-[1vw] group cursor-zoom-in text-left focus:outline-none relative"
              >
                {/* ALTERAÇÃO: Adicionado border-2 border-[#D97706] (Borda Laranja) */}
                <div className="aspect-[3/4] overflow-hidden bg-white relative shadow-lg group-hover:shadow-2xl transition-shadow duration-500 border-2 border-[#D97706]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full ${fitClass} transition-transform duration-[1.5s] group-hover:scale-105`}
                    loading="lazy"
                    width={300}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white/90 text-black text-[10px] font-bold px-4 py-2 uppercase tracking-widest backdrop-blur-sm shadow-xl">Ver Obra</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Portal */}
      {lightboxOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white transition-colors p-2 z-50 hover:rotate-90 duration-300"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Content Wrapper */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Image Container */}
            <div className="relative flex flex-col items-center justify-center max-w-full max-h-full">
              <img 
                src={products[currentProductIndex].image} 
                alt={products[currentProductIndex].name}
                className="w-auto h-auto max-w-[90vw] max-h-[70vh] md:max-h-[80vh] object-contain shadow-2xl select-none"
              />
              
              <div className="mt-6 md:mt-8 text-center animate-reveal px-4">
                <h3 className="text-white text-xl md:text-3xl font-serif italic mb-2 tracking-wide">
                  {products[currentProductIndex].name}
                </h3>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.3em]">
                  {currentProductIndex + 1} — {products.length}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-[#D97706] transition-colors hover:scale-110 outline-none"
            >
              <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-[#D97706] transition-colors hover:scale-110 outline-none"
            >
              <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
            </button>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .animate-scroll {
          /* MOBILE: Alterado de 25s para 20s (Mais rápido) */
          animation: scroll 20s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-reveal {
          animation: revealUp 0.6s ease-out forwards;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            /* DESKTOP: Alterado de 45s para 30s (Mais rápido) */
            animation: scroll 30s linear infinite;
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes fadeIn {
          from { opacity: 0; backdrop-filter: blur(0); }
          to { opacity: 1; backdrop-filter: blur(12px); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default InfiniteCarousel;
