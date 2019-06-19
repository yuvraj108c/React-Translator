import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar
          language={props.language}
          changeLanguage={props.changeLanguage}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
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
