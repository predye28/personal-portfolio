import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="header">
      <div className="main-container">
      <nav className="nav">
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
          <ScrollLink
            to="academic"
            smooth={true}
            duration={600}
            offset={-70}
            className="nav-link"
          >
            Academic
          </ScrollLink>
         
        </div>

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
