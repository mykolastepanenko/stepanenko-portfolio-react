import React from "react";
import "./Header.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className="header pt-5 pb-5">
        <Container>
          <Row className="text-center text-lg-left">
            <Col
              lg={2}
              className="pb-3 pb-lg-0 pt-lg-0 d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
              <img className="ava" src="ava.jpg" alt="avatar" />
            </Col>
            <Col
              lg={8}
              className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
              <h1 className="header__h1 w-100">Николай Степаненко</h1>
              <h2 className="header__h2 w-100">Junior Front-End Developer</h2>
              <Row className="pt-3 pb-lg-0 pt-lg-0 d-flex w-100 justify-content-center justify-content-lg-start">
                <a
                  href="https://www.facebook.com/stepanenko.mykola"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon
                    className="header__icon"
                    style={{ marginLeft: 15 }}
                    size="2x"
                    icon={["fab", "facebook"]}
                  />
                </a>
                <a
                  href="https://t.me/stepanenkokolya"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon
                    className="header__icon"
                    size="2x"
                    icon={["fab", "telegram"]}
                  />
                </a>
                <a
                  href="https://github.com/mykolastepanenko"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon
                    className="header__icon"
                    size="2x"
                    icon={["fab", "github"]}
                  />
                </a>
              </Row>
            </Col>
            <Col
              lg={2}
              className="pt-5 pb-lg-0 pt-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center">
              <a
                href="https://t.me/stepanenkokolya"
                target="_blank"
                rel="noreferrer">
                <Button className="header__button" variant="success">
                  contact me
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    </React.Fragment>
  );
}
