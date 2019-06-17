import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [lang, setLang] = useState("en");

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
