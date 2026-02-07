
import { Category, FAQItem } from './types';

export const COLORS = {
  blue: '#2563EB',
  green: '#16A34A',
  terracotta: '#991B1B',
  gold: '#D97706',
  teal: '#0D9488',
  wine: '#7F1D1D',
  darkGrey: '#1A1A1A',
  offWhite: '#FDFBF7',
  sand: '#E5E0D8'
};

// Ordem das categorias
const categoryTitles = [
  "ESCULTURAS",
  "TROFÉUS",
  "COPOS TEMÁTICOS",
  "PRATOS TEMÁTICOS"
];

// --- DESTAQUES (Highlights) ---

// Destaques Copos (Mantidos os antigos compartilhados)
const coposDestaques = [
  "https://i.postimg.cc/t4xBD9Jd/DESTAQUE-1.webp",
  "https://i.postimg.cc/x1z6g98y/DESTAQUE-2.webp",
  "https://i.postimg.cc/rwrfgqsh/DESTAQUE-3.webp"
];

// Destaques Troféus
const trofeusDestaques = [
  "https://i.postimg.cc/15bfB1hB/Captura-de-Tela-2026-02-05-a-s-10-36-16-1.webp",
  "https://i.postimg.cc/3Jzd1Q5n/Captura-de-Tela-2026-02-05-a-s-10-36-46.webp",
  "https://i.postimg.cc/zX4V7YZp/Captura-de-Tela-2026-02-05-a-s-10-37-27-1.webp"
];

// Destaques Esculturas (Screenshots)
const esculturasDestaques = [
  "https://i.postimg.cc/7Y5CR4Df/Screenshot-20250228-184204-Instagram-2.webp",
  "https://i.postimg.cc/9FD4k2V4/Screenshot-20250228-184324-Instagram-2.webp",
  "https://i.postimg.cc/6587PKw8/Screenshot-20250408-091541-Instagram-2.webp"
];

// Destaques Pratos Temáticos (Atualizados)
const pratosDestaques = [
  "https://i.postimg.cc/cJt7TGJk/Screenshot-20241203-071828-Instagram-2.webp",
  "https://i.postimg.cc/NFB1gyxB/Screenshot-20250723-180556-Instagram-2.webp",
  "https://i.postimg.cc/wvhX85LW/Screenshot-20250414-121645-Instagram-2.webp"
];

// --- LISTAS DE PRODUTOS ---

// Lista Exclusiva Troféus
const listaTrofeus = [
  // Prioridade solicitada
  "https://i.postimg.cc/SNHJdbby/Screenshot-20241205-160333-Instagram-2.webp",
  "https://i.postimg.cc/65Fycxx6/Screenshot-20241205-160357-Instagram-2.webp",
  "https://i.postimg.cc/7Yjf9rrZ/Screenshot-20241205-160411-Instagram-2.webp",
  "https://i.postimg.cc/15bfB1hB/Captura-de-Tela-2026-02-05-a-s-10-36-16-1.webp",
  "https://i.postimg.cc/3Jzd1Q5n/Captura-de-Tela-2026-02-05-a-s-10-36-46.webp",
  "https://i.postimg.cc/zX4V7YZp/Captura-de-Tela-2026-02-05-a-s-10-37-27-1.webp",
  "https://i.postimg.cc/6588C5SP/Captura-de-Tela-2026-02-05-a-s-10-35-44.webp",
  "https://i.postimg.cc/gkxx3k5Q/Captura-de-Tela-2026-02-05-a-s-10-35-57.webp",
  "https://i.postimg.cc/Wbxh8cLK/IMG-20231010-WA0132.webp",
  "https://i.postimg.cc/hPNfsRWk/IMG-20231027-WA0168.webp",
  "https://i.postimg.cc/sDbvmCCr/IMG-20251208-WA0082.webp",
  "https://i.postimg.cc/ZKXCHzz4/IMG-20251208-WA0083-1.webp",
  "https://i.postimg.cc/5ND6gWWM/IMG-20240807-WA0248.webp",
  // Restante da coleção
  "https://i.postimg.cc/rFDD5Fbf/905b8579-7bd8-4b0e-92d5-1eff9de73306.webp",
  "https://i.postimg.cc/fTVVYTFq/Captura-de-Tela-2026-02-05-a-s-10-33-51-1.webp",
  "https://i.postimg.cc/2811n8JK/Captura-de-Tela-2026-02-05-a-s-10-34-34.webp",
  "https://i.postimg.cc/FsYY0sqn/Captura-de-Tela-2026-02-05-a-s-10-34-57-1.webp",
  "https://i.postimg.cc/Fsw7pX5T/ec2fc38e-0392-4015-97d7-e7022f39c4f0.webp",
  "https://i.postimg.cc/xTBc5VDp/IMG-20220823-092646-110.webp",
  "https://i.postimg.cc/ncNC2fbw/IMG-20220921-WA0030.webp",
  "https://i.postimg.cc/TYBp0vMs/IMG-20230123-WA0244.webp",
  "https://i.postimg.cc/bN4sgfcK/IMG-20230123-WA0248.webp",
  "https://i.postimg.cc/BQRXpf9V/IMG-20230627-223353-884.webp",
  "https://i.postimg.cc/kXLBsPPr/IMG-20231012-WA0096.webp"
];

// Lista Exclusiva Copos Temáticos
const listaCopos = [
  "https://i.postimg.cc/WzKjMVB4/c4.webp",
  "https://i.postimg.cc/6qSwdKkp/copo-1.webp",
  "https://i.postimg.cc/kGZ9xC0V/Whats-App-Image-2026-02-06-at-18-32-43.webp",
  "https://i.postimg.cc/vTjMWyJD/Whats-App-Image-2026-02-06-at-18-32-43-(1).webp",
  "https://i.postimg.cc/nr5Zvxyz/Whats-App-Image-2026-02-06-at-18-32-43-(2).webp",
  "https://i.postimg.cc/rsbcSTB0/Whats-App-Image-2026-02-06-at-18-32-43-(3).webp",
  "https://i.postimg.cc/wMPHhzCD/Whats-App-Image-2026-02-06-at-18-36-59.webp",
  "https://i.postimg.cc/MH4xywCj/Whats-App-Image-2026-02-06-at-18-36-59-(1).webp",
  "https://i.postimg.cc/Xqh3wWRd/Whats-App-Image-2026-02-06-at-18-36-59-(2).webp",
  "https://i.postimg.cc/PJchmHgw/Whats-App-Image-2026-02-06-at-18-36-59-(3).webp",
  "https://i.postimg.cc/ZYDTkPCM/Whats-App-Image-2026-02-06-at-18-37-49.webp",
  "https://i.postimg.cc/KcsZX7Rq/Whats-App-Image-2026-02-06-at-18-37-49-(1).webp",
  "https://i.postimg.cc/kMhnrNBk/Whats-App-Image-2026-02-06-at-18-42-11.webp",
  "https://i.postimg.cc/1RY9x0fd/Whats-App-Image-2026-02-06-at-18-42-11-(1).webp",
  "https://i.postimg.cc/KvMzpp56/IMG-20240124-WA0093.webp",
  "https://i.postimg.cc/ncDzSSkZ/IMG-20240205-WA0017-2.webp",
  "https://i.postimg.cc/kgP50N1B/IMG-20240302-WA0104.webp",
  "https://i.postimg.cc/2SN5sdcb/IMG-20240302-WA0113.webp",
  "https://i.postimg.cc/52Wth57C/IMG-20240302-WA0119.webp",
  "https://i.postimg.cc/dVR0w7pN/IMG-20251126-WA0168.webp",
  "https://i.postimg.cc/9QPfC4Kx/IMG-20251126-WA0169.webp",
  "https://i.postimg.cc/TPR3wdvk/IMG-20251126-WA0170.webp",
  "https://i.postimg.cc/zfJGBzYt/Screenshot-20240304-175932-Instagram-3.webp",
  "https://i.postimg.cc/MGWpT6Jd/Screenshot-20240714-101946-Instagram-2.webp",
  "https://i.postimg.cc/43JxdfR0/Screenshot-20240718-000011-Instagram-2.webp",
  "https://i.postimg.cc/rp8wmV2B/Screenshot-20241205-213819-Instagram-2.webp",
  "https://i.postimg.cc/CKFx1hpX/Screenshot-20241205-213855-Instagram-2.webp",
  "https://i.postimg.cc/s2VgXjCt/Screenshot-20250729-223403-Instagram-2.webp",
  "https://i.postimg.cc/tR35LbNm/Screenshot-20251120-223822-Instagram.webp",
  "https://i.postimg.cc/xjvRWQ3h/Screenshot-20251123-111544-Instagram-2.webp"
];

// Lista Exclusiva Esculturas
const listaEsculturas = [
  "https://i.postimg.cc/k5DcHdz2/ESCULTURAS-00.webp",
  "https://i.postimg.cc/jj9X0FY5/Whats-App-Image-2026-02-06-at-18-18-37.webp",
  "https://i.postimg.cc/rpbJXP2D/Whats-App-Image-2026-02-06-at-18-18-37-(1).webp",
  "https://i.postimg.cc/k5Zc3pP8/Whats-App-Image-2026-02-06-at-18-18-38.webp",
  "https://i.postimg.cc/mrqwf5Wg/Whats-App-Image-2026-02-06-at-18-18-38-(1).webp",
  "https://i.postimg.cc/vmjzFNwD/Whats-App-Image-2026-02-06-at-18-18-38-(2).webp",
  "https://i.postimg.cc/GpNQw5nT/Whats-App-Image-2026-02-06-at-18-18-38-(3).webp",
  "https://i.postimg.cc/HLK2Dh1y/Whats-App-Image-2026-02-06-at-18-18-39.webp",
  "https://i.postimg.cc/Dfrgthc7/IMG-20231103-WA0067.webp",
  "https://i.postimg.cc/9Xdpv2B0/IMG-20231103-WA0069.webp",
  "https://i.postimg.cc/xT9RQZs9/Whats-App-Image-2026-02-03-at-16-44-42.webp",
  "https://i.postimg.cc/zDCj9NkX/Whats-App-Image-2026-02-03-at-16-44-42-(1).webp",
  "https://i.postimg.cc/v8rzpyvB/Whats-App-Image-2026-02-03-at-16-44-42-(2).webp",
  "https://i.postimg.cc/WbsnVy91/Whats-App-Image-2026-02-03-at-20-49-39.webp",
  "https://i.postimg.cc/m2Tw4nd2/Whats-App-Image-2026-02-03-at-20-49-39-(1).webp"
];

// Lista Exclusiva Pratos (Atualizada e Filtrada)
const listaPratos = [
  "https://i.postimg.cc/yYmsDMfZ/Whats-App-Image-2026-02-07-at-08-23-17.webp",
  "https://i.postimg.cc/CLGSR3v8/Whats-App-Image-2026-02-07-at-08-28-40.webp",
  "https://i.postimg.cc/3RmgMrZz/PRATO-1.jpg",
  "https://i.postimg.cc/d1r8MQBc/PRATO-2.jpg",
  "https://i.postimg.cc/j5PzVqXr/PRATO-3.jpg",
  "https://i.postimg.cc/zBKnmDjm/Whats-App-Image-2026-02-06-at-18-28-32.jpg",
  "https://i.postimg.cc/Y9Y1c23k/Whats-App-Image-2026-02-06-at-18-28-33.jpg",
  "https://i.postimg.cc/26h4pjwD/Whats-App-Image-2026-02-06-at-18-28-33-(1).jpg",
  "https://i.postimg.cc/xCMKrjR9/Whats-App-Image-2026-02-06-at-18-28-33-(2).jpg",
  "https://i.postimg.cc/nzBv8VkH/Whats-App-Image-2026-02-06-at-18-28-34.jpg",
  "https://i.postimg.cc/G2Gk03Qd/Whats-App-Image-2026-02-06-at-18-28-34-(1).jpg",
  "https://i.postimg.cc/0QDpg5fj/Whats-App-Image-2026-02-06-at-18-31-00.jpg",
  "https://i.postimg.cc/NMm1hG4M/Whats-App-Image-2026-02-06-at-18-31-00-(1).jpg",
  "https://i.postimg.cc/hPKrnYC9/file-00000000e60471f58c50702906fd22bb.webp",
  "https://i.postimg.cc/65B0KPHf/IMG-20240219-WA0237.webp",
  "https://i.postimg.cc/FsGxHxqS/IMG-20240219-WA0239.webp",
  "https://i.postimg.cc/FsGxHxqj/IMG-20240802-WA0121.webp",
  "https://i.postimg.cc/J4KQzQgj/IMG-20250127-WA0071.webp",
  "https://i.postimg.cc/3xRF4v5P/IMG-20250801-WA0127.webp",
  "https://i.postimg.cc/6p3f2vxB/IMG-20250801-WA0137-2.webp",
  "https://i.postimg.cc/2S67bZNj/IMG-20250801-WA0152-2.webp",
  "https://i.postimg.cc/DwZPJX30/IMG-20250801-WA0302.webp",
  "https://i.postimg.cc/3xcCgx3y/IMG-20250801-WA0344.webp",
  "https://i.postimg.cc/P5Rzm5dC/IMG-20250801-WA0354.webp",
  "https://i.postimg.cc/zGcSnGqn/IMG-20250801-WA0378.webp",
  "https://i.postimg.cc/13jcp3yK/IMG-20250801-WA0385.webp",
  "https://i.postimg.cc/Jz2cbzRq/IMG-20250801-WA0388.webp",
  "https://i.postimg.cc/BnVcxnJN/IMG-20250801-WA0406.webp",
  "https://i.postimg.cc/Njz71jQC/Screenshot-20240308-125456-Instagram-3.webp",
  "https://i.postimg.cc/ht5b9tK3/Screenshot-20240308-125558-Instagram-3.webp",
  "https://i.postimg.cc/k5RNwP5T/Screenshot-20241203-071659-Instagram-3.webp",
  "https://i.postimg.cc/VN094PNV/Screenshot-20241203-071941-Instagram-3.webp",
  "https://i.postimg.cc/5tQ5pWtr/Screenshot-20241229-183502-Instagram-2.webp",
  "https://i.postimg.cc/SKYLVbK3/Screenshot-20250106-132906-Instagram-2.webp",
  "https://i.postimg.cc/3w0j9Qws/Screenshot-20250108-195513-Instagram-2.webp",
  "https://i.postimg.cc/8Cfdwg5Q/Screenshot-20250110-213306-Instagram-2.webp",
  "https://i.postimg.cc/1zV0M1tQ/Screenshot-20250119-174545-Instagram-2.webp",
  "https://i.postimg.cc/hGQ8MRjS/Screenshot-20250119-180130-Instagram-2.webp",
  "https://i.postimg.cc/Ss06v120/Screenshot-20250122-085942-Instagram-2.webp",
  "https://i.postimg.cc/zBmCc2bY/Screenshot-20250126-101920-Instagram-2.webp",
  "https://i.postimg.cc/76v3WtGy/Screenshot-20250202-213351-Instagram-2.webp",
  "https://i.postimg.cc/G20F5g8b/Screenshot-20250202-213400-Instagram-2.webp",
  "https://i.postimg.cc/G20F5g8h/Screenshot-20250221-165727-Instagram-2.webp",
  "https://i.postimg.cc/Tw8V4NLw/Screenshot-20250221-165838-Instagram-2.webp",
  "https://i.postimg.cc/Tw8V4NLP/Screenshot-20250226-170459-Instagram-2.webp",
  "https://i.postimg.cc/nz84PSjm/Screenshot-20250228-184242-Instagram-2.webp",
  "https://i.postimg.cc/1txGj7n6/Screenshot-20250305-132553-Instagram-3.webp",
  "https://i.postimg.cc/1txGj7n0/Screenshot-20250309-084459-Instagram-2.webp",
  "https://i.postimg.cc/tTh3QdWY/Screenshot-20250310-092021-Instagram-2.webp",
  "https://i.postimg.cc/PxmWsbYY/Screenshot-20250330-180356-Instagram-2.webp",
  "https://i.postimg.cc/9MGd5PZy/Screenshot-20250404-102357-Instagram-2.webp",
  "https://i.postimg.cc/QtpQGg1k/Screenshot-20250404-102409-Instagram-2.webp",
  "https://i.postimg.cc/50wBd5LZ/Screenshot-20250421-203151-Instagram-2.webp",
  "https://i.postimg.cc/B6xT95Hr/Screenshot-20250424-084609-Instagram-2.webp",
  "https://i.postimg.cc/d3w8q7jW/Screenshot-20250424-172231-Instagram-2.webp",
  "https://i.postimg.cc/j2tzsW4G/Screenshot-20250506-185715-Instagram-2.webp",
  "https://i.postimg.cc/NFB1gyxB/Screenshot-20250723-180556-Instagram-2.webp",
  "https://i.postimg.cc/kGqxnVyn/Screenshot-20250801-183523-Whats-App-2.webp"
];

// Paleta sequencial
const paletteSequence = [
  COLORS.gold,      
  COLORS.teal,
  COLORS.terracotta,
  COLORS.wine
];

export const CATEGORIES: Category[] = categoryTitles.map((title, idx) => {
  const isEsculturas = title === "ESCULTURAS";
  const isTrofeus = title === "TROFÉUS";
  const isCopos = title === "COPOS TEMÁTICOS";
  
  // Configuração de produtos
  let products = [];
  let highlights = undefined;
  
  if (isTrofeus) {
    products = listaTrofeus.map((url, pIdx) => ({
      id: `trofeu-${pIdx}`,
      name: `Troféu Exclusivo ${pIdx + 1}`,
      image: url,
      fit: 'cover' as const
    }));
    highlights = trofeusDestaques; // Destaques novos de Troféus
  } else if (isCopos) {
    products = listaCopos.map((url, pIdx) => ({
      id: `copo-${pIdx}`,
      name: `Copo Temático ${pIdx + 1}`,
      image: url,
      fit: 'cover' as const
    }));
    highlights = coposDestaques; // Mantém destaques antigos para Copos
  } else if (isEsculturas) {
    products = listaEsculturas.map((url, pIdx) => ({
      id: `escultura-${pIdx}`,
      name: `Escultura Autoral ${pIdx + 1}`,
      image: url,
      fit: 'cover' as const
    }));
    highlights = esculturasDestaques; 
  } else {
    // PRATOS TEMÁTICOS
    products = listaPratos.map((url, pIdx) => ({
      id: `prato-${pIdx}`,
      name: `${title} - Peça ${pIdx + 1}`,
      image: url,
      fit: 'cover' as const
    }));
    highlights = pratosDestaques;
  }

  return {
    id: idx + 1,
    title,
    description: (isTrofeus || isEsculturas || isCopos)
      ? "" 
      : `Curadoria exclusiva dedicada à linha ${title.toLowerCase()}, trazendo sofisticação e personalidade para a mesa posta.`,
    colorCode: paletteSequence[idx % paletteSequence.length],
    products: products,
    highlights: highlights
  };
});

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Vocês trabalham com projetos sob medida?",
    answer: "Sim. Cada projeto pode ser desenvolvido do zero, respeitando conceito, espaço e intenção estética do cliente. Nossa equipe criativa atua desde o rascunho até a instalação final, garantindo que a peça seja uma extensão da arquitetura."
  },
  {
    question: "Qual o prazo médio de produção de uma escultura autoral?",
    answer: "O tempo é a matéria-prima da perfeição. Dependendo da complexidade e escala, oscilamos entre 4 a 12 semanas para garantir que cada detalhe reflita nossa excelência técnica e alma artística."
  },
  {
    question: "Como é feito o transporte de peças monumentais?",
    answer: "Possuímos logística especializada em obras de arte. Cada peça viaja em estruturas personalizadas com seguro total e rastreamento em tempo real, garantindo a integridade absoluta da obra."
  },
  {
    question: "As peças podem ser expostas em áreas externas?",
    answer: "Absolutamente. Desenvolvemos acabamentos específicos com proteção UV e resistência climática extrema para que a arte resista ao tempo e à natureza com a mesma beleza do primeiro dia."
  }
];
