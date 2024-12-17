import propTypes from "prop-types";
import React from "react";

const BodySection = (props) => {
  return (
    <div className="bodySection">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
BodySection.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
export default BodySection;