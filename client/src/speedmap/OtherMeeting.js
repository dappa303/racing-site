import React from "react";

function OtherMeeting({ track, date, onChangeMeeting }) {
  const formattedDate = new Date(date).toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <a
      href="#"
      className="other-meeting"
      onClick={() => onChangeMeeting(track, date)}
    >
      {track} {formattedDate}
    </a>
  );
}

export default OtherMeeting;
