import React from "react";
import InfoAbout from "./InfoAbout/InfoAbout";
import Location from "./Location/Location";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import Achievements from "./Achievements/Achievements";
import Education from "./Education/Education";
import "./Content.css";
import { Row, Col, Container } from "react-bootstrap";

export default function Content() {
  return (
    <React.Fragment>
      <Container className="pt-5 pb-5">
        <Row>
          <Col lg={8}>
            <InfoAbout
              title="Обо мне"
              text="Приветствую в своем портфолио. Меня зовут Николай Степаненко. Я студент 4 курса
        и нахожусь в поиске работы на должность Junior Front-End разработчика. Опыт в веб индустрии - 5 лет."
            />
            <InfoAbout
              mt="mt-3"
              title="Почему я вас заинтересую"
              text={[
                `С самого детства я всегда интересовался IT и выбрал для себя Front-End как самое любимое направление.
              Это дело моей страсти и энтузиазма.
              Также хочу выделить список причин, почему я буду вам интересен:`,
                <ol className="mt-3 section__ol">
                  <li>
                    <h6>Страсть</h6>
                    <p>
                      Front-End разработка - это то, что дает мне энергию, а
                      значит я делаю свое дело качественно и всегда найду силы
                      преодолевать трудности.
                    </p>
                  </li>
                  <li>
                    <h6>Усидчивость</h6>
                    <p>
                      Важное качество для программиста. При необходимости мне
                      хватает терпения найти решение задачи, даже если это
                      вызывает трудности.
                    </p>
                  </li>
                  <li>
                    <h6>Быстрая обучаемость</h6>
                    <p>
                      В нашем мире сила в знаниях. Чтобы стать и оставаться
                      востребованным важно{" "}
                      <span style={{ color: " #778492", fontWeight: "bold" }}>
                        постоянно
                      </span>{" "}
                      развиватся и учиться новому.
                    </p>
                  </li>
                  <li>
                    <h6>Soft Skills</h6>
                    <p>
                      Я понимаю всю важность командной работы и поэтому открыт к
                      людям и умею доходчиво объяснять свои мысли.
                    </p>
                  </li>
                </ol>,
                `Я один из лучших студентов среди потока. Я брался делать курсовые и лабораторные работы 
                другим студентам, объяснял все детали от А до Я и делал это доходчиво. После этого студенты "открывали глаза" 
                и действительно начинали понимать происходящие процессы. Считаю это важным soft skill навыком.`,
              ]}
            />
            <InfoAbout
              mt="mt-3"
              title="Стек технологий данного портфолио"
              text={[
                "При создании данного веб-сайта я использовал:",
                <ol className="mt-3 section__ol">
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>Иконки Font Awesome</li>
                </ol>,
                "Вы можете ознакомится с проектом на GitHub: ",
                <a
                  className="section__a"
                  href="https://github.com/mykolastepanenko/stepanenko-portfolio-react"
                  target="_blank"
                  rel="noreferrer">
                  https://github.com/mykolastepanenko/stepanenko-portfolio-react
                </a>,
              ]}
            />
          </Col>
          <Col lg={4} className="pt-4 pt-lg-0">
            <Location />
            <Skills />
            <Languages />
            <Achievements />
            <Education />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
