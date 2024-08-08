import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';
import { Product } from '../types'; // Ajusta la ruta según corresponda
import { Image } from 'react-bootstrap';
import classNames from 'classnames';
import '../styles/Header.css';

interface HeaderProps {
  onCartClick: () => void;
  cartItems: Product[];
}

const imageUrl = "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/images%2FLGO%20-%20copia.webp?alt=media&token=3a72b767-1e4d-474b-87c0-38d3efd47c70";

const preloadImage = (url: string) => {
  const img = new window.Image();
  img.src = url;
};

const Header: React.FC<HeaderProps> = React.memo(({ onCartClick, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const location = useLocation();

  useEffect(() => {
    preloadImage(imageUrl);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("show", isMenuOpen);

    return () => {
      document.body.classList.remove("show");
    };
  }, [isMenuOpen]);

  const NavList = useMemo(
    () => (
      <ul className={classNames('nav-list', { 'active': isMenuOpen })}>
        <li className="nav-item">
          <Link
            to="/"
            className={classNames('nav-link', { 'active': location.pathname === "/" })}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/aboutme"
            className={classNames('nav-link', { 'active': location.pathname === "/aboutme" })}
          >
            Sobre mi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={classNames('nav-link', { 'active': location.pathname === "/about" })}
          >
            Acerca de nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/productos"
            className={classNames('nav-link', { 'active': location.pathname === "/productos" })}
          >
            Productos
          </Link>
          
        </li>
        <li className="icon nav-item">
          <a href="#" className="nav-link" onClick={onCartClick} aria-label="View cart">
            <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '2rem' }} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </a>
        </li>
      </ul>
    ),
    [isMenuOpen, location.pathname, cartItems.length]
  );

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <Link to="/">
            <Image
              className="logo-imagen"
              src={imageUrl}
              alt="ElixirDiVita Logo"
              fluid
              height={100}
              loading="eager"
            />
          </Link>
          {NavList}
        </nav>
      </div>
    </header>
  );
});

export default Header;