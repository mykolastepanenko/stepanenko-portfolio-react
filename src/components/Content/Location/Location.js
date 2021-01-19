import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Location() {
  return (
    <div className="p-3 section">
      <p>
        <FontAwesomeIcon
          className="section__icon"
          icon={["fas", "map-marker-alt"]}
        />
        Киев, Украина
      </p>
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "envelope"]} />
        <a href="mailto:Nikolaua36@gmail.com" target="_blank" rel="noreferrer">
          Nikolaua36@gmail.com
        </a>
      </p>
      {/* <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "globe"]} />
        <a
          href="https://stepanenko-portfolio.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
          Портфолио
        </a>
      </p> */}
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "file"]} />
        <a
          href="https://drive.google.com/file/d/1VGebFtt-u62EkE8b-grXKZ9xF3kBwzd5/view?usp=sharing"
          target="_blank"
          rel="noreferrer">
          Скачать резюме
        </a>
      </p>
    </div>
  );
}
