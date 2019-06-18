import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "../styles/Navbar.css";

const Navbar = props => {
  const [lang, setLang] = useState(props.language);

  useEffect(() => {
    props.changeLanguage(lang);
  }, [lang, props]);

  const handleChange = event => {
    setLang(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="links">
          <Link to="/home">
            <FormattedMessage id="nav.home" />
          </Link>
          <Link to="/about">
            <FormattedMessage id="nav.about" />
          </Link>
        </div>
        <select className="select" onChange={handleChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
