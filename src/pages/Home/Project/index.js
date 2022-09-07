import React from "react";
import Card from "../../../components/Card";
import "./styles.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const PROJECT_LIST = [
  {
    title: "Expense Tracker",
    description:
      "App helps me to track my expenses. Tech stack : React.js , Firebase and Chakra UI",
    demoLink: "https://personal-expense-tracker-app.netlify.app/",
    codeLink: "https://github.com/nawazmujawar/personal-expense-tracker-app",
  },
  {
    title: "Recipe App",
    description:
      "A recipes collection application. Tech stack : React.js , Redux, Node.js, MongoDB and Material UI",
    demoLink: "https://foodcluster.netlify.app/",
    codeLink: "https://github.com/nawazmujawar/recipe-frontend",
  },

  {
    title: "Amazon Clone",
    description:
      "Clone of Amazon Homepage. Tech stack: React.js, Material UI  and Firebase",
    demoLink: "https://clone-3d080.web.app/",
    codeLink: "https://github.com/nawazmujawar/clone-amazon",
  },

  {
    title: "Youtube Clone",
    description:
      "asfd asdu as asdf as df sdf as fasidf gasdf asd fals dfyia sdf asdfl asdf.  asdfasdf asdf as df asd f asd f asdf s",
    demoLink: "",
    codeLink: "",
  },
];
const Project = () => {
  return (
    <div className="projectContainer">
      <h1>Recent Projects</h1>
      <div className="cardSection">
        {PROJECT_LIST.slice(0, 3).map((project, i) => (
          <div key={i}>
            <Card data={project} />
          </div>
        ))}
      </div>
      <p className="allProjectsText">
        See all projects <ArrowRightAltIcon />
      </p>
    </div>
  );
};

export default Project;
