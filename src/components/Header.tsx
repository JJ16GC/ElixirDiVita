import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import '../styles/header.css'


interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
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
          <a href="/" className="logo">
            Elisir Di Vita
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
              <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: "2rem" }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
