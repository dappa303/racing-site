import React from "react";
import RaceNumber from "./RaceNumber";

function RaceNumbers({ races, raceIndex, onChangeRace }) {
  return (
    <div id="numbers">
      {races.map((race, index) => (
        <RaceNumber
          key={race.number}
          raceNumber={race.number}
          raceIndex={index}
          selectedIndex={raceIndex}
          onChangeRace={onChangeRace}
        />
      ))}
    </div>
  );
}

export default RaceNumbers;
