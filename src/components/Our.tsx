import styles from "../styles/OurBakers.module.css";

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

const Our = () => (
  <div className={styles.bakersContainer}>
    <h2 className={styles.title}>Misión</h2>
    <h3 className={styles.subtitle}>Nos dedicamos a crear experiencias sensoriales</h3>
    <div className={styles.bakersGrid}>
      {bakers.map((baker) => (
        <div className={styles.bakerCard} key={baker.name}>
          <p className={styles.description2}>
            A través de nuestros
            bombones de chocolate, combinando lo tradicional con la innovación,
            ofreciendo una variedad de rellenos líquidos y sensaciones únicas.
            Nuestra misión es deleitar a nuestros clientes con cada bocado,
            queremos que cada bombón sea una pequeña joya que se disfrute
            plenamente.
          </p>
        </div>
      ))}
    </div>
    <h2 className={styles.title}>Visión</h2>
    <h3 className={styles.subtitle}>Para finales de 2025</h3>
    <div className={styles.bakersGrid}>
      {bakers.map((baker) => (
        <div className={styles.bakerCard} key={baker.name}>
          <p className={styles.description2}>
            Habremos establecido nuestra primera tienda
            física en Bogotá-Colombia, posicionándonos como un referente en la
            creación de experiencias sensoriales con chocolates. Acercando
            nuestras innovadoras propuestas gastronomicas a un público más
            amplio.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Our;
