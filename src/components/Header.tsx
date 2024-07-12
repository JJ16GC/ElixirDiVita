import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("show");
    } else {
      document.body.classList.remove("show");
    }
    // Cleanup function to remove class on component unmount
    return () => {
      document.body.classList.remove("show");
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </i>
            <i className="fas fa-times">
            <FontAwesomeIcon icon={faXmark} />
            </i>
          </div>
          <a href="index.html" className="logo">
            Elixir Di Vita
          </a>
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                Acerca de nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html#reservation" className="nav-link">
                Reservaciones
              </a>
            </li>
            <li className="nav-item">
              <a href="bakers.html" className="nav-link">
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
