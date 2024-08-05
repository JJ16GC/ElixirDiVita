import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/OurStory.css'

const OurStory = () => {
    return (
        <section className="our-story">
            <Container>
                <Row>
                    <Col md={6} className="description padding-right animate-left">
                        <div className="global-headline">
                            <h2 className="sub-headline">Descubre</h2>
                            <h3 className="headline headline-dark">Nuestra Historia</h3>
                            <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                            accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
                        <a href="index.html" className="btn btn-secondary">Aprende Mas</a>
                    </Col>
                    <Col md={6} className="image animate-right">
                        <Image src="images/story-img.jpg" alt="bread" fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurStory;
