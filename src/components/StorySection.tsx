import '../styles/Story.css'

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
              -- TEXTO --
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
