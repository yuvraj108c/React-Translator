import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = props => {
  const [lang, setLang] = useState(props.language);

  useEffect(() => {
    props.changeLanguage(lang);
  }, [lang]);

  const handleChange = event => {
    setLang(event.target.value);
  };

  return (
    <nav className="navbar">
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
      <ul className="routes">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
