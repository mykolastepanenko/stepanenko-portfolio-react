import React from "react";
import SkillsProgress from "./SkillsProgress";

export default function Skills() {
  return (
    <div className="mt-3 p-3 section">
      <h1 className="section__h1 mb-4">Skills</h1>
      <SkillsProgress
        title="HTML, CSS, JavaScript"
        level="Pro"
        progress="90%"
      />
      <SkillsProgress
        mt="mt-3"
        title="English"
        level="Intermediate"
        progress="75%"
      />
      <SkillsProgress
        mt="mt-3"
        title="React, Vue, jQuery"
        level="Middle"
        progress="75%"
      />
      <SkillsProgress mt="mt-3" title="Git" level="Middle" progress="75%" />
      <SkillsProgress mt="mt-3" title="npm" level="Middle" progress="75%" />
      <SkillsProgress mt="mt-3" title="SQL" level="Middle" progress="75%" />
      <SkillsProgress
        mt="mt-3"
        title="Python, Django"
        level="Middle"
        progress="75%"
      />
    </div>
  );
}
