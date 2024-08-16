import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAsterisk,
  faChevronUp,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
        <a href="/" aria-label="Volver al inicio de la página">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
        <div className="footer__content">
          <div className="footer__content-about animate-top">
            <h4>Sobre ElixirDiVita</h4>
            <div className="asterisk">
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              unde accusantium sit repudiandae incidunt quod eius recusandae
              blanditiis voluptates consectetur?
            </p>
          </div>
          <div className="footer__content-divider animate-bottom">
            <div className="social-media">
              <h4>Siguenos</h4>
              <ul className="social-icons">
                <li>
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elisirdivitachocolateria/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+573173807044" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a href="mailto:elisirdivitachocolateria@gmail.com" 
                    aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@elisirdivitachocolateria" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Tiktok">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="newsletter-container">
              <h4>Suscribete</h4>
              <form action="" className="newsletter-form">
                <div className="newsletter-form-box">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Tu dirección de correo electrónico..."
                    aria-label="Email address"
                  />
                  <button className="newsletter-btn" type="submit" aria-label="Suscribirse al boletín">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
