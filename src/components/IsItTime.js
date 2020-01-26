import React from "react";
import { isToday } from "../utils/isToday";
import { generalElectionDeadline } from "../constants";

const IsItTime = () => {
  const todaysTheDay = isToday(generalElectionDeadline);
  const openDate = new Date(generalElectionDeadline);
  return (
    <React.Fragment>
      <p>
        <h1 style={{ marginBottom: "25px" }}>{todaysTheDay ? "YES" : "NO"}.</h1>
        The General Election is{" "}
        {todaysTheDay ? "TODAY!" : `on ${openDate.toDateString()}`}
      </p>
      <p>Polls open at {openDate.getHours()} AM</p>
    </React.Fragment>
  );
};

export default IsItTime;
