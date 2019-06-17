import React, { useState, useEffect } from "react";
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
    </nav>
  );
};

export default Navbar;
