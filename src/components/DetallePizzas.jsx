import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const DetallePizzas = () => {
  const { id } = useParams(); // Obtiene el id de la URL.
  const [pizza, setPizza] = useState(null); // Estado inicial para la pizza seleccionada.
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    // Realiza la solicitud fetch para obtener los datos del JSON.
    fetch('/pizzas.json') // Asegúrate de que la URL coincida con la ubicación de tu archivo.
      .then((response) => response.json()) // Convierte la respuesta en JSON.
      .then((data) => {
        // Encuentra la pizza específica por su id.
        const pizzaDetallada = data.find((p) => p.id === id);
        setPizza(pizzaDetallada); // Actualiza el estado con los datos de la pizza.
      })
      .catch((error) => {
        console.error('Error al cargar el archivo JSON:', error);
    });
  }, [id]); // Dependencia del efecto, para reaccionar a cambios en el id.

  // Contenido del componente y manejo de estados de carga o datos faltantes.
  if (pizza === null) {
    return <div>Cargando...</div>;
  } else if (pizza === undefined) {
    return <div>Pizza no encontrada.</div>;
  }

  // Renderiza los detalles de la pizza seleccionada.
  return (
    <div className="pizza-detail-container">
      <img src={pizza.img} alt={`Pizza de ${pizza.name}`} className="pizza-image" />
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="price">Precio: ${pizza.price}</p>
        <button className="btn btn-primary" onClick={() => agregarAlCarrito(pizza)}>Añadir 🛒</button>
      </div>
    </div>
  );
};

export default DetallePizzas;

  