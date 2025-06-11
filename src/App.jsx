import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-6 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md text-center shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-cyan-300">SafeTalk Wellness</h1>
        <p className="mb-8 text-lg text-gray-200">Guie suas emoções e conexões</p>
        <div className="space-y-4">
          <Link to="/checkin" className="block bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-full">Fazer Check-in</Link>
          <Link to="/chat" className="block bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full">Iniciar Conversa</Link>
          <Link to="/history" className="block bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-full">Ver Histórico</Link>
          <Link to="/support" className="block bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full">Conexão com Suporte</Link>
          <Link to="/presentation" className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full">Apresentação</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
