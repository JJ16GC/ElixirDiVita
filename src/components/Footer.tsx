import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAsterisk,
  faChevronUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <a href="#hero">
            <i className="fas fa-chevron-up">
              <FontAwesomeIcon icon={faChevronUp} />
            </i>
          </a>
        </div>
        <div className="footer__content">
          <div className="footer__content-about animate-top">
            <h4>Sobre ElixirDiVita</h4>
            <div className="asterisk">
              <i className="fas fa-asterisk">
                <FontAwesomeIcon icon={faAsterisk} />
              </i>
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
                  <a href="#"></a>
                  <i className="fab fa-facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter">
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="newsletter-container">
              <h4>Suscribete</h4>
              <form action="" className="newsletter-form">
                <div className="newsletter-form-box">
                  <input
                    type="text"
                    className="newsletter-input"
                    placeholder="Your email address..."
                  />
                  <button className="newsletter-btn" type="submit">
                    <i className="fas fa-envelope">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
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
