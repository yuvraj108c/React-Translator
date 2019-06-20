import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const PageNotFound = () => {
  return (
    <Jumbotron className="text-center">
      <Container>
        <h3>
          <FormattedMessage id="error.message" />
        </h3>
        <hr />
        <Button as={Link} to="/">
          <FormattedMessage id="error.button" />
        </Button>
      </Container>
    </Jumbotron>
  );
};

export default PageNotFound;
