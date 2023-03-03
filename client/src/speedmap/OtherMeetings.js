import React from "react";
import OtherMeeting from "./OtherMeeting";

function OtherMeetings({ meetings, onChangeMeeting }) {
  if (!meetings) {
    return (
      <div>
        <p>no other meetings</p>
      </div>
    );
  }

  const listMeetings = meetings.map((m) => (
    <OtherMeeting
      key={m.track.concat(m.date)}
      track={m.track}
      date={m.date}
      onChangeMeeting={onChangeMeeting}
    />
  ));

  return <>{listMeetings}</>;
}

export default OtherMeetings;
