import React from "react";
import SkillsProgress from "./SkillsProgress";

let skills = [
  { title: "HTML, CSS", level: "Advanced", progress: "90%" },
  { title: "Bootstrap", level: "Middle", progress: "75%" },
  { title: "JavaScript", level: "Strong Junior", progress: "50%" },
  {
    title: "React",
    level: "Strong Junior",
    progress: "50%",
  },
  {
    title: "React Router, React Bootstrap, React Transition Group",
    level: "Strong Junior",
    progress: "50%",
  },
  { title: "English", level: "Intermediate", progress: "50%" },
  { title: "Git", level: "Strong Junior", progress: "50%" },
  { title: "Vue, jQuery", level: "Strong Junior", progress: "50%" },
  { title: "Webpack", level: "Junior", progress: "30%" },
  { title: "SQL", level: "Junior", progress: "30%" },
  { title: "PHP", level: "Strong Junior", progress: "50%" },
  { title: "WordPress", level: "Strong Junior", progress: "50%" },
  { title: "Photoshop", level: "Basic", progress: "30%" },
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
