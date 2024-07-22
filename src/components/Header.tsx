// src/components/Header.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onCartClick: () => void;
  cartItems: { id: number, name: string, price: number, quantity: number }[];
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  React.useEffect(() => {
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
              <a href="#" className="nav-link" onClick={onCartClick}>
                Carrito
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
