import React from "react";

export default function InfoAbout(props) {
  return (
    <div className={props.mt + " p-3 section"}>
      <h1 className="pb-3 section__h1">{props.title}</h1>
      <p className="section__p">{props.text}</p>
    </div>
  );
}
