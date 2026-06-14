import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Configuração do WhatsApp
    const phoneNumber = "5511984987888";
    
    // Construção da mensagem
    // Começa com a frase solicitada
    let text = "Olá, gostaria de mais informações";

    // Enriquece a mensagem se o usuário preencheu os campos, mantendo o tom profissional
    if (formData.name) {
      text += `. Me chamo *${formData.name}*.`;
    }
    
    if (formData.message) {
      text += `\n\nSobre o projeto: ${formData.message}`;
    }

    if (formData.email) {
      text += `\n\nMeu contato de email: ${formData.email}`;
    }

    // Dispara evento de Lead para o Meta Pixel (otimização de campanha)
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }

    // Codifica para URL e redireciona
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-none overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
          
          {/* Coluna da Imagem */}
          {/* FIX MOBILE: Removido aspect-[3/4] e posicionamento absoluto no mobile. Agora usa h-auto. */}
          <div className="w-full lg:aspect-auto lg:w-5/12 relative lg:min-h-full bg-gray-50">
            <img 
              src="https://i.postimg.cc/HxnsR05J/formulario.webp" 
              alt="Inspiração artística" 
              // FIX MOBILE: h-auto garante altura natural. lg:absolute retoma o comportamento 'cover' no desktop.
              className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover object-center"
              loading="lazy"
              width={600}
              height={800}
            />
          </div>
          
          {/* Coluna do Formulário */}
          <div className="lg:w-7/12 p-10 lg:p-16 bg-white">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D97706] mb-4 block">Projetos 100% personalizados</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-10 text-gray-900">Solicite seu Orçamento</h2>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative border-b border-gray-200 py-2 focus-within:border-[#D97706] transition-colors">
                  <label className="text-[9px] font-bold tracking-widest uppercase text-gray-600 block mb-1">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-900 focus:outline-none font-light placeholder:text-gray-300" 
                    placeholder="Seu nome completo" 
                    required
                  />
                </div>
                <div className="relative border-b border-gray-200 py-2 focus-within:border-[#D97706] transition-colors">
                  <label className="text-[9px] font-bold tracking-widest uppercase text-gray-600 block mb-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-900 focus:outline-none font-light placeholder:text-gray-300" 
                    placeholder="art@email.com" 
                  />
                </div>
              </div>
              
              <div className="relative border-b border-gray-200 py-2 focus-within:border-[#D97706] transition-colors">
                <label className="text-[9px] font-bold tracking-widest uppercase text-gray-600 block mb-1">WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 focus:outline-none font-light placeholder:text-gray-300" 
                  placeholder="(11) 99999-9999" 
                />
              </div>

              <div className="relative border-b border-gray-200 py-2 focus-within:border-[#D97706] transition-colors">
                <label className="text-[9px] font-bold tracking-widest uppercase text-gray-600 block mb-1">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent text-gray-900 focus:outline-none font-light placeholder:text-gray-300 resize-none"
                  placeholder="Conte-nos sobre o seu espaço ou conceito..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-5 bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center transition-all duration-500 shadow-xl active:scale-[0.98] group mt-4"
              >
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase -mr-[0.6em] transition-all group-hover:tracking-[0.8em] group-hover:-mr-[0.8em]">
                  Enviar via WhatsApp
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
