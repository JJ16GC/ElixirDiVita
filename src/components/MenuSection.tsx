import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import classNames from "classnames";
import "../styles/MenuSection.css";

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
          <Col
            md={6}
            className={classNames(
              "image-group",
              "padding-right",
              "animate-left"
            )}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Menu Item ${index + 1}`}
                fluid
              />
            ))}
          </Col>
          <Col md={6} className={classNames("description", "animate-right")}>
            <div className="global-headline">
              <h2 className="sub-headline">Explora</h2>
              <h3 className="headline headline-dark">Menú</h3>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p>
              Sumérgete en un mundo de sabores y texturas con nuestros bombones
              de chocolate artesanales. Cada pieza está cuidadosamente elaborada
              para ofrecer una experiencia sensorial única, combinando chocolate
              de la más alta calidad con rellenos sorprendentes y creativos.
              Explora nuestro menú y encuentra la combinación perfecta que
              despertará todos tus sentidos.
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
