import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid"; // Updated import for Heroicons v2

const skills = [
  "React",
  "JavaScript",
  "HTML & CSS",
  "Python",
  "Machine Learning",
  "Node.js",
  "Angular",
  "MongoDB",
  "Express",
  "Bootstrap",
  "C++",
  "Java",
  "TypeScript",
  "Embedded Systems",
  "NLP",
  "Deep Learning Fundamentals",
];

export default function Skills() {
  return (
    <section id="skills" style={{ color: '#ffffff', padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: 'larger', fontWeight: 'bold', textAlign: 'center' }}>Skills & Technologies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ background: '#333', padding: '10px', margin: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
            <CheckIcon style={{ color: "#76e346", marginRight: "10px", width: "24px", height: "24px" }} />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
