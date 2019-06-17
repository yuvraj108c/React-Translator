import React from "react";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";

const App = props => {
  return (
    <div className="container">
      <Navbar language={props.language} changeLanguage={props.changeLanguage} />
      <Home />
    </div>
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
