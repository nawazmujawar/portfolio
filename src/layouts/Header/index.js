import React from "react";
import "./styles.css";
import NightlightIcon from "@mui/icons-material/Nightlight";
const Header = () => {
  return (
    <div className="headerContainer navbar">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="https://drive.google.com/file/d/1PlkxVknhlnJCtQkdt3YhRH6i56sz-hrK/view">
          Resume
        </a>
        <a href="/contact">Contact</a>
      </nav>
      <NightlightIcon />
    </div>
  );
};

export default Header;
