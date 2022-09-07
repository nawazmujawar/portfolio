import React from "react";

import "./styles.css";

const NAVLINK = ["Home", "Blogs"];
const SOCIALMEDIA = ["Linked In", "Github", "Twitter"];

const LASTCOLUMN = ["Resume", "Contact"];

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        {NAVLINK.map((link, i) => (
          <p>{link}</p>
        ))}
      </div>
      <div>
        {SOCIALMEDIA.map((link, i) => (
          <p>{link}</p>
        ))}
      </div>
      <div>
        {LASTCOLUMN.map((link, i) => (
          <p>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
