import React, { useState } from 'react';

const Support = () => {
  const [name, setName] = useState('');

  const handleSupport = () => {
    if (name) {
      alert(`Solicitação enviada por ${name}! Um suporte entrará em contato em breve.`);
      setName('');
    } else {
      alert('Por favor, insira seu nome!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Conexão com Suporte</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full p-2 mb-4 bg-purple-800 text-white rounded-lg"
        />
        <button
          onClick={handleSupport}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition"
        >
          Solicitar Suporte
        </button>
      </div>
    </div>
  );
};

export default Support;
