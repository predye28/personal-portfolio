  import React from "react";
  import "../style/Style.css";
  import { StaticImage } from "gatsby-plugin-image";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  


  const IndexPage = () => (
    <main>
      <Header />

      <section id="about" className="section">
        <h1 className="section-title">Hi, Omar here.</h1>
        <StaticImage
        src="../images/perfil.jpeg"
        alt="Foto de perfil"
        className="perfil-logo"
        placeholder="blurred"
        layout="fixed"
        width={250} 
      />
        <h2 className="section-subtitle">I create things every day.</h2>
        <p className="section-paragraph">
        Hi! I’m Omar  Madrigal a final-year Computer Engineering student at the Instituto Tecnológico de Costa Rica, 
        passionate about real-world projects that create positive impacts through technology. 
        I’m especially interested in artificial intelligence and its potential to drive meaningful change.
        </p>
        <p className="section-paragraph">
        Outside of academics, I enjoy drawing, weightlifting, exploring nature, and spending quality time with family and friends.
        </p>
        <h1>
          agregar links a mis redes
        </h1>
      </section>

      <section id= "skills" className="section">
        <h3 className="section-subtitle">Skills</h3>
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
        <div className="project-item">
          <h3 className="project-title">"Note" - A Memory Album</h3>
          <p className="project-description">
            A React-based social platform designed for users to store and share personal memories. Backend powered by Firebase for 
            seamless user authentication and database management.
          </p>
          <a href="https://github.com/omarmadrigal/note" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3 className="project-title">Machine Learning for Forest Classification</h3>
          <p className="project-description">
            Developed a machine learning model using Python to classify tropical forest types based on environmental data. 
            Leveraged scikit-learn and matplotlib for analysis and visualization.
          </p>
          <a href="https://github.com/omarmadrigal/forest-classification" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
      </section>

      <section id-="contact">
        <h2>leave a messaje:</h2>
        <p>
          <a href="mailto:prepredy@gmail.com" className="contact-link">Contact me(FALTA)</a>
        </p>
      </section>

      <Footer />
    </main>
  );

  export default IndexPage;
