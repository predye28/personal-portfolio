  import React from "react";
  import "../style/Style.css";
  import { StaticImage } from "gatsby-plugin-image";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import ProjectsSection from "../components/ProjectsSection";
  
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
            width={300}
          />
          <section id="about" className="section about-section">
            <h1 className="section-title">Hi, Omar here.</h1>
            <div className="underline"></div>
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
              <a href="https://www.linkedin.com/in/omar-madrigal-rodriguez-b15416269/" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/network/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={100}
                />
              </a>
              <a href="https://github.com/predye28" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/network/github.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={100}
                />
              </a>
              <a href="https://www.instagram.com/predyye/" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  src="../images/network/instagram.png"
                  alt="LinkedIn"
                  className="social-icon"
                  placeholder="blurred"
                  quality={100}
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
            width={300}
          />
        </div>
      </section>

      <section id= "skills" className="section">
        <h3 className="section-title">Skills</h3>
        <div className="underline"></div>
        <div className="skills-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/python.png"
                alt="python"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/js.png"
                alt="js"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/react.png"
                alt="react"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/mysql.png"
                alt="mysql"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/figma.png"
                alt="figma"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/mongodb.png"
                alt="mongodb"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../images/skills/git.png"
                alt="git"
                className="skills-icon"
                placeholder="blurred"
                quality={100}
              />
          </a>
        </div>

      </section>
      
      <br></br>
      <br></br>

      <ProjectsSection />

      <br></br>
      <br></br>
      <section id="contact" className="section">
        <h3 className="section-title">Leave a message!</h3>
        <div className="underline"></div>
        <h2 className="section-subtitle">soon!</h2>
      </section>

      <Footer />
    </main>
  );

  export default IndexPage;
