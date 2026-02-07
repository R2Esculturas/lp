
import React, { useMemo } from 'react';
import { Heart, Grid, Play, MessageCircle, User } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/r2esculturas/#";

  // Dados brutos dos posts
  const rawPosts = [
    {
      image: "https://i.postimg.cc/V6vLp9Mt/post-1.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DUUJlkljA9P/"
    },
    {
      image: "https://i.postimg.cc/B6bQk5DP/post-2.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DUTtqCQkkRt/"
    },
    {
      image: "https://i.postimg.cc/9M0FKPTq/post-3.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DUUHbEMjPYi/"
    },
    {
      image: "https://i.postimg.cc/Jn04v3Jk/post-4.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DT-RxNDDs7r/"
    },
    {
      image: "https://i.postimg.cc/V6vLp9MM/post-5.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DRrrWXxDulV/"
    },
    {
      image: "https://i.postimg.cc/50yNT5vL/post-6.webp",
      link: "https://www.instagram.com/r2esculturas/reel/DShpuRwjs_5/"
    }
  ];

  // Gera estatísticas aleatórias estáveis (likes e comentários)
  const feedPosts = useMemo(() => {
    return rawPosts.map(post => {
      // Likes: entre 200 e 3000
      const likesCount = Math.floor(Math.random() * (3000 - 200 + 1)) + 200;
      // Comentários: entre 30 e 100
      const commentsCount = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

      // Formatação: se > 999, usa "1.2k"
      const formattedLikes = likesCount > 999 
        ? `${(likesCount / 1000).toFixed(1)}k` 
        : `${likesCount}`;

      return {
        ...post,
        stats: {
          likes: formattedLikes,
          comments: commentsCount
        }
      };
    });
  }, []);

  const handleFollow = () => {
    window.open(INSTAGRAM_URL, '_blank');
  };

  const handleMessage = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="instagram" className="py-12 lg:py-44 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          
          <div className="lg:w-2/5 text-left">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#D97706] mb-4 md:mb-8 block">Arte em Movimento</span>
            <h2 className="text-4xl md:text-7xl font-serif mb-6 md:mb-10 leading-[1.1] tracking-tight text-gray-900">
              Acompanhe <br className="hidden md:block" /> o Ateliê
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-500 font-light text-base md:text-xl leading-relaxed italic mb-8 md:mb-12">
              <p>
                "Acompanhe o nascimento de cada obra, do metal bruto à alma esculpida. Nosso feed é a extensão digital das nossas mãos."
              </p>
              <p className="text-sm md:text-base not-italic text-gray-400 font-normal">
                Junte-se a uma comunidade de 12 mil colecionadores e entusiastas que transformam a percepção do espaço todos os dias.
              </p>
            </div>
            
            <button 
              onClick={handleFollow}
              className="group flex items-center gap-6 text-[10px] font-bold tracking-[0.5em] uppercase text-gray-900 border-b border-gray-200 pb-4 hover:border-[#D97706] transition-all w-fit"
            >
              Ver Perfil Completo <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full scale-0 group-hover:scale-100 transition-transform" />
            </button>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-14">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
                  <div 
                    onClick={handleFollow}
                    className="relative p-[2px] md:p-[3px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div className="w-20 h-20 md:w-36 md:h-36 rounded-full border-[4px] md:border-[5px] border-white overflow-hidden bg-gray-50">
                      {/* Foto de Perfil */}
                      <img 
                        src="https://i.postimg.cc/0QWNcvKX/r2.webp" 
                        className="w-full h-full object-cover" 
                        alt="R2 Logo" 
                        loading="lazy"
                        width={144}
                        height={144}
                      />
                    </div>
                  </div>

                  <div className="flex-1 w-full space-y-4 md:space-y-8">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                        <h3 className="text-xl md:text-3xl font-light text-gray-900 tracking-tight cursor-pointer hover:opacity-70 transition-opacity">
                          r2esculturas
                        </h3>
                        <div className="flex gap-2 w-full md:w-auto">
                           <button onClick={handleFollow} className="flex-1 md:flex-none px-4 md:px-10 py-2.5 bg-[#0095F6] text-white text-[9px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#1877F2] transition-all active:scale-95 shadow-lg shadow-blue-500/20">Seguir</button>
                           <button onClick={handleMessage} className="flex-1 md:flex-none px-4 md:px-8 py-2.5 bg-gray-50 text-gray-900 text-[9px] font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all active:scale-95 border border-gray-100">Mensagem</button>
                        </div>
                      </div>
                      <div className="flex justify-around md:justify-start gap-6 md:gap-12 border-t border-gray-50 pt-4 md:pt-6">
                        <div className="text-center md:text-left"><span className="block text-base md:text-lg font-bold text-gray-900">1.080</span><span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest">posts</span></div>
                        <div className="text-center md:text-left"><span className="block text-base md:text-lg font-bold text-gray-900">12 mil</span><span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest">seguidores</span></div>
                        <div className="text-center md:text-left"><span className="block text-base md:text-lg font-bold text-gray-900">7.482</span><span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest">seguindo</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center border-t border-gray-50">
                <div className="flex gap-8 md:gap-16">
                  <button onClick={handleFollow} className="flex items-center gap-2 py-3 md:py-5 border-t-2 border-black -mt-[2px] text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase"><Grid className="w-3.5 h-3.5" /> PUBLICAÇÕES</button>
                  <button onClick={handleFollow} className="flex items-center gap-2 py-3 md:py-5 text-gray-300 text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase hover:text-gray-500 transition-colors"><Play className="w-3.5 h-3.5" /> REELS</button>
                  <button onClick={handleFollow} className="flex items-center gap-2 py-3 md:py-5 text-gray-300 text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase hover:text-gray-500 transition-colors"><User className="w-3.5 h-3.5" /> MARCADOS</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-0.5 md:gap-1.5 p-0.5 md:p-1.5 bg-gray-50/50">
                {feedPosts.map((post, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => window.open(post.link, '_blank')}
                    className="aspect-square relative group/post cursor-pointer overflow-hidden"
                  >
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/post:scale-110" 
                      alt={`Post R2 ${idx}`}
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/post:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 md:gap-6 text-white backdrop-blur-[2px]">
                      <div className="flex items-center gap-1 transform translate-y-4 group-hover/post:translate-y-0 transition-transform duration-500">
                        <Heart className="w-3 md:w-4 h-3 md:h-4 fill-white" /> <span className="text-[10px] md:text-xs font-bold">{post.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 transform translate-y-4 group-hover/post:translate-y-0 transition-transform duration-500 delay-75">
                        <MessageCircle className="w-3 md:w-4 h-3 md:h-4 fill-white" /> <span className="text-[10px] md:text-xs font-bold">{post.stats.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
