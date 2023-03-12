import React from "react";

function BusinessHours({ showData }) {
  function timeTillClose(input, date, close = "") {
    const [startTime, endTime] = input.hours[date]
      ? input.hours[date].split("-")
      : ["10", "12"];

    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);

    const startTime24 =
      startHour > 12 ? `${startHour - 12}:00 PM` : `${startHour}:00 AM`;
    const endTime24 =
      endHour > 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;
    if (close === "") {
      return endTime24;
    }
    return startTime24;
  }

  return (
    <div className="show-hours">
      <div className="date-abbrev">
        <ul>
          <li>Mon</li>
          <li>Tues</li>
          <li>Wed</li>
          <li>Thurs</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
      </div>
      <ul>
        <li>
          {showData.hours && timeTillClose(showData, "Monday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Monday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Tuesday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Tuesday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Wednesday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Wednesday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Thursday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Thursday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Friday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Friday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Saturday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Saturday")}
        </li>
        <li>
          {showData.hours && timeTillClose(showData, "Sunday", "open")} {"-"}{" "}
          {showData.hours && timeTillClose(showData, "Sunday")}
        </li>
      </ul>
    </div>
  );
}

export default BusinessHours;
