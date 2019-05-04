import React from "react";
import {Index} from "../index/index.jsx";
import PropTypes from "prop-types";

App.propTypes = {
  moviesData: PropTypes.array.isRequired
};

export const App = (props) => {
  const {moviesData} = props;
  return <Index
    moviesData={moviesData}
  />;
};
