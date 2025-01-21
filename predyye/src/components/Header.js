import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="#home" className="nav-link">Omar Madrigal</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
        
        {/* Sección derecha con los iconos */}
        <div className="nav-right">
          <a
            href="https://www.linkedin.com/in/omar-madrigal-rodriguez-b15416269/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/predye28"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
