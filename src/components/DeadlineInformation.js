import React from "react";
import PropTypes from "prop-types";
import { isToday } from "../utils/isToday";

DeadlineInformation.propTypes = {
  deadline: PropTypes.object.isRequired,
  canPerform: PropTypes.bool,
};

function DeadlineInformation({ canPerform, deadline }) {
  const today = isToday(deadline);
  return (
    <React.Fragment>
      {" "}
      The deadline {canPerform ? "is" : "was"}{" "}
      <strong>{today ? "today" : deadline.toDateString()}</strong>.
    </React.Fragment>
  );
}

export default DeadlineInformation;
