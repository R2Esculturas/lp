
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Send } from 'lucide-react';
import Logo from './Logo';
import { CATEGORIES } from '../constants';

interface NavbarProps {
  onNavigate: (view: 'home' | 'gallery' | 'category') => void;
  currentView: 'home' | 'gallery' | 'category';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  
  // Ref para armazenar a última posição do scroll sem causar re-renders
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Lógica de visibilidade do menu (Mobile Smart Navbar)
      // Se rolar para baixo (> 10px de diferença) e não estiver no topo -> Esconde
      // Se rolar para cima -> Mostra
      if (currentScrollY > 10) {
        if (currentScrollY > lastScrollY.current && (currentScrollY - lastScrollY.current > 5)) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current && (lastScrollY.current - currentScrollY > 5)) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Lógica do background (existente)
      window.requestAnimationFrame(() => {
        setIsScrolled(currentScrollY > 50);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (anchor: string) => {
    handleCloseMenus();
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCloseMenus = () => {
    setMobileMenuOpen(false);
    setCategoryMenuOpen(false);
  };

  const isInternalPage = currentView === 'gallery' || currentView === 'category';

  // Lógica de visibilidade do background:
  // No Desktop (lg): Aparece apenas se scrollado ou página interna.
  // No Mobile: Sempre visível (opacity-100) para garantir que o menu apareça ao carregar.
  const backgroundOpacityClass = (isScrolled || isInternalPage || mobileMenuOpen)
    ? 'opacity-100' // Desktop scrollado OU Mobile (sempre 100 via override abaixo se necessário, mas aqui garante scroll)
    : 'opacity-100 lg:opacity-0'; // Mobile: 100 (Sempre visível), Desktop: 0 (Transparente no topo)

  // Lógica de transformação (Smart Navbar)
  // No mobile: usa isVisible para definir translate.
  // No Desktop (lg): Sempre translate-y-0 (fixo normal).
  const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  // Menu Items Definition - ATUALIZADO COM NOVA ORDEM
  const menuItems = [
    { label: 'Quem Somos', action: () => handleLinkClick('#quem-somos') },
    // Categoria 1: Esculturas
    { label: 'Esculturas', action: () => handleLinkClick('#cat-1') }, 
    // Categoria 2: Troféus
    { label: 'Troféus', action: () => handleLinkClick('#cat-2') },
    // Categoria 3: Copos Temáticos
    { label: 'Copos Temáticos', action: () => handleLinkClick('#cat-3') }, 
    // Categoria 4: Pratos Temáticos
    { label: 'Pratos temáticos', action: () => handleLinkClick('#cat-4') }, 
    { label: 'Orçamento', action: () => handleLinkClick('#contato'), isPrimary: true }
  ];

  return (
    <>
      {/* 
         FIX: Adicionado lg:translate-y-0 para garantir que no desktop ele fique sempre visível.
         Adicionado transition-transform duration-300 para animação suave de entrada/saída no mobile.
      */}
      <nav className={`fixed top-0 left-0 w-full z-[100] py-6 transition-transform duration-300 ${transformClass} lg:translate-y-0`}>
        <div 
          className={`absolute inset-0 -z-10 transition-opacity duration-500 bg-white/95 backdrop-blur-md shadow-sm ${backgroundOpacityClass}`} 
          style={{ transform: 'translateZ(0)' }}
        />
        
        {/* ALTERAÇÃO: max-w aumentou para 1920px e padding lateral ajustado para lg:px-16 para layout "ponta a ponta" */}
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 flex items-center justify-between">
          <button 
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); handleCloseMenus(); }} 
            className="transition-transform duration-300 hover:scale-105 active:scale-95 origin-left"
            aria-label="Ir para a página inicial"
            title="Ir para a página inicial"
          >
            {/* Logo mantém tamanho constante para estabilidade visual */}
            <Logo size="md" />
          </button>

          {/* Desktop Menu */}
          {/* ALTERAÇÃO: gap ajustado para gap-8 xl:gap-12 para flexibilidade */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {menuItems.map((item, index) => (
              item.isPrimary ? (
                <button 
                  key={index}
                  onClick={item.action}
                  // ALTERAÇÃO: text-[9px], whitespace-nowrap adicionado
                  className="bg-black text-white px-6 py-3 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-[#D97706] transition-colors duration-300 flex items-center gap-3 group whitespace-nowrap"
                >
                  {item.label} <Send className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              ) : (
                <button 
                  key={index}
                  onClick={item.action}
                  // ALTERAÇÃO: text-[9px], whitespace-nowrap adicionado
                  className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-[#D97706] transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <button 
            className="lg:hidden p-2 hover:bg-black/5 rounded-full" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            title="Abrir menu"
          >
            <Menu className="w-7 h-7" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Categorias Overlay - Mantido caso queiram acessar outras categorias no futuro */}
      {categoryMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] flex flex-col p-8 md:p-16 overflow-y-auto">
          <div className="flex justify-between items-center mb-20 max-w-7xl mx-auto w-full">
            <Logo size="md" />
            <button 
              onClick={() => setCategoryMenuOpen(false)} 
              className="p-4 bg-gray-50 rounded-full hover:rotate-90 transition-all"
              aria-label="Fechar menu de categorias"
              title="Fechar"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto w-full">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => { handleCloseMenus(); handleLinkClick(`#cat-${cat.id}`); }}
                className="group border-b border-gray-100 pb-8 text-left hover:border-[#D97706]/30 transition-all"
              >
                <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300 group-hover:text-[#D97706]">0{cat.id}</span>
                <h3 className="text-3xl md:text-5xl font-serif mt-4">{cat.title}</h3>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Main Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[150] flex flex-col p-10 overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
            <Logo size="sm" />
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Fechar menu principal"
              title="Fechar"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => { 
                  item.action();
                  // Fecha o menu mobile após clicar em qualquer item
                  setMobileMenuOpen(false);
                }}
                className="text-left text-3xl md:text-4xl font-serif py-4 border-b border-gray-50 tracking-tight"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
