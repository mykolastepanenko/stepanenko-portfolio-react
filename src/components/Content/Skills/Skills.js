import React from "react";
import SkillsProgress from "./SkillsProgress";

let skills = [
  { title: "HTML, CSS, JavaScript", level: "Pro", progress: "90%" },
  { title: "Bootstrap", level: "Pro", progress: "90%" },
  {
    title: "React",
    level: "Advanced",
    progress: "75%",
  },
  {
    title: "React Router, React Bootstrap, React Transition Group",
    level: "Advanced",
    progress: "75%",
  },
  { title: "Git", level: "Advanced", progress: "75%" },
  { title: "Webpack", level: "Advanced", progress: "75%" },
  { title: "SQL", level: "Advanced", progress: "75%" },
  { title: "English", level: "Intermediate", progress: "75%" },
  { title: "Vue, jQuery", level: "Middle", progress: "50%" },
  { title: "Photoshop", level: "Basic", progress: "50%" },
  { title: "PHP", level: "Basic", progress: "50%" },
  { title: "WordPress", level: "Basic", progress: "50%" },
];

export default function Skills() {
  return (
    <div className="mt-3 p-3 section">
      <h1 className="section__h1 mb-4">Skills</h1>
      {skills.map((item) => (
        <SkillsProgress
          title={item.title}
          level={item.level}
          progress={item.progress}
          mt="mt-3"
        />
      ))}
    </div>
  );
}
