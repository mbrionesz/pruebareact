import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useCarrito } from '../context/CarritoContext';

const Catalogo = () => {
  const [pizzas, setPizzas] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch('/pizzas.json')
      .then((response) => response.json())
      .then(setPizzas)
      .catch((error) => console.error("Error al cargar las pizzas:", error));
  }, []);

  return (
    <>
    <header className="banner text-center bg-light py-3 mb-4">
      <h1 className="banner-title">¡Pizzería Mamma Mia!</h1>
      <p className="banner-subtitle">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
    <div className="container-fluid mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-3" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} alt={pizza.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.desc}</p>
                <ul className="list-group list-group-flush">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li className="list-group-item" key={index}>{ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="price">${pizza.price.toLocaleString()}</span>
                  <div>
                    <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">Ver Más</Link>
                    <button className="btn btn-warning ml-2" onClick={() => agregarAlCarrito(pizza)}>Añadir 🛒</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
};

export default Catalogo;
