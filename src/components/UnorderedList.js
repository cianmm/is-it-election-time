import React from "react";
import PropTypes from "prop-types";

const UnorderedList = ({ children }) => {
  return (
    <ul style={{ maxWidth: "500px", textAlign: "initial", margin: "auto" }}>
      {children.map((ween, index) => (
        <li key={index}>{ween}</li>
      ))}
    </ul>
  );
};

UnorderedList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default UnorderedList;
