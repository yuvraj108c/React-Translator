import React from "react";
import { FormattedMessage } from "react-intl";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Map from "./Map";

const About = () => {
  return (
    <div className="about">
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={5} style={{ marginBottom: "5%" }}>
              <h1>
                <FormattedMessage id="about.title" />
              </h1>
              <p>
                <FormattedMessage id="about.message" />
              </p>
              <br />
              <hr />
              <Button>
                <FormattedMessage id="about.button" />
              </Button>
            </Col>
            <Col sm={7}>
              <Map />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
