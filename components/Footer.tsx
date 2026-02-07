
import React from 'react';
import Logo from './Logo';
import { Instagram, Send } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface FooterProps {
  onNavigate: (view: 'home' | 'gallery' | 'category') => void;
  currentView: 'home' | 'gallery' | 'category';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const INSTAGRAM_URL = "https://www.instagram.com/r2esculturas/#";
  
  const handleInternalLink = (anchor: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // Pequeno timeout para garantir que o componente Home foi montado antes de scrollar
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGoToHomeTop = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Coluna 1: Logo e Bio */}
          <div className="lg:col-span-1">
            <div className="mb-8 scale-90 origin-left">
              <button 
                onClick={handleGoToHomeTop} 
                className="hover:opacity-70 transition-opacity"
                aria-label="Voltar ao topo da página inicial"
                title="Voltar ao topo"
              >
                <Logo size="md" />
              </button>
            </div>
            {/* CONTRAST FIX: Text-gray-500 -> Text-gray-800 */}
            <p className="text-gray-800 font-light leading-relaxed mb-8">
              Transformamos ambientes em experiências através da arte escultórica de alto realismo. Nossas peças são pontes entre o espaço físico e a emoção humana.
            </p>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all duration-500 text-gray-900"
                aria-label="Siga a R2 Esculturas no Instagram"
                title="Siga a R2 Esculturas no Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Navegação Institucional */}
          <div>
            {/* CONTRAST FIX: Text-gray-400 -> Text-gray-900 (Titulos) */}
            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-900">Navegação</h3>
            <ul className="space-y-4 text-sm text-gray-800 font-medium">
              <li>
                <button onClick={handleGoToHomeTop} className="hover:text-[#D97706] transition-colors">Início</button>
              </li>
              <li>
                <button onClick={() => handleInternalLink('#quem-somos')} className="hover:text-[#D97706] transition-colors">Quem Somos</button>
              </li>
              <li>
                <button onClick={() => handleInternalLink('#instagram')} className="hover:text-[#D97706] transition-colors">Instagram</button>
              </li>
              <li>
                <button onClick={() => handleInternalLink('#contato')} className="hover:text-[#D97706] transition-colors font-bold">Solicitar Orçamento</button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Todas as Categorias (Curadoria Completa) */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-900">Categorias</h3>
            <ul className="grid grid-cols-1 gap-3 text-[11px] text-gray-700 font-medium uppercase tracking-wider">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button 
                    onClick={() => handleInternalLink(`#cat-${cat.id}`)} 
                    className="hover:text-[#D97706] transition-colors text-left group flex items-center gap-2"
                  >
                    <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-[#D97706]">●</span>
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Endereço & Ação Premium */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 text-gray-900">Atendimento</h3>
            <div className="text-sm text-gray-800 font-light leading-relaxed">
              <p className="mb-8 font-medium">
                Rua Ministro Junqueira Ayres, 118<br />
                São Paulo - SP, Brasil
              </p>
              <button 
                onClick={() => handleInternalLink('#contato')}
                className="group flex items-center justify-center gap-3 w-full px-6 py-5 bg-black text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-none hover:bg-[#D97706] transition-all duration-500 shadow-xl"
              >
                Orçamento Personalizado <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Créditos Finais */}
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-600 tracking-[0.3em] uppercase font-bold">
            © {new Date().getFullYear()} R2 Esculturas. Todos os direitos reservados.
          </p>
          <div className="flex gap-10">
             <button className="text-[9px] text-gray-600 tracking-[0.3em] uppercase hover:text-black transition-colors font-bold">Privacidade</button>
             <button className="text-[9px] text-gray-600 tracking-[0.3em] uppercase hover:text-black transition-colors font-bold">Termos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
