import React from "react";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";

import "./App.css";

const App = props => {
  return (
    <Navbar language={props.language} changeLanguage={props.changeLanguage} />
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
