
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import CategorySection from './components/CategorySection';
import Reveal from './components/Reveal';
import Footer from './components/Footer';
import { CATEGORIES } from './constants';
import { Category } from './types';

// Otimização: Carregamento sob demanda (Code Splitting) para componentes pesados ou abaixo da dobra
const FAQ = React.lazy(() => import('./components/FAQ'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const CategoryPage = React.lazy(() => import('./components/CategoryPage'));
const TransitionalBanner = React.lazy(() => import('./components/TransitionalBanner'));
const InstagramSection = React.lazy(() => import('./components/InstagramSection'));

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'gallery' | 'category'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (v: 'home' | 'gallery' | 'category') => {
    setView(v);
    if (v !== 'category') {
      setSelectedCategory(null);
    }
  };

  const handleOpenCategory = (category: Category) => {
    setSelectedCategory(category);
    setView('category');
  };

  const renderHomeContent = () => {
    const sections: React.ReactNode[] = [];
    
    // 1. NOSSA ESSÊNCIA
    sections.push(
      <Reveal key="section-objective">
        <div className="bg-[#991B1B]/5 border-b border-gray-100">
          <Objective />
        </div>
      </Reveal>
    );

    // 2. PRIMEIRA CATEGORIA (Instagramável)
    if (CATEGORIES[0]) {
      sections.push(
        <Reveal key="cat-instagram">
          <CategorySection 
            category={CATEGORIES[0]} 
            onExplore={() => handleOpenCategory(CATEGORIES[0])}
          />
        </Reveal>
      );
    }

    // 3. CATEGORIAS RESTANTES (Sem banners entre elas)
    for (let i = 1; i < CATEGORIES.length; i++) {
      const cat = CATEGORIES[i];
      sections.push(
        <Reveal key={`cat-${cat.id}`}>
          <CategorySection category={cat} onExplore={() => handleOpenCategory(cat)} />
        </Reveal>
      );
    }

    return sections;
  };

  // Fallback simples para não causar layout shift brusco
  const SectionLoader = () => <div className="w-full h-32 animate-pulse bg-gray-50/50" />;

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="relative">
        {view === 'home' ? (
          <>
            {/* Hero renderizado diretamente sem props de bloqueio */}
            <Hero />
            
            <div className="relative z-20">
              {renderHomeContent()}

              <Suspense fallback={<SectionLoader />}>
                <Reveal>
                  <div className="bg-[#1A1A1A]/[0.03]">
                    <TransitionalBanner />
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-[#166534]/[0.04]">
                    <ContactForm />
                  </div>
                </Reveal>

                <Reveal>
                  <InstagramSection />
                </Reveal>

                <Reveal>
                  <div className="bg-[#D97706]/[0.03]">
                    <FAQ />
                  </div>
                </Reveal>
              </Suspense>
            </div>
          </>
        ) : view === 'gallery' ? (
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><SectionLoader /></div>}>
            <Gallery />
          </Suspense>
        ) : (
          /* View === category */
          selectedCategory && (
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><SectionLoader /></div>}>
              <CategoryPage 
                category={selectedCategory} 
                onBack={() => setView('home')} 
              />
            </Suspense>
          )
        )}
      </main>

      <Reveal>
        <Footer onNavigate={handleNavigate} currentView={view} />
      </Reveal>
    </div>
  );
};

export default App;
