import React from "react";
import "../styles/Home.css";

import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="hero">
          <h2 className="greeting">
            <FormattedMessage id="home.greeting" />
          </h2>
          <p className="description">
            <FormattedMessage id="home.description" />
          </p>
          <button>
            <FormattedMessage id="home.button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
