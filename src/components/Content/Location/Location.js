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
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "globe"]} />
        <a
          href="https://codesandbox.io/s/epic-napier-nbjch"
          target="_blank"
          rel="noreferrer">
          Портфолио 1
        </a>
      </p>
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "globe"]} />
        <a
          href="https://vswjk.csb.app/"
          target="_blank"
          rel="noreferrer">
          Портфолио 2
        </a>
      </p>
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "globe"]} />
        <a
          href="https://test-logic-llc.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
          Портфолио 3
        </a>
      </p>
      <p>
        <FontAwesomeIcon className="section__icon" icon={["fas", "file"]} />
        <a
          href="https://drive.google.com/file/d/1HfcWuffGGs1vx1AI5MwzweCs1PNCX8-N/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Скачать резюме
        </a>
      </p>
    </div>
  );
}
