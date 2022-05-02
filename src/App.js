import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { changeLanguage } from "./actions";
import { connect } from "react-redux";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

import en from "./translations/en";
import fr from "./translations/fr";

import "./App.css";

const App = (props) => {
  return (
    <React.Fragment>
      <Router basename="/React-Multilingual">
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={"/en/" + en["url.home"]} component={Home} />
          <Route exact path={"/en/" + en["url.contact"]} component={Contact} />
          <Route exact path={"/en/" + en["url.about"]} component={About} />
          <Route exact path={"/fr/" + fr["url.home"]} component={Home} />
          <Route exact path={"/fr/" + fr["url.about"]} component={About} />
          <Route exact path={"/fr/" + fr["url.contact"]} component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps, { changeLanguage })(App);
