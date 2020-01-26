import React from "react";
import PropTypes from "prop-types";

MaybeLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  canPerform: PropTypes.bool,
};

function MaybeLink({ children, href, canPerform }) {
  const style = {
    color: canPerform ? "" : "grey",
    textDecoration: canPerform ? "initial" : "line-through",
  };
  return href ? (
    <a href={href} rel="noopener noreferrer" target="blank" style={style}>
      {children}
    </a>
  ) : (
    <span style={style}>{children}</span>
  );
}

export default MaybeLink;
