
import React from 'react';
import { Category } from '../types';
import InfiniteCarousel from './InfiniteCarousel';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  onExplore: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, onExplore }) => {
  const isOdd = category.id % 2 !== 0;

  // Lógica de background intercalado
  // Ímpar (1, 3): Igual ao fundo do site (#FDFBF7)
  // Par (2, 4): Um pouco mais escuro para diferenciar (#F4F2EE)
  const bgClass = isOdd ? 'bg-[#FDFBF7]' : 'bg-[#F4F2EE]';

  // Se a categoria tiver destaques definidos, usa eles.
  const details = category.highlights 
    ? category.highlights.map(img => ({ img }))
    : [
        { img: `https://picsum.photos/seed/detail-a-${category.id}/600/750` },
        { img: `https://picsum.photos/seed/detail-b-${category.id}/400/500` },
        { img: `https://picsum.photos/seed/detail-c-${category.id}/600/750` }
      ];

  // Configuração específica para Todas as Categorias (1 a 4)
  // Agora usamos 'cover' em todas para manter o padrão visual de tamanho e preenchimento
  const isZoomedCategory = category.id >= 1 && category.id <= 4;
  const objectFitType = isZoomedCategory ? 'cover' : 'contain';
  
  const highlightImageClass = isZoomedCategory
    ? "w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
    : "w-full h-full object-contain bg-white transition-transform duration-[4000ms] group-hover:scale-110";

  return (
    <section id={`cat-${category.id}`} className={`py-12 lg:py-32 border-b border-gray-100/50 overflow-hidden relative ${bgClass}`}>
      {isOdd && (
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D97706]/5 blur-3xl rounded-full -ml-32 -mb-12 pointer-events-none" />
      )}
      
      <div className="max-w-7xl mx-auto px-6 mb-10 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-10 relative z-10">
        <div className="max-w-2xl text-left">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 mb-2 md:mb-4 block">
            Coleção 0{category.id}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6 tracking-tight text-gray-900">{category.title}</h2>
          {/* Renderiza a descrição apenas se ela existir */}
          {category.description && (
            <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed max-w-xl">
              {category.description}
            </p>
          )}
        </div>
        
        {/* ALTERAÇÃO: Botão Desktop (Oculto no Mobile) - Cor Laranja */}
        <button 
          onClick={onExplore}
          className="hidden md:flex group items-center justify-center gap-4 px-8 py-5 bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B45309] transition-all duration-500 shadow-xl w-fit"
        >
          Ver coleção <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 lg:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {details.map((detail, i) => (
            <Reveal key={`${category.id}-detail-${i}`} className={`delay-[${i * 200}ms]`}>
              <div className="group flex flex-col items-center">
                <div className="relative p-[10px] md:p-[12px] bg-gradient-to-b from-[#D97706] via-[#B45309] to-[#92400E] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] lg:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-1000 group-hover:shadow-[0_45px_90px_-20px_rgba(217,119,6,0.25)] group-hover:-translate-y-4">
                  <div className="absolute inset-0 border-[1px] border-black/20 pointer-events-none z-10" />
                  <div className="bg-white p-[2px]">
                    <div className="aspect-[4/5] overflow-hidden bg-white">
                      <img 
                        src={detail.img} 
                        alt={`Detalhe ${i + 1}`} 
                        className={highlightImageClass}
                        loading="lazy"
                        width={600}
                        height={750}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                </div>
                <div className="w-1 h-1 bg-[#D97706] rounded-full mt-6 md:mt-10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* ALTERAÇÃO: Botão Mobile (Visível apenas no Mobile, abaixo das fotos) - Cor Laranja */}
        <div className="mt-12 md:hidden flex justify-center w-full">
            <button 
              onClick={onExplore}
              className="group flex items-center justify-center gap-4 px-8 py-5 bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B45309] transition-all duration-500 shadow-xl w-full"
            >
              Ver coleção <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
      
      <div className="relative z-10">
        <InfiniteCarousel products={category.products} objectFit={objectFitType} />
      </div>
    </section>
  );
};

export default CategorySection;
