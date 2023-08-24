import React, { useState } from "react";
import "../countdownScript";
import "../countdownCss.css";
import ProgressBar from "@ramonak/react-progress-bar";
import moment from "moment";

function CountDown() {
  const [percNumber, setPercNumber] = useState(null);
  var startOfDate = moment("01-22-2023 09:00:00", "MM-DD-YYYY HH:mm:ss");
  var endDate = moment("09-17-2023 05:00:00", "MM-DD-YYYY HH:mm:ss");
  var todayDate = moment();

  const daysDifference = moment(endDate).diff(startOfDate, "days");

  const difference = todayDate.diff(startOfDate, "days");

  const resultPerc = Math.round((difference / daysDifference) * 100);
  function getDatePercent() {
    let dateInQuestion = new Date(Date.now());

    //we are copying the value of the date object into a new object:
    let startOfDay = new Date(dateInQuestion.valueOf());

    //define the beginning of the day. Depending on time zone and browser, this may need tweaking:
    startOfDay.setHours(0);
    startOfDay.setMinutes(0);
    startOfDay.setSeconds(0);
    startOfDay.setMilliseconds(0);

    let lengthOfDay = 1000 * 60 * 60 * 24; //ms in a day

    //subtract to find time since beginning of the day, divide by
    //number of ms in day, and then multiply by 100 to get percentage
    return Math.round(
      ((dateInQuestion.valueOf() - startOfDay.valueOf()) / lengthOfDay) * 10000
    );
  }
  setInterval(() => {
    setPercNumber(getDatePercent());
    console.log("percNumber", percNumber);
  }, 1000);

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
        <h2>🕧(2023/01/22 - 2023/09/17)🕧</h2>
        <h1
          style={{ color: "red", textAlign: "center" }}
        >{`${resultPerc}.${percNumber} %`}</h1>
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
