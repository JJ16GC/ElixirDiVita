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

  const navItems = useMemo(() => [
    { to: "/", label: "Home" },
    { to: "/aboutme", label: "Sobre mi" },
    { to: "/about", label: "Acerca de nosotros" },
    { to: "/productos", label: "Productos" }
  ], []);

  const NavList = useMemo(
    () => (
      <ul className={classNames('nav-list', { 'active': isMenuOpen })}>
        {navItems.map((item) => (
          <li className="nav-item" key={item.to}>
            <Link
              to={item.to}
              className={classNames('nav-link', { 'active': location.pathname === item.to })}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="icon nav-item">
          <button onClick={onCartClick} aria-label="View cart" className="nav-link cart-button">
            <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '2rem' }} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
        </li>
      </ul>
    ),
    [isMenuOpen, location.pathname, cartItems.length, navItems, onCartClick]
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
