import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Education() {
  return (
    <div className="mt-3 p-3 section">
      <h1 className="section__h1 mb-4">Образование</h1>
      <p>
        <FontAwesomeIcon
          className="section__icon"
          icon={["fas", "graduation-cap"]}
        />
        <b>
          Фаховий коледж інформаційних систем і технологій ДВНЗ "КНЕУ ім. В.
          Гетьмана"
        </b>
      </p>
      <p style={{textAlign:"left"}}>Программирование, инженерия программного обеспечения (2017 - 2021)</p>
    </div>
  );
}
