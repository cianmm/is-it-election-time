import React from "react";
import PropTypes from "prop-types";
import isBefore from "../../utils/isBefore";
import DeadlineInformation from "../DeadlineInformation";
import MaybeLink from "./MaybeLink";
import { isToday } from "../../utils/isToday";

GetReadyListItem.propTypes = {
  deadline: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

function GetReadyListItem({ deadline, children, href }) {
  const canPerform = !deadline || isToday(deadline) || isBefore(deadline);
  const deadlineDate = new Date(deadline);

  return (
    <React.Fragment>
      <MaybeLink href={href} canPerform={canPerform}>
        {children}
      </MaybeLink>
      {deadline && (
        <DeadlineInformation canPerform={canPerform} deadline={deadlineDate} />
      )}
    </React.Fragment>
  );
}

export default GetReadyListItem;
