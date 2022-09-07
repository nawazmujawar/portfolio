import React from "react";
import "./styles.css";

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
const Chip = ({ skill }) => {
  return (
    <div
      className="chip"
      style={{
        borderColor: generateRandomColor(),
      }}
    >
      <p>{skill}</p>
    </div>
  );
};

export default Chip;
