import React from "react";
import PropTypes from "prop-types";

const UnorderedList = ({ children }) => {
  return (
    <ul style={{ maxWidth: "500px", textAlign: "initial", margin: "auto" }}>
      {children.map(ween => (
        <li key={ween}>{ween}</li>
      ))}
    </ul>
  );
};

UnorderedList.propTypes = {
  children: PropTypes.number.isRequired,
};

export default UnorderedList;
