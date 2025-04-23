import React, { useState } from "react";
import "./index.css";
import steveJobsImage from "./assets/image.png";

const Profilecard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("lineer-gradient(135deg,#ffd770,#oef");
  };
  const HandelMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };
  return (
    <div
      className={`profile-card ${hovered ? "hovered" : ""}`}
      style={{ background: bgColor, color: hovered ? "#000" : "#555" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={HandelMouseLeave}
    >
      <img src={steveJobsImage} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};
const App = () => {
  return (
    <div className="app-container">
      <Profilecard
        name="Steve Jobs"
        bio="Innovator, Entrepreneur, and Co-founder of Apple.Inc"
        initialBgColor="lineer-gradient(135deg,#ADD8E6,#add8e6)"
      />
    </div>
  );
};
export default App;
