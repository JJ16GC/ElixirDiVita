// src/components/Header.tsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Product } from "../types"; // Ajusta la ruta según corresponda
import { Image } from 'react-bootstrap';
import '../styles/Header.css';

interface HeaderProps {
  onCartClick: () => void;
  cartItems: Product[]; // Añade esta línea
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("show", isMenuOpen);

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
          <a href="/" className="">
            <Image className="logo-imagen" src="images/LGO - copia.webp" alt="image" fluid />
          </a>
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/aboutme"
                className={`nav-link ${
                  location.pathname === "/aboutme" ? "active" : ""
                }`}
              >
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                Acerca de nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/productos"
                className={`nav-link ${
                  location.pathname === "/productos" ? "active" : ""
                }`}
              >
                Productos
              </a>
            </li>
            <li className="icon nav-item">
              <a href="#" className="nav-link" onClick={onCartClick}>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{ fontSize: "2rem" }}
                />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
