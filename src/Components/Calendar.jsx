import React from "react";

import moment from "moment";
import icsToJson from "ics-to-json";

// Get ICS text however you like, example below
// Make sure you have the right CORS settings if needed
// const convert = async fileLocation => {
//   const icsRes = await fetch(fileLocation);
//   const icsData = await icsRes.text();
//   // Convert
//   const data = icsToJson(icsData);
//   return data;
// };

export default class Calendar extends React.Component {
  state = {
    events: []
  };

  render() {
    return (
      <div className="container">
        <h2>Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=alexandr.grinevich00%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York"
          style={{ borderWidth: 0 }}
          className="h-100 w-100 calendar-frame"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}
