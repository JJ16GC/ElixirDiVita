import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import classNames from "classnames";
import "../styles/MenuSection.css";

const MenuSection: React.FC = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FMosaico-2.webp?alt=media&token=b01f3c33-468a-4bff-8f65-5ec571f9d8ba",
    "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FMosaico-3.webp?alt=media&token=d286e69c-5d63-400e-8fde-82d7cb0be403",
    "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FMosaico-1.webp?alt=media&token=2f4b41a6-0625-4ed9-802d-b8d56aff2a9e",
    "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2FMosaico4.webp?alt=media&token=f4e72e0d-2b08-4e51-afd4-a02c85c0be5d",
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
