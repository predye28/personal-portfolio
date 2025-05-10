import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
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
    <header className="header">
      <div className="main-container">
        <nav className="nav">
          {!isMobile && (
            <div className="nav-left">
              <ScrollLink
                to="about"
                smooth={true}
                duration={600} 
                offset={-70}  
                className="nav-link-name"
              >
                Omar Madrigal
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={600}
                offset={-70}
                className="nav-link"
                spy={true}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={600}
                offset={-70}
                className="nav-link"
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={600}
                offset={-70}
                className="nav-link"
              >
                Projects
              </ScrollLink>
            </div>
          )}

          <div className="nav-right">
            <a href="mailto:omarmr14.02@gmail.com" >
              <StaticImage
                src="../images/network/email.png"
                alt="Email Icon"
                className="social-icon-header"
                placeholder="blurred"
                quality={100}
              />
            </a>

            <a
              href="https://github.com/predye28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/network/github.png"
                alt="github"
                className="social-icon-header"
                placeholder="blurred"
                quality={100}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-madrigal-rodriguez-b15416269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/network/linkedin.png"
                alt="LinkedIn"
                className="social-icon-header"
                placeholder="blurred"
                quality={100}
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;