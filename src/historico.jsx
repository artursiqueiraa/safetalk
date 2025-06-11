import React from 'react';

const History = () => {
  const history = [
    { date: '10/06/2025', mood: 'feliz' },
    { date: '09/06/2025', mood: 'triste' },
    { date: '08/06/2025', mood: 'calmo' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl text-cyan-300 mb-4">Ver Histórico</h2>
        <ul className="text-white">
          {history.map((entry, index) => (
            <li key={index} className="mb-2">{`${entry.date}: ${entry.mood}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
