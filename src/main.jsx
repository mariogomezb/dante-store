import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import CarroProvider from "./context/CarroContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarroProvider>
  </React.StrictMode>
);