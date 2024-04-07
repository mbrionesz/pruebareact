import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home'; 
import Carrito from './views/Carrito'; 
import DetallePizzas from './components/DetallePizzas';
import Navigation from './components/Navigation';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DetallePizzas />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;
