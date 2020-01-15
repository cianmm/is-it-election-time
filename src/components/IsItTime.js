import React from "react"

const IsItTime = () => {
  function isTodayGeneralElectionDay() {
    const today = new Date()
    const electionDay = new Date("2020-02-08")

    return (
      electionDay.getDate() == today.getDate() &&
      electionDay.getMonth() == today.getMonth() &&
      electionDay.getFullYear() == today.getFullYear()
    )
  }
  return <h1>{isTodayGeneralElectionDay() ? "YES" : "NO"}.</h1>
}

export default IsItTime
