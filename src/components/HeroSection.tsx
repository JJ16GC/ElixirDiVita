import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="headline">Explosión de sabor en cada bocado</h1>
        <Link to="/productos" className="btn btn-primary" aria-label="Order Now" title="Order Now">
          Ordena Ahora
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
