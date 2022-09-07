import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./styles.css";

const WORK_EXPERIENCE = [
  {
    companyName: "Juakali",
    designation: "Software Developer",
    workingPeriod: "Feb 2022 - Present",
    description: [
      "Worked on Juakali platform as Frontend Developer. lets Financial Services Providers digitize their operations easily.",
      " Improved existing platform by adding new features and resolving bugs.",
      " Completely redesigned GrapesJS CMS Builder, making product customer-friendly.",
      " Tech Stack - TypeScript, React.js, Redux, Material UI and JavaScript",
    ],
  },
  {
    companyName: "CCTech",
    designation: "Member of Technical Staff",
    workingPeriod: "Jan 2021 - Jan 2022",
    description: [
      "Worked mostly on React Web Apps",
      "Used Ant Design for most of UI implementation",
      " Used Redux Toolkit for state management",
      "Gained good understanding of React and Typescript",
    ],
  },
];

const Experience = () => {
  return (
    <div style={{ margin: "70px 0px" }}>
      <h1>Work Experience</h1>
      <div>
        {WORK_EXPERIENCE.map((workExp, i) => (
          <div key={i}>
            <h3 className="workExp_designation">{workExp.designation}</h3>
            <p className="workExp_company">{workExp.companyName}</p>
            <p className="workExp_duration">{workExp.workingPeriod}</p>
            <div style={{ margin: "12px" }}>
              {workExp.description.map((point, i) => (
                <li key={i} className="workExp_description">
                  <ArrowRightAltIcon /> {point}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
