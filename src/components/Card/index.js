import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.css";

const Card = (props) => {
  const { title, description, demoLink, codeLink } = props.data;
  return (
    <div className="cardContainer">
      <div>
        <h3 style={{ alignText: "center", margin: "0px" }}>{title}</h3>

        <p
          style={{
            color: "rgb(132, 140, 146)",
            fontSize: "14px",
          }}
        >
          {description}
        </p>
      </div>
      <div className="cardAction">
        <a href={demoLink}>
          <LanguageIcon className="demoBtn" />
        </a>
        <a href={codeLink}>
          <GitHubIcon className="codeBtn" />
        </a>
      </div>
    </div>
  );
};
export default Card;
