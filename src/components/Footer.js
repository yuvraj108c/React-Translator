import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer>
      <div className="text-center py-3">
        © 2019 <FormattedMessage id="copyright" />
      </div>
    </footer>
  );
};

export default Footer;
