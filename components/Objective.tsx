
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Objective: React.FC = () => {
  const highlights = ["Realismo Extremo", "Design Autoral", "Impacto Visual", "Engenharia de Arte"];

  const handleCTA = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quem-somos" className="py-12 lg:py-44 overflow-hidden relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706]/5 blur-3xl rounded-full -mr-48 -mt-24 pointer-events-none" />
      
      {/* 
        LAYOUT GRID/FLEX HÍBRIDO:
        Mobile (flex-col): 
           1. Texto (order-1)
           2. Imagem (order-2)
           3. Botão Mobile (order-3)
        Desktop (grid):
           Col 1: Imagem (order-1)
           Col 2: Texto + Botão Desktop (order-2)
      */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        
        {/* CONTAINER DA IMAGEM (GIF) */}
        {/* Mobile: Order 2 (Vem depois do texto). Desktop: Order 1 (Vem antes do texto) */}
        <div className="relative order-2 lg:order-1 w-full">
          <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200 rounded-sm -z-10 transition-transform duration-500" />
          <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl bg-gray-100">
            <img 
              src="https://i.postimg.cc/26p33jVf/gif.gif" 
              alt="Processo Criativo R2 - Animação" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* CONTAINER DE TEXTO */}
        {/* Mobile: Order 1 (Primeiro). Desktop: Order 2 (Segundo) */}
        <div className="order-1 lg:order-2 w-full">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D97706] mb-4 block animate-reveal" style={{ animationDelay: '0.1s' }}>Nossa Essência</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 md:mb-8 leading-[1.1] animate-reveal" style={{ animationDelay: '0.3s' }}>
            Elevamos a percepção do espaço.
          </h2>
          <p className="text-gray-500 font-light text-base md:text-xl mb-8 md:mb-12 leading-relaxed animate-reveal" style={{ animationDelay: '0.5s' }}>
            Na R2 Esculturas, cada obra é um estudo de volume, luz e emoção. Não criamos apenas objetos; construímos marcos de sofisticação que humanizam e valorizam projetos de alto luxo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 animate-reveal mb-0 md:mb-16" style={{ animationDelay: '0.7s' }}>
            {highlights.map(item => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#D97706]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          {/* BOTÃO DESKTOP (Escondido no Mobile para permitir que a imagem fique no meio) */}
          <button 
            onClick={handleCTA}
            className="hidden lg:flex mt-16 animate-reveal group items-center gap-8 text-[10px] font-bold tracking-[0.6em] uppercase text-gray-900 border-b-2 border-gray-100 pb-4 hover:border-[#D97706] transition-all"
            style={{ animationDelay: '0.9s' }}
          >
            Iniciar Projeto Custom <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
          </button>
        </div>

        {/* BOTÃO MOBILE (Visível apenas no Mobile, Order 3 para ficar por último) */}
        <div className="w-full lg:hidden order-3 flex justify-start">
           <button 
            onClick={handleCTA}
            className="animate-reveal group flex items-center gap-8 text-[10px] font-bold tracking-[0.6em] uppercase text-gray-900 border-b-2 border-gray-100 pb-4 hover:border-[#D97706] transition-all w-full justify-between"
            style={{ animationDelay: '0.1s' }}
          >
            Iniciar Projeto Custom <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Objective;
