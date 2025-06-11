import React, { useState } from 'react';

const Checkin = () => {
  const [mood, setMood] = useState('');

  const handleCheckin = () => {
    if (mood) {
      alert(`Check-in registrado: Você está se sentindo ${mood}!`);
      setMood('');
    } else {
      alert('Por favor, selecione um humor!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl text-cyan-300 mb-4">Fazer Check-in</h2>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 mb-4 bg-purple-800 text-white rounded-lg"
        >
          <option value="">Selecione seu humor</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
          <option value="ansioso">Ansioso</option>
          <option value="calmo">Calmo</option>
        </select>
        <button
          onClick={handleCheckin}
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-full transition"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Checkin;
