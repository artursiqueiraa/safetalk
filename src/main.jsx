import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Checkin from './checkin.jsx';
import Chat from './chat.jsx';
import History from './historico.jsx';
import Support from './suporte.jsx';
import PresentationScreen from './apresentacao.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/history" element={<History />} />
        <Route path="/support" element={<Support />} />
        <Route path="/presentation" element={<PresentationScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
