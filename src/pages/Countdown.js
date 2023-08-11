import React from "react";
import "../countdownScript";
import "../countdownCss.css";
import ProgressBar from "@ramonak/react-progress-bar";
import moment from "moment";

function CountDown() {
  var startOfDate = moment("02-22-2023", "MM-DD-YYYY");
  var endDate = moment("09-22-2023", "MM-DD-YYYY");
  var todayDate = moment();

  const daysDifference = moment(endDate).diff(startOfDate, "days");

  const difference = todayDate.diff(startOfDate, "days");

  const resultPerc = Math.round((difference / daysDifference) * 100);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <img
        style={{ borderRadius: 20, width: 200, height: 200 }}
        src={require("../mimibubu.gif")}
      />
      <div className="container">
        <div className="white"></div>

        <div className="red"></div>

        <div className="blue"></div>
        <div id="timer"></div>
        <h2>😍 Бидний уулзах өдөр 😍</h2>
        <h2>🕧(2023/01/22 - 2023/09/22)🕧</h2>
      </div>
      <div style={{ width: 300 }}>
        <ProgressBar
          completed={resultPerc}
          maxCompleted={100}
          bgColor="red"
          customLabel={`${resultPerc} %`}
        />
      </div>
    </div>
  );
}

export default CountDown;
