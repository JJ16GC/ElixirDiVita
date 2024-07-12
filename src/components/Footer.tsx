const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <a href="#hero"><i className="fas fa-chevron-up"></i></a>
        </div>
        <div className="footer__content">
          <div className="footer__content-about animate-top">
            <h4>About Bakery</h4>
            <div className="asterisk"><i className="fas fa-asterisk"></i></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde accusantium sit repudiandae incidunt quod eius recusandae blanditiis voluptates consectetur?</p>
          </div>
          <div className="footer__content-divider animate-bottom">
            <div className="social-media">
              <h4>Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="newsletter-container">
              <h4>Newsletter</h4>
              <form action="" className="newsletter-form">
                <div className="newsletter-form-box">
                  <input type="text" className="newsletter-input" placeholder="Your email address..." />
                  <button className="newsletter-btn" type="submit">
                    <i className="fas fa-envelope"></i>
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
