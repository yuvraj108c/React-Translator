import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="about">
      <Jumbotron>
        <Container>
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
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
