import React from "react";
import PropTypes from "prop-types";

const ManifestoItem = ({ href, children }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      style={{ color: href ? undefined : "gray" }}
    >
      {children}
    </a>
  );
};

ManifestoItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ManifestoItem;
