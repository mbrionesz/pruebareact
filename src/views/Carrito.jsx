import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {
  const { carrito, incrementarCantidad, disminuirCantidad } = useCarrito();

  // Calcular total
  const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div>
      <h2>Detalles del pedido:</h2>
      {carrito.length > 0 ? (
        carrito.map((item, index) => (
          <div key={index} className="carrito-item">
            <img src={item.img} alt={item.name} className="carrito-img" />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)} x {item.quantity}</span>
            <div>
              <button onClick={() => disminuirCantidad(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementarCantidad(item.id)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <p>Total: ${total}</p>
      {/* Botón de pago aquí */}
    </div>
  );
};

export default Carrito;