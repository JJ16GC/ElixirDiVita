const StorySection = () => {
  return (
    <section className="our-story">
      <div className="container">
        <div className="row">
          <div className="description padding-right animate-left">
            <div className="global-headline">
              <h2 className="sub-headline">Descubre</h2>
              <h3 className="headline headline-dark">Nuestra Historia</h3>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p>
              Mi gusto por la chocolatería comenzó hace algunos años, pero me
              interés creció al participar en una clase especializada en
              bombones. Me quede asombrada por las infinitas posibilidades y la
              creatividad que este dulce arte permite. Desde entonces, me he
              dedicado a perfeccionar mis habilidades y experimentar diferentes
              combinaciones de sabores y texturas.
            </p>
            <a href="index.html" className="btn btn-secondary">
              Leer Mas
            </a>
          </div>
          <div className="image animate-right">
            <img className="story-img" src="images/story-img.jpg" alt="bread" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
