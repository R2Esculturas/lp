
import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../types';
import Reveal from './Reveal';

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openLightbox = (index: number) => {
    setCurrentProductIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentProductIndex((prev) => (prev + 1) % category.products.length);
  }, [category.products.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentProductIndex((prev) => (prev - 1 + category.products.length) % category.products.length);
  }, [category.products.length]);

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
    <section className="pt-32 pb-32 min-h-screen bg-[#FDFBF7]">
      {/* Header da Categoria */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 hover:text-[#D97706] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar ao Início
        </button>

        <Reveal>
          <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between border-b border-gray-200 pb-10">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#D97706] mb-4 block">
                Coleção Exclusiva 0{category.id}
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-gray-900 mb-6">{category.title}</h1>
              {category.description && (
                <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Grid de Produtos */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, idx) => {
            // Define a classe de ajuste baseada na propriedade 'fit' do produto
            // Se undefined, assume 'contain' como fallback seguro, ou 'cover' se preferir.
            // Aqui respeitamos o que vem do constants.tsx
            const fitClass = product.fit === 'cover' 
              ? "object-cover" 
              : "object-contain bg-white";

            return (
              <Reveal key={product.id} className={`delay-[${(idx % 3) * 100}ms]`}>
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full h-full ${fitClass} transition-transform duration-[1.5s] group-hover:scale-105`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    {/* Ícone de zoom ao passar o mouse */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-white/90 text-black text-[10px] font-bold px-4 py-2 uppercase tracking-widest backdrop-blur-sm shadow-xl">
                        Ampliar
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Botão Inferior de Voltar */}
        <div className="mt-24 text-center">
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-[#D97706] hover:bg-[#B45309] text-white inline-flex items-center justify-center transition-all hover:scale-105 shadow-xl"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Retornar à Home</span>
          </button>
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
                src={category.products[currentProductIndex].image} 
                alt={category.products[currentProductIndex].name}
                className="w-auto h-auto max-w-[90vw] max-h-[70vh] md:max-h-[80vh] object-contain shadow-2xl select-none"
              />
              
              <div className="mt-6 md:mt-8 text-center animate-reveal px-4">
                <h3 className="text-white text-xl md:text-3xl font-serif italic mb-2 tracking-wide">
                  {category.products[currentProductIndex].name}
                </h3>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.3em]">
                  {currentProductIndex + 1} — {category.products.length}
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
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-reveal {
          animation: revealUp 0.6s ease-out forwards;
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
    </section>
  );
};

export default CategoryPage;
