
import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/gallery-${i}/800/1000`,
    title: `Obra Autoral #${i + 1}`
  }));

  return (
    <section className="pt-40 pb-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#D97706] mb-4 block">Acervo Exclusivo</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Galeria de Obras</h2>
          <div className="h-px w-20 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group relative overflow-hidden bg-white p-2 shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[9px] font-bold tracking-widest uppercase text-gray-400">{img.title}</span>
                <div className="h-px w-6 bg-gray-100 group-hover:bg-[#D97706] transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
