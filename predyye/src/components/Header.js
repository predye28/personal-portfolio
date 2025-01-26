import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <ScrollLink
            to="about"
            smooth={true}
            duration={600} 
            offset={-70}  
            className="nav-link"
          >
            Omar Madrigal
          </ScrollLink>
        </div>

        <div className="nav-right">
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            className="nav-link"
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
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="nav-link"
          >
            Leave a message
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
