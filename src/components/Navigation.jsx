import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

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
          {/* Si tienes una ruta para promociones o alguna otra vista, puedes añadir más NavLinks aquí */}
          <NavLink
            to="/carrito"
            className={setActiveClass}
            style={({ isActive }) => (isActive ? { color: "white" } : {})}
          >
            Carrito
          </NavLink>
          {/* Puedes añadir otros enlaces según las necesidades de tu aplicación */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
