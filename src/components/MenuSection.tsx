import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import classNames from 'classnames';
import '../styles/MenuSection.css';

const MenuSection: React.FC = () => {
  const images = [
    "images/LGO - copia.webp",
    "images/LGO - copia.webp",
    "images/LGO - copia.webp",
    "images/LGO - copia.webp",
  ];

  return (
    <section className="menu">
      <Container>
        <Row>
          <Col md={6} className={classNames('image-group', 'padding-right', 'animate-left')}>
            {images.map((src, index) => (
              <Image key={index} src={src} alt={`Menu Item ${index + 1}`} fluid />
            ))}
          </Col>
          <Col md={6} className={classNames('description', 'animate-right')}>
            <div className="global-headline">
              <h2 className="sub-headline">Explora</h2>
              <h3 className="headline headline-dark">Menú</h3>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p>
              -- TEXTO --
            </p>
            <a href="/productos" className="btn btn-secondary">
              Ver Menú Completo
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
