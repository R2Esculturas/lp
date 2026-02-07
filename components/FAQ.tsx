
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-44 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          {/* FIX: Removido lg:sticky lg:top-32 para eliminar efeito de scroll fixo */}
          <div className="lg:w-1/3">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#D97706] mb-4 md:mb-6 block">Informativo</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-4 md:mb-8">Principais <br/><span className="italic">Dúvidas</span></h2>
            <p className="text-gray-500 font-light text-base md:text-xl leading-relaxed">
              Esclarecemos os detalhes fundamentais para aquisição e comissionamento de obras R2.
            </p>
          </div>
          
          <div className="lg:w-2/3 space-y-4 md:space-y-6 w-full">
            {FAQ_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className={`group border border-gray-100 rounded-[1.2rem] md:rounded-[2rem] transition-all duration-500 ${openIndex === idx ? 'bg-white shadow-2xl shadow-orange-900/5 -translate-y-1' : 'bg-white/40 hover:bg-white/80'}`}
              >
                <button 
                  className="w-full flex items-center justify-between p-5 md:p-10 text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`text-base md:text-2xl font-serif transition-colors duration-500 pr-4 ${openIndex === idx ? 'text-orange-800' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 md:p-3 rounded-full transition-all duration-500 shrink-0 ${openIndex === idx ? 'bg-[#D97706] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                    {openIndex === idx ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 md:px-10 pb-6 md:pb-12 pt-2 text-gray-500 leading-relaxed font-light text-sm md:text-lg max-w-3xl">
                    <div className="h-px w-8 md:w-10 bg-orange-200 mb-4 md:mb-6"></div>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
