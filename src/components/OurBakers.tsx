import styles from "../styles/MyComponent.module.css";

const sections = [
  {
    id: 1,
    title: "Sobre Mi",
    content: "Soy Laura Michelle Sierra Quiroga, una apasionada pastelera con estudios en LCI Bogotá, aunque mi viaje por la repostería comenzó hace varios años, recientemente descubrí mi pasión por la chocolatería.",
  },
  {
    id: 2,
    title: "Historia",
    content: "Desde niña siempre me fascinó la magia de la cocina, especialmente la repostería. Esta pasión me llevo a seguir mis sueños y realizar estudios en pastelería francesa y panadería. A lo largo de mis estudios, exploré diversas técnicas y estilos, pero fue el arte de trabajar con chocolate lo que realmente capturó mi corazón.",
  },
  {
    id: 3,
    title: "Descubrimiento",
    content: "Mi gusto por la chocolatería comenzó hace algunos años, pero mi interés creció al participar en una clase especializada en bombones. Me quedé asombrada por las infinitas posibilidades y la creatividad que este dulce arte permite. Desde entonces, me he dedicado a perfeccionar mis habilidades y experimentar.",
  },
  {
    id: 4,
    title: "Lo que ofrezco",
    content: "En mi chocolatería, cada bombón es una pequeña obra de arte, diseñada para ofrecer una experiencia sensorial única. Utilizo ingredientes de alta calidad y técnicas innovadoras para crear bombones que no son solo deliciosos, sino también visualmente impresionantes. Ya sea que busques un regalo especial o un capricho personal, mis bombones están hechos para sorprender y deleitar.",
  },
  {
    id: 5,
    title: "Contáctate Conmigo",
    content: "Me encuentro emocionada de compartir mi pasión por el chocolate contigo. Sígueme en mis redes sociales para ver mis últimas creaciones, suscríbete a mi boletín para recibir una guía de maridaje sobre la mejor combinación para mis bombones, o visita la tienda en línea para descubrir y disfrutar de este dulce arte. Gracias por acompañarme en este dulce viaje. Espero que disfrutes de cada bocado tanto como yo disfruto creándolos.",
  },
];

export const MyComponent = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/elixir-2c248.appspot.com/o/Pagina%2Fperfil_laura.webp?alt=media&token=6e2de736-eb26-4c9e-8d29-5d80de0c9c9e"
          alt="Descripción de la imagen"
          className={styles.image}
        />
      </div>
      <div className={styles.textSection}>
        {sections.slice(0, 2).map((section) => (
          <div key={section.id} className={styles.section}>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.content}>{section.content}</p>
          </div>
        ))}
      </div>
      <div className=''>
        {sections.slice(2).map((section) => (
          <div key={section.id} className={styles.section}>
            <h2 className={styles.title}>{section.title}</h2>
            <p className={styles.content}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};