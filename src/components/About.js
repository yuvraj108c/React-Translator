import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="about">
      <h3>
        <FormattedMessage id="about.message" />
      </h3>
    </div>
  );
};

export default About;
