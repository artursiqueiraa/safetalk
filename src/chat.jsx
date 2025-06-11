import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = () => {
    const suggestions = {
      feliz: 'Que bom! Que tal compartilhar algo positivo hoje?',
      triste: 'Sinto muito. Quer conversar sobre o que aconteceu?',
      ansioso: 'Respire fundo. Posso sugerir uma técnica de relaxamento?',
    };
    setResponse(suggestions[message.toLowerCase()] || 'Diga como você está se sentindo!');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Iniciar Conversa</h2>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite seu humor ou mensagem"
          className="w-full p-2 mb-4 bg-purple-800 text-white rounded-lg"
        />
        <button
          onClick={handleChat}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full transition"
        >
          Enviar
        </button>
        {response && <p className="mt-4 text-white">{response}</p>}
      </div>
    </div>
  );
};

export default Chat;
