import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "React", level: "beginner", bgColor: "#5ED3F3", emoji: "⚛️" },
  { skill: "HTML", level: "advanced", bgColor: "#DD4B25", emoji: "#️⃣" },
  { skill: "CSS", level: "aadvanced", bgColor: "#3594CF", emoji: "🌈" },
  {
    skill: "JavaScript",
    level: "intermediate",
    bgColor: "#EFD81D",
    emoji: "🖥️",
  },
  {
    skill: "Java",
    level: "advanced",
    bgColor: "#F0931C",
    color: "#333",
    emoji: "🚀",
  },
  { skill: "Linux", level: "intermediate", bgColor: "#D64613", emoji: "🐧" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Aomine.jpeg" alt="Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>SOMU SINGH</h1>
      <p>
        Hey there! I'm Somu Singh, CSE Student at IET DAVV, diving headfirst
        into new tech and always up for a new adventure. I'm all about getting
        my hands dirty with the latest gadgets and gizmos. Let's connect and
        explore the endless possibilities together—who knows, we might just
        invent the next big thing!
      </p>
    </div>
  );
}

function SkillList() {
  const skillData = skills;
  return (
    <div className="skillList">
      {skillData.map((skill) => (
        <Skill
          skill={skill.skill}
          emoji={skill.emoji}
          bgcolor={skill.bgColor}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, emoji, bgcolor, level }) {
  return (
    <div className="skill" style={{ backgroundColor: bgcolor }}>
      <span>{emoji}</span>
      <span>{skill}</span>
      {level === "beginner" ? (
        <span>👶</span>
      ) : level === "intermediate" ? (
        <span>🦹‍♂️</span>
      ) : (
        <span>🦸‍♂️</span>
      )}
    </div>
  );
}

// Another way of implementing skill icon :
// <span>
//   {level === "beginner" && "👶"}
//   {level === "intermediate" && "🦹‍♂️"}
//   {level === "advances" && "🦸‍♂️"}
// </span>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
