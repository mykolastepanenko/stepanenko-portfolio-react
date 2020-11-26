import React from "react";

export default function SkillsProgress(props) {
  return (
    <React.Fragment>
      <div className={props.mt + " d-flex justify-content-between"}>
        <h6>{props.title}</h6>
        <span>{props.level}</span>
      </div>

      {/* HTML, CSS, JavaScript */}
      <div class="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: props.progress }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="90"></div>
      </div>
    </React.Fragment>
  );
}
