// Contexto del Carrito (CarritoContext.js)
import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pizza) => {
    setCarrito((currentCarrito) => {
      // Encuentra si la pizza ya está en el carrito
      const isPizzaInCart = currentCarrito.find(( item) => item.id === pizza.id);
  
      if (isPizzaInCart) {
        // Incrementa la cantidad si ya está en el carrito
        return currentCarrito.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Añade la pizza al carrito con cantidad de 1
        return [...currentCarrito, { ...pizza, quantity: 1 }];
      }
    });
  };
  
  const incrementarCantidad = (pizzaId) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
const disminuirCantidad = (pizzaId) => {
  setCarrito((carritoActual) =>
    carritoActual.map((item) =>
      item.id === pizzaId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    )
  );
};

  const valorDelContexto = {
    carrito,
    agregarAlCarrito,
    incrementarCantidad,
    disminuirCantidad,
  };

  return (
    <CarritoContext.Provider value={valorDelContexto}>
      {children}
    </CarritoContext.Provider>
  );
};
