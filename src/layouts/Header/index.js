import React from "react";
import "./styles.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
const Header = () => {
  return (
    <div className="headerContainer navbar">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </nav>
      <NightlightIcon />
    </div>
  );
};

export default Header;
