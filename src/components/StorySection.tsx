import React from "react";
import "../styles/Story.css";
import { Image } from "react-bootstrap";

const StorySection: React.FC = () => {
  // Define la URL de la imagen aquí si es dinámica
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2Fperfil_2.webp?alt=media&token=39e52efc-32f4-4ed0-adb5-d7f77c4542e1"; // Reemplaza con la URL correcta

  return (
    <section className="our-story">
      <div className="container">
        <div className="row">
          <div className="description padding-right animate-left">
            <div className="global-headline">
              <h2 className="sub-headline">Descubre</h2>
              <h3 className="headline headline-dark">Mi Historia</h3>
              <div className="asterisk">
                <i className="fas fa-asterisk" aria-hidden="true"></i>
              </div>
            </div>
            <p className="description">
              Soy una pastelera y chocolatera apasionada por crear experiencias
              multisensoriales a través de cada una de mis creaciones. Con un
              amor profundo por los detalles y un enfoque en la innovación,
              transformó ingredientes simples en obras de arte comestibles. Mi
              misión es llevar a las personas a un viaje sensorial único con
              cada bocado, donde el sabor, la textura y la presentación se
              combinan para crear momentos inolvidables.
            </p>
            <a href="aboutme" className="btn btn-secondary">
              Leer Más
            </a>
          </div>
          <div className="image animate-right">
            <Image
              className="story-img"
              src={imageUrl}
              alt="Imagen de la historia"
              fluid
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
