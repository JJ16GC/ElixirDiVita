import React from "react";
import styles from "../styles/OurBakers.module.css";

const Our: React.FC = () => (
  <div className={styles.container}>
    {/* Visión */}
    <div className={styles.textSection}>
      <h2 className={styles.title}>Visión</h2>
      <h3 className={styles.subtitle}>Para finales de 2025</h3>
      <p className={styles.description}>
        Habremos establecido nuestra primera tienda física en Bogotá, Colombia,
        posicionándonos como un referente en la creación de experiencias
        sensoriales con chocolates. Acercando nuestras innovadoras propuestas
        gastronómicas a un público más amplio.
      </p>
    </div>
    
    {/* Imagen correspondiente a Visión */}
    <div className={styles.imageSection}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2Fvision.webp?alt=media&token=ac7144d1-a60c-4435-bc5f-99f0f65775a9"
        alt="Imagen superior izquierda"
        className={styles.image}
      />
    </div>
    
    {/* Misión */}
    <div className={styles.textSection}>
      <h2 className={styles.title}>Misión</h2>
      <h3 className={styles.subtitle}>Nos dedicamos a crear experiencias sensoriales</h3>
      <p className={styles.description}>
        A través de nuestros
        bombones de chocolate, combinando lo tradicional con la innovación,
        ofreciendo una variedad de rellenos líquidos y sensaciones únicas.
        Nuestra misión es deleitar a nuestros clientes con cada bocado. Queremos
        que cada bombón sea una pequeña joya que se disfrute plenamente.
      </p>
    </div>
    
    {/* Imagen correspondiente a Misión */}
    <div className={styles.imageSection}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2Fmision.webp?alt=media&token=47cacba9-9358-48fa-986b-2c61c47a089f"
        alt="Imagen inferior izquierda"
        className={styles.image}
      />
    </div>
  </div>
);

export default Our;
