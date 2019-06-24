import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import en from "../translations/en";
import fr from "../translations/fr";
import componentsTranslation from "../translations/components";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

const NavigationBar = props => {
  const [lang, setLang] = useState(useSelector(state => state.language));
  const dispatch = useDispatch();

  const languagesObj = {
    en: en,
    fr: fr
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_LANGUAGE", value: lang });

    const currentComponent = props.location.pathname.slice(4);
    props.history.replace(
      "/" +
        lang +
        "/" +
        languagesObj[lang][`url.${componentsTranslation[currentComponent]}`]
    );
  }, [lang]);

  const handleChange = event => {
    setLang(event.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Form.Control
            id="select-language"
            as="select"
            onChange={handleChange}
            defaultValue={lang}
          >
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
            <Nav.Link
              as={Link}
              to={"/" + lang + "/" + languagesObj[lang]["url.contact"]}
            >
              <FormattedMessage id="nav.contact" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavigationBar);
