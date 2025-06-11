import React, { useState } from 'react';

const PresentationScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bem-vindo ao SafeTalk Wellness",
      content: "Um aplicativo dedicado ao cuidado emocional e à conexão humana, criado para ajudar você a monitorar seu humor e buscar suporte quando necessário.",
    },
    {
      title: "Funcionalidades Principais",
      content: (
        <ul className="list-disc list-inside text-left">
          <li>Check-in de Humor: Registre e reflita sobre como você se sente.</li>
          <li>Conversa: Interaja com sugestões personalizadas.</li>
          <li>Histórico: Acompanhe sua jornada emocional.</li>
          <li>Suporte: Conecte-se com terapeutas ou grupos.</li>
        </ul>
      ),
    },
    {
      title: "Design e Experiência",
      content: "Com um visual neon moderno e intuitivo, o SafeTalk oferece uma interface envolvente e fácil de usar, inspirada em gradientes e animações suaves.",
    },
    {
      title: "Benefícios e Impacto",
      content: "Promove o bem-estar mental, ajuda a identificar gatilhos emocionais e oferece suporte acessível, impactando positivamente sua qualidade de vida.",
    },
    {
      title: "Conclusão",
      content: "Obrigado por explorar o SafeTalk Wellness! Estamos aqui para apoiar sua jornada emocional. Volte sempre!",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">{slides[currentSlide].title}</h2>
        <div className="mb-6 text-lg">{slides[currentSlide].content}</div>
        <div className="flex justify-between">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="bg-cyan-500 py-2 px-4 rounded-full">Anterior</button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="bg-purple-600 py-2 px-4 rounded-full">Próximo</button>
        </div>
        <p className="mt-4 text-sm text-gray-300">Slide {currentSlide + 1} de {slides.length}</p>
      </div>
    </div>
  );
};

export default PresentationScreen;
