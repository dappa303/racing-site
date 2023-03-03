import React from "react";

function Race({ race }) {
  return (
    <div id="race">
      {race.details}
      <br />
      {race.raceClass}
    </div>
  );
}

export default Race;
