import React from "react";
import { isToday } from "../utils/isToday";
import { generalElectionDeadline } from "../constants";

const IsItTime = () => {
  const todaysTheDay = isToday(generalElectionDeadline);
  return (
    <React.Fragment>
      <h1>{todaysTheDay ? "YES" : "NO"}.</h1>
      The General Election is{" "}
      {todaysTheDay
        ? "TODAY!"
        : `on ${new Date(generalElectionDeadline).toDateString()}`}
    </React.Fragment>
  );
};

export default IsItTime;
