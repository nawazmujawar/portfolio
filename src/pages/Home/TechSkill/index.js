import React from "react";
import Chip from "../../../components/Chip";
import "./styles.css";

const SKILLS = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Redux",
  "Material UI",
  "Ant Design",
];

const TechSkill = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Skills</h1>
      <div className="skillSection">
        {SKILLS.map((skill, i) => (
          <div key={i}>
            <Chip skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkill;
