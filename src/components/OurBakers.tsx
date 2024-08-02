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
    image: "images\\perfil.webp",
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
    <h3 className={styles.subtitle}>Sobre Mi</h3>
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
          <p className={styles.description}>Soy Laura Michelle Sierra Quiroga, una apasionada pastelera con estudios en LCI Bogotá, aunque mi viaje por la repostería comenzó hace varios años, recientemente descubrí mi pasión por la chocolatería.</p>
        </div>
      ))}
    </div>
  </div>
);

export default OurBakers;
