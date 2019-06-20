import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import en from "../translations/en";
import fr from "../translations/fr";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

const NavigationBar = props => {
  const [lang, setLang] = useState(props.language);

  const languagesObj = {
    en: en,
    fr: fr
  };

  useEffect(() => {
    props.changeLanguage(lang);
  }, [lang]);

  const handleChange = event => {
    setLang(event.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Form.Control as="select" onChange={handleChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </Form.Control>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to={"/" + lang + "/" + languagesObj[lang]["url.home"]}
            >
              <FormattedMessage id="nav.home" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/" + lang + "/" + languagesObj[lang]["url.about"]}
            >
              <FormattedMessage id="nav.about" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
