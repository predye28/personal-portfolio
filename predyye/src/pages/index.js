  import React from "react";
  import "../style/Style.css";
  import { StaticImage } from "gatsby-plugin-image";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  
  const IndexPage = () => (
    <main>
      <Header />

      <section id="draw" className="draw-section">
        <div className="draw-container">
          <StaticImage
            src="../images/flor izquierda.jpg"
            alt="Flor izquierda"
            className="draw-flower-left"
            placeholder="blurred"
            layout="fixed"
            width={250}
          />
          <section id="about" className="section about-section">
            <h1 className="section-title">Hi, Omar here.</h1>
            <StaticImage
              src="../images/perfil.jpeg"
              alt="Foto de perfil"
              className="perfil-logo"
              placeholder="blurred"
              layout="fixed"
              width={250}
              quality={100}
            />
            <h2 className="section-subtitle">I create things every day.</h2>
            <p className="section-paragraph">
              Hi! I’m Omar Madrigal, a final-year Computer Engineering student at the Instituto Tecnológico de Costa Rica,
              passionate about real-world projects that create positive impacts through technology. I’m especially interested in artificial intelligence and its potential to drive meaningful change.
            </p>
            <p className="section-paragraph">
              Outside of academics, I enjoy drawing, weightlifting, exploring nature, and spending quality time with family and friends.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={90}
                />
              </a>
              <a href="https://github.com/predye28" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/github.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={90}
                />
              </a>
              <a href="https://www.instagram.com/predyye/" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/instagram.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={90}
                />
              </a>
            </div>
          </section>
          <StaticImage
            src="../images/flor derecha.jpg"
            alt="Flor derecha"
            className="draw-flower-right"
            placeholder="blurred"
            layout="fixed"
            width={250}
          />
        </div>
      </section>


      <section id= "skills" className="section">
        <h3 className="section-title">Skills</h3>
        <p className="section-paragraph">
          python
          JavaScript (y frameworks como Node.js)
          React
          MySQL
          MongoDB
          GitHub
          Git
          Figma
        </p>
      </section>

      <section id="projects" className="section">
      <h2 className="section-title">Projects(falta ordenar y REDISENAR)</h2>
      <div className="section-paragraph">
        
      </div>
      </section>

      <section id="contact" className="section">
        <h2>leave a messaje:</h2>
        <p>
          <a href="mailto:prepredy@gmail.com" className="contact-link">Contact me(FALTA)</a>
        </p>
      </section>

      <Footer />
    </main>
  );

  export default IndexPage;
