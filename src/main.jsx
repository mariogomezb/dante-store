import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import CarroProvider from "./context/CarroContext";
import FavoritosProvider from "./context/FavoritosContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarroProvider>
      <FavoritosProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritosProvider>
    </CarroProvider>
  </React.StrictMode>
);