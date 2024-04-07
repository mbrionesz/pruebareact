import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {
  const { carrito, incrementarCantidad, disminuirCantidad, eliminarDelCarrito } = useCarrito();

  // Calcular total
  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };


  return (
    <div className="carrito-container mt-4">
      <h2>Detalles del pedido:</h2>
      {carrito.length > 0 ? (
        carrito.map((item, index) => (
          <div key={index} className="carrito-item">
            <img src={item.img} alt={item.name} className="carrito-img" />
            <div>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)} x {item.quantity}</span>
              <div className="cantidad-controles">
                <button onClick={() => disminuirCantidad(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementarCantidad(item.id)}>+</button>
                <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <p className="total">Total: ${calcularTotal()}</p>
      <button className="btn btn-success btn-pago">Ir a Pagar</button>
    </div>
  );
};

export default Carrito;