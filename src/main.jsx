import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import { CarritoProvider } from './context/CarritoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Usa BrowserRouter aquí */}
    <CarritoProvider>
      <App />
    </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
