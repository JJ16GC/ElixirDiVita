// MenuSection.js
import { Container, Row, Col, Image } from 'react-bootstrap';

const MenuSection = () => {
    return (
        <section className="menu">
            <Container>
                <Row>
                    <Col md={6} className="image-group padding-right animate-left">
                        <Image src="images/square-1.jpg" alt="image" fluid />
                        <Image src="images/square-2.jpg" alt="image" fluid />
                        <Image src="images/square-3.jpg" alt="image" fluid />
                        <Image src="images/square-4.jpg" alt="image" fluid />
                    </Col>
                    <Col md={6} className="description animate-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">Explore</h2>
                            <h3 className="headline headline-dark">Menu</h3>
                            <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                            accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
                        <a href="index.html" className="btn btn-secondary">See Full Menu</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MenuSection;
