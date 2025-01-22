import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="#about" className="nav-link">Omar Madrigal</a>

        </div>
        
        <div className="nav-right">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Leave a messaje</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
