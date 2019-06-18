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
      <div className="container">
        <div className="links">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
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
