import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/MyComponent.module.css";

const content1 =
  "Soy Laura Michelle Sierra Quiroga, una apasionada pastelera con estudios en LCI Bogotá, aunque mi viaje por la repostería comenzó hace varios años, recientemente descubrí mi pasión por la chocolatería.";
const content2 =
  "Desde niña siempre me fascinó la magia de la cocina, especialmente la repostería. Esta pasión me llevo a seguir mis sueños y realizar estudios en pastelería francesa y panadería. A lo largo de mis estudios, exploré diversas técnicas y estilos, pero fue el arte de trabajar con chocolate lo que realmente capturó mi corazón.";
const content3 =
  "Mi gusto por la chocolatería comenzó hace algunos años, pero mi interés creció al participar en una clase especializada en bombones. Me quedé asombrada por las infinitas posibilidades y la creatividad que este dulce arte permite. Desde entonces, me he dedicado a perfeccionar mis habilidades y experimentar.";
const content4 =
  "En mi chocolatería, cada bombón es una pequeña obra de arte, diseñada para ofrecer una experiencia sensorial única. Utilizo ingredientes de alta calidad y técnicas innovadoras para crear bombones que no son solo deliciosos, sino también visualmente impresionantes. Ya sea que busques un regalo especial o un capricho personal, mis bombones están hechos para sorprender y deleitar.";
const content5 =
  "Me encuentro emocionada de compartir mi pasión por el chocolate contigo. Sígueme en mis redes sociales para ver mis últimas creaciones, suscríbete a mi boletín para recibir una guía de maridaje sobre la mejor combinación para mis bombones, o visita la tienda en línea para descubrir y disfrutar de este dulce arte. Gracias por acompañarme en este dulce viaje. Espero que disfrutes de cada bocado tanto como yo disfruto creándolos.";

const news = [
  { id: 1, title: "Sobre Mi", content: [content1] },
  { id: 2, title: "Historia", content: [content2] },
  { id: 3, title: "Descubrimiento", content: [content3] },
  { id: 4, title: "Lo que ofrezco", content: [content4] },
  { id: 5, title: "Contactate Conmigo", content: [content5] },
];

export const MyComponent = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(news[0].id);

  const handleAccordionClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          className="imgs"
          src="https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2Fperfil_laura.webp?alt=media&token=78c7232d-3a60-4bde-9b99-2bb2b96dd974"
          alt="Descripción de la imagen"
        />
      </div>
      <div className={styles.accordionSection}>
        {news.map(({ id, title, content }) => (
          <div key={id}>
            <h2
              className={`${styles.accordionTitle} ${
                openItemId === id ? styles.active : ""
              }`}
              onClick={() => handleAccordionClick(id)}
              role="button"
              aria-expanded={openItemId === id}
              aria-controls={`content-${id}`}
              id={`title-${id}`}
            >
              {title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${styles.icon} ${
                  openItemId === id ? styles.rotate : ""
                }`}
              />
            </h2>
            <div
              className={`${styles.accordionContent} ${
                openItemId === id ? styles.active : ""
              }`}
              id={`content-${id}`}
              aria-labelledby={`title-${id}`}
              role="region"
            >
              {content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
