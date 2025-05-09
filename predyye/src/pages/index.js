import React from "react";
import "../style/Style.css";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import BMLAutomaton from "../components/BMLAutomato";

/**
 * Main home page component
 * @returns {JSX.Element} The rendered home page
 */
const IndexPage = () => (
  <main>
    <Header />
    <div className="main-container">
      <section id="main" className="general-section">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </section>
    </div>
    <Footer />
  </main>
);

/**
 * About section component with profile details
 * @returns {JSX.Element} The rendered about section
 */
const AboutSection = () => (
  <section id="about" className="section about-section">

    <div className="section-spacingBig" />
    
    <p className="line"></p>
    <h1 className="section-title">Hi, <span className="highlight">Omar</span> here.</h1>
    <h2 className="section-word">I create things every day.</h2>
    <p className="line"></p>

    <BMLAutomaton />
    

    <div className="section-spacingBig" />
    <h3 className="section-subtitle">About Me</h3>
    
    <div className="underline"></div>

    <div className="about-container">
      <div className="about-image">
        <StaticImage
          src="../images/perfil.jpeg" 
          alt="Omar Madrigal"
          className="profile-image"
          placeholder="blurred"
          quality={100}
        />
      </div>
      <div className="about-text">
        <p className="section-paragraph">
          Hi! I'm Omar Madrigal, a final-year Computer Engineering student at
          the <span className="highlight">Instituto Tecnológico de Costa Rica</span>, passionate about real-world
          projects that create positive impacts through technology. I'm
          especially interested in artificial intelligence and its potential
          to drive meaningful change.
        </p>
        <p className="line"></p>
        <p className="section-paragraph">
          Outside of academics, I enjoy drawing, weightlifting, exploring
          nature, and spending quality time with family and friends.
        </p>
      </div>
    </div>
    
    <SocialLinks />
  </section>
);

/**
 * Skills section component
 * @returns {JSX.Element} The rendered skills section
 */
const SkillsSection = () => (
  <section id="skills" className="section">
    <div className="section-spacing" />
    <h3 className="section-subtitle">Skills</h3>
    <div className="underline"></div>
    <div className="skills-links">
      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
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
      <a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer">
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
);

/**
 * Social links component
 * @returns {JSX.Element} The rendered social links
 */
const SocialLinks = () => (
  
  <div className="social-links">
    <a href="mailto:omarmr14.02@gmail.com" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/network/email.png"
        alt="email icon"
        className="social-icon"
        placeholder="blurred"
        quality={100}
      />
    </a>
    <a href="https://drive.google.com/file/d/1PL9TFLcBFsuDakxpUOnJl1zUQcZuxem-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/network/resume.png"
        alt="CV Omar Madrigal"
        className="social-icon"
        placeholder="blurred"
        quality={100}
      />
    </a>
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
        alt="GitHub"
        className="social-icon"
        placeholder="blurred"
        quality={100}
      />
    </a>
    <a href="https://www.instagram.com/predyye/" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/network/instagram.png"
        alt="Instagram"
        className="social-icon"
        placeholder="blurred"
        quality={100}
      />
    </a>
  </div>
);

export default IndexPage;