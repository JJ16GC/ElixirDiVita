import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/OurBakers.module.css";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const bakers = [
  {
    name: "Laura Michelle Sierra Quiroga",
    image: "images\\perfil.png",
    social: {
      facebook: "#",
      twitter: "https://wa.me/+573173807044",
      instagram: "https://www.instagram.com/elisirdivitachocolateria/",
    },
  },
];

const OurBakers = () => (
  <div className={styles.bakersContainer}>
    <h2 className={styles.title}>Descubre</h2>
    <h3 className={styles.subtitle}>Nuestra Historia</h3>
    <div className={styles.bakersGrid}>
      {bakers.map((baker) => (
        <div className={styles.bakerCard} key={baker.name}>
          <img
            className={styles.bakerImage}
            src={baker.image}
            alt={baker.name}
          />
          <p className={styles.bakerName}>{baker.name}</p>
          <div className={styles.socialLinks}>
            <a className={styles.socialIcon} href={baker.social.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className={styles.socialIcon} href={baker.social.twitter}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a className={styles.socialIcon} href={baker.social.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className={styles.description}>Desde niña siempre me fascinó la magia de la cocina, especialmente la repostería. Esta pasión me llevo a seguir mis sueños y realizar un diplomado de pastelería francesa, además de ello me inscribí en una escuela para realizar un técnico y especializarme un poco mas en lo que me gusta, estando así a poco de graduarme. A lo largo de mis estudios, exploré diversas técnicas y estilos, pero fue el arte de trabajar con chocolate lo que realmente capturó mi corazón.</p>
        </div>
      ))}
    </div>
  </div>
);

export default OurBakers;
