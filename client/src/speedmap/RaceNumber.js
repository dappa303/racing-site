import React from "react";

function RaceNumber({ raceNumber, raceIndex, selectedIndex, onChangeRace }) {
  return (
    <div
      className={
        raceIndex === selectedIndex ? "race-number selected" : "race-number"
      }
      onClick={() => onChangeRace(raceIndex)}
    >
      {raceNumber}
    </div>
  );
}

export default RaceNumber;
