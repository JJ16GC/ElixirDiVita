// src/components/Header.tsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartModal from './CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: 'Chocolate A', price: 10000, quantity: 2 },
    { id: 2, name: 'Chocolate B', price: 15000, quantity: 1 },
  ]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setShowCart(!showCart);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("show");
    } else {
      document.body.classList.remove("show");
    }

    return () => {
      document.body.classList.remove("show");
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <a href="/" className="logo">
            Elisir Di Vita
          </a>
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                Acerca de nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="/productos" className="nav-link">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={toggleCart}>
                Carrito
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <CartModal show={showCart} handleClose={toggleCart} cartItems={cartItems} />
    </header>
  );
};

export default Header;
