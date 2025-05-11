import React, { useState, useEffect } from "react";
import "../style/Style.css";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import BMLAutomaton from "../components/BMLAutomato";
import { useInView } from 'react-intersection-observer';

// Add animation styles to your CSS
const animationStyles = `
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease-out, transform 0.5s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
`;

/**
 * Main home page component
 * @returns {JSX.Element} The rendered home page
 */
const IndexPage = () => {
  // Add animation styles on component mount
  useEffect(() => {
    // Create style element if it doesn't exist
    if (!document.getElementById('animation-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'animation-styles';
      styleEl.innerHTML = animationStyles;
      document.head.appendChild(styleEl);
    }
    
    return () => {
      // Clean up styles on unmount
      const styleEl = document.getElementById('animation-styles');
      if (styleEl) styleEl.remove();
    };
  }, []);

  return (
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
};

/**
 * Animated Section wrapper component
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Child components
 * @param {string} props.className Additional CSS classes
 * @returns {JSX.Element} The animated section wrapper
 */
const AnimatedSection = ({ children, className = '', ...props }) => {
  // Configure the intersection observer with threshold and rootMargin
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <div 
      ref={ref} 
      className={`fade-in-up ${inView ? 'visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * About section component with profile details
 * @returns {JSX.Element} The rendered about section
 */
const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Add window resize listener to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="section-spacingBig" />
      
      <AnimatedSection>
        <p className="line"></p>
        <h1 className="section-title">Hi, <span className="highlight">Omar</span> here.</h1>
        <h2 className="section-word">I create things every day.</h2>
        <p className="line"></p>
      </AnimatedSection>

      <AnimatedSection>
        <BMLAutomaton />
      </AnimatedSection>
      
      <div className="section-spacingBig" />
      
      
      <AnimatedSection>
        <h3 className="section-subtitle">About Me</h3>
        <div className="underline"></div>
      </AnimatedSection>

      <div className="about-container">
        {!isMobile && (
          <AnimatedSection className="about-image">
            <StaticImage
              src="../images/perfil.jpeg" 
              alt="Omar Madrigal"
              className="profile-image"
              placeholder="blurred"
              quality={100}
            />
          </AnimatedSection>
        )}
        <AnimatedSection className="about-text">
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
        </AnimatedSection>
      </div>
      
      <AnimatedSection>
        <SocialLinks />
      </AnimatedSection>
    </section>
  );
};


/**
 * Skills section component with arrow images and two columns
 * @returns {JSX.Element} The rendered skills section
 */
const SkillsSection = () => {
  // List of skills to display with descriptions
  const skills = [
    { name: "Python"},
    { name: "JavaScript"},
    { name: "React"},
    { name: "MySQL"},
    { name: "Figma"},
    { name: "MongoDB"},
    { name: "Git"}
  ];

  // We can't use .map with StaticImage so we'll create each card individually

  const [isMobile, setIsMobile] = useState(false);

  // Add window resize listener to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <section id="skills" className="section">
      <div className="section-spacing" />
      <AnimatedSection>
        <h3 className="section-subtitle">Skills</h3>
        <div className="underline"></div>
      </AnimatedSection>
      <AnimatedSection className="skills-grid">
        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/python.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[0].name}</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/js.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[1].name}</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/react.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[2].name}</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/mysql.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[3].name}</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/figma.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[4].name}</span>
          </div>
        </div>


        <div className="skill-card">
          <div className="skill-header">
            {!isMobile && (
              <StaticImage
                src="../images/skills/git.png"
                alt="React icon"
                className="skill-icon"
                placeholder="blurred"
                quality={100}
                width={24}
                height={24}
              />
            )}
            <span className="skill-name">{skills[6].name}</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

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