import React from "react";
import OtherMeetings from "./OtherMeetings";

function Track({ meeting, onChangeMeeting }) {
  const meetings = meeting.otherMeetings;

  return (
    <div id="track-date">
      <div className="dropdown">
        <div className="dropdown-head">
          {meeting.track}&nbsp;-&nbsp;
          {new Date(meeting.date).toLocaleDateString("en-AU", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="dropdown-content">
          <OtherMeetings
            meetings={meetings}
            onChangeMeeting={onChangeMeeting}
          />
        </div>
      </div>
    </div>
  );
}

export default Track;
