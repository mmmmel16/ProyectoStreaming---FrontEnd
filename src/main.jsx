import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import App from './App';
import Studio from './layouts/Studio';
import Vivo from './layouts/vivo';
import Home from './layouts/home';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/vivo" element={<Vivo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
