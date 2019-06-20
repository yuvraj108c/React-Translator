import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

import en from "./translations/en";
import fr from "./translations/fr";

import "./App.css";

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar
          language={props.language}
          changeLanguage={props.changeLanguage}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={"/en/" + en["url.home"]} component={Home} />
          <Route exact path={"/en/" + en["url.about"]} component={About} />
          <Route exact path={"/fr/" + fr["url.home"]} component={Home} />
          <Route exact path={"/fr/" + fr["url.about"]} component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language =>
      dispatch({ type: "CHANGE_LANGUAGE", value: language })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
