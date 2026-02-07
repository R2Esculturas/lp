
import React from 'react';
import Logo from './Logo';

/* 
  ==========================================================================
  🚨 PAINEL DE CONTROLE DE DESIGN - DOBRA 01 (HERO) 🚨
  ==========================================================================
*/

const DESIGN_CONTROLS_HERO = {
  fontSize: {
    // Reduzido conforme solicitado para balancear com a nova proporção da imagem
    mobile: 'text-[40px] sm:text-[48px]', 
    desktop: 'lg:text-[65px] xl:text-[75px]',
  },
  logoScale: {
    mobile: 'scale-[1.0]', 
    desktop: 'lg:scale-[1.8] xl:scale-[2.0]',
  },
  spacingBetween: {
    mobile: 'mt-0', 
    desktop: 'lg:mt-16', // Ajustado espaçamento vertical
  },
  imageConfig: {
    url: 'https://i.postimg.cc/9FdCD6xF/ABERTURA-SITE.webp', 
    aspectRatio: 'aspect-video', // 16:9 conforme solicitado
    maxWidth: 'max-w-[800px]', // Aumentado largura máxima para compensar a altura menor do 16:9
  },
  fontWeight: 'font-normal',
};

const Hero: React.FC = () => {
  const animatedWord = "Experiências";

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent pt-32 lg:pt-40 pb-12 lg:pb-20">
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
            {/* 
              ALTERAÇÃO: Adicionado 'order-2 lg:order-1' 
              No mobile (padrão), este bloco de texto fica em SEGUNDO (order-2).
              No desktop (lg), volta para PRIMEIRO (order-1).
            */}
            <h1 className={`order-2 lg:order-1 ${DESIGN_CONTROLS_HERO.fontSize.mobile} ${DESIGN_CONTROLS_HERO.fontSize.desktop} ${DESIGN_CONTROLS_HERO.fontWeight} font-serif leading-[0.95] tracking-tighter text-gray-900 mt-6 lg:mt-0`}>
              <div className="block">
                Esculturas que
              </div>
              <div className="block">
                transformam 
              </div>
              <div className="block">
                ambientes em
              </div>
              <div className="block">
                <span className="whitespace-nowrap inline-block">
                  {animatedWord.split("").map((char, i) => (
                    <span 
                      key={i} 
                      className="rgb-letter" 
                      style={{ animationDelay: `${i * 0.03}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </div>
            </h1>

            {/* 
              ALTERAÇÃO: Adicionado 'order-1 lg:order-2'
              No mobile (padrão), a logo fica em PRIMEIRO (order-1).
              No desktop (lg), vai para SEGUNDO (order-2).
            */}
            <div className={`order-1 lg:order-2 w-full flex flex-col items-start justify-center min-h-[80px] lg:min-h-[140px] ${DESIGN_CONTROLS_HERO.spacingBetween.mobile} ${DESIGN_CONTROLS_HERO.spacingBetween.desktop}`}>
              <div className="flex flex-col gap-10 items-start">
                <div className={`animate-logo-premium origin-left flex justify-start ${DESIGN_CONTROLS_HERO.logoScale.mobile} ${DESIGN_CONTROLS_HERO.logoScale.desktop}`}>
                  <Logo size="lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end opacity-100 translate-x-0 blur-0 order-3">
            <div className={`relative ${DESIGN_CONTROLS_HERO.imageConfig.maxWidth} w-full`}>
              {/* 
                 ALTERAÇÃO: Removido bg-white, shadow e classes de hover/transform.
                 Mantido aspect-ratio para layout, mas sem fundo, evitando bordas brancas visíveis.
              */}
              <div className={`relative w-full h-auto lg:${DESIGN_CONTROLS_HERO.imageConfig.aspectRatio} overflow-hidden`}>
                <img 
                  src={DESIGN_CONTROLS_HERO.imageConfig.url} 
                  alt="Curadoria R2" 
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  width="1200"
                  height="675"
                  decoding="sync"
                />
              </div>
              {/* Bordas decorativas mantidas fixas (sem movimento de hover) */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gray-200 -z-10" />
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gray-200 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
