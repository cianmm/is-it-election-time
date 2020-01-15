import React from "react";
import { isToday } from "../utils/isToday";

const IsItTime = () => {
  return <h1>{isToday("2020-02-08") ? "YES" : "NO"}.</h1>;
};

export default IsItTime;
