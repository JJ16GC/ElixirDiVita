import { Container, Row, Col, Image } from "react-bootstrap";

const MenuSection = () => {
  return (
    <section className="menu">
      <Container>
        <Row>
          <Col md={6} className="image-group padding-right animate-left">
            <Image src="images/bombones.webp" alt="image" fluid />
            <Image src="images/bombones.webp" alt="image" fluid />
            <Image src="images/bombones.webp" alt="image" fluid />
            <Image src="images/bombones.webp" alt="image" fluid />
          </Col>
          <Col md={6} className="description animate-right">
            <div className="global-headline">
              <h2 className="sub-headline">Explora</h2>
              <h3 className="headline headline-dark">Menu</h3>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p>
              En mi chocolatería, cada bombón es una pequeña obra de arte,
              diseñada para ofrecer una experiencia sensorial única. Utilizo
              ingredientes de alta calidad y técnicas innovadoras para crear
              bombones que no son solo deliciosos, sino también visualmente
              impresionantes. Ya sea que busques un regalo especial o un
              capricho personal, mis bombones están hechos para sorprender y
              deleitar.
            </p>
            <a href="/productos" className="btn btn-secondary">
              Ver Menu Completo
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
