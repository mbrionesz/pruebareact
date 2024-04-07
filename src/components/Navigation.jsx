import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCarrito } from '../context/CarritoContext';

export default function Navigation() {
  const setActiveClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  const { carrito } = useCarrito(); // Usar el contexto del carrito para obtener los artículos
  const totalItems = carrito.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <div className="container-fluid">
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand as={NavLink} to="/">Pizzería Mamma Mia!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            to="/"
            className={setActiveClass}
            style={({ isActive }) => (isActive ? { color: "white" } : {})}
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/carrito"
            className={setActiveClass}
            style={({ isActive }) => (isActive ? { color: "white" } : {})}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Carrito ({totalItems}) Carrito
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
