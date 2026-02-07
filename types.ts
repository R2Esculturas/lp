
export interface Product {
  id: number;
  name: string;
  image: string;
  fit?: 'cover' | 'contain';
}

export interface Category {
  id: number;
  title: string;
  description?: string;
  highlights?: string[];
  products: Product[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
