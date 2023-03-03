import React from "react";
import RaceNumbers from "./RaceNumbers";
import LinkTo from "./LinkTo";
import Track from "./Track";
import Rail from "./Rail";
import Race from "./Race";
import Pace from "./Pace";
import Condition from "./Condition";

function Header({
  meeting,
  racesConditions,
  raceIndex,
  onChangeMeeting,
  onChangeRace,
  onChangePace,
  onChangeCondition,
}) {
  return (
    <div id="header">
      <RaceNumbers
        races={meeting.races}
        raceIndex={raceIndex}
        onChangeRace={onChangeRace}
      />
      <LinkTo />
      <Track meeting={meeting} onChangeMeeting={onChangeMeeting} />
      <Rail meeting={meeting} />
      <Race race={meeting.races[raceIndex]} />
      <Pace
        pace={racesConditions[raceIndex].pace}
        raceIndex={raceIndex}
        onChangePace={onChangePace}
      />
      <Condition
        condition={racesConditions[raceIndex].condition}
        raceIndex={raceIndex}
        onChangeCondition={onChangeCondition}
      />
    </div>
  );
}

export default Header;
