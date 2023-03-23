import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import CarroProvider from "./context/CarroContext";
import FavoritosProvider from "./context/FavoritosContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FavoritosProvider>
        <CarroProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CarroProvider>
      </FavoritosProvider>
  </React.StrictMode>
);