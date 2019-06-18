import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

const App = props => {
  return (
    <Router>
      <Navbar language={props.language} changeLanguage={props.changeLanguage} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
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
