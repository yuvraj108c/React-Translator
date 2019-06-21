import React from "react";
import { FormattedMessage } from "react-intl";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const Contact = () => {
  return (
    <Jumbotron>
      <Container style={{ maxWidth: "700px" }}>
        <Form className="contact" style={{ margin: "5%" }}>
          <h2 className="mb-3">
            <FormattedMessage id="contact.title" />
          </h2>
          <Form.Group>
            <Form.Label>
              <FormattedMessage id="contact.email" />
            </Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <FormattedMessage id="contact.message" />
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            <FormattedMessage id="contact.button" />
          </Button>
        </Form>
      </Container>
    </Jumbotron>
  );
};

export default Contact;
