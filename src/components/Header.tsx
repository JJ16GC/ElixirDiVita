import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="menu-toggle">
            

            <i className="fas fa-bars"><FontAwesomeIcon className="fa-bars" icon={faBars} /></i>
            <i className="fas fa-times"></i>
          </div>
          <a href="index.html" className="logo">
            Elixir Di Vita
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                Acerca de nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html#reservation" className="nav-link">
                Reservaciones
              </a>
            </li>
            <li className="nav-item">
              <a href="bakers.html" className="nav-link">
                Carrito
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
