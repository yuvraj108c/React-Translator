import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="hero">
          <h2 className="title">Welcome!</h2>
          <p className="sub">This is our sub heading</p>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
