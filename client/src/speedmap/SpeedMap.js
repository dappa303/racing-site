import React from "react";
import { useEffect, useState } from "react";
import Barriers from "./Barriers";
import Header from "./Header";
import Starters from "./Starters";
import Message from "./Message";
import Scratchings from "./Scratchings";
import NoMeetings from "./NoMeetings";
import getMeeting from "./server/getMeeting";
import updateCondition from "./server/updateCondition";
import updatePace from "./server/updatePace";
import updateMove from "./server/updateMove";
import getRacesConditions from "./utilities/getRacesConditions";
import getBarriers from "./utilities/getBarriers";
import getHorseType from "./utilities/getHorseType";
import getHorses from "./utilities/getHorses";
import changePace from "./utilities/changePace";
import changeCondition from "./utilities/changeCondition";
import changeHorses from "./utilities/changeHorses";
import "./speedmap.css";

function SpeedMap() {
  const [loading, setLoading] = useState(true);
  const [meeting, setMeeting] = useState(null);
  const [racesConditions, setRacesConditions] = useState([]);
  const [raceIndex, setRaceIndex] = useState(0);
  const [updateError, setUpdateError] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("OK");
  const [horses, setHorses] = useState([]);
  const [barriers, setBarriers] = useState([]);
  const [starters, setStarters] = useState([]);
  const [scratchings, setScratchings] = useState([]);

  useEffect(() => {
    setLoading(true);
    getMeeting(null, null).then((meet) => {
      setMeeting(meet);
    });
  }, []);

  useEffect(() => {
    if (meeting) {
      setLoading(true);
      if (!(meeting.noMeeting || meeting.loadError)) {
        setLoading(true);
        setRaceIndex(0);
        setRacesConditions(getRacesConditions(meeting.races));
        setHorses(getHorses(meeting.races));
      }
      setLoading(false);
    }
  }, [meeting]);

  useEffect(() => {
    if (horses.length > 0) {
      setBarriers(getBarriers(horses, raceIndex));
      setStarters(getHorseType(horses, raceIndex, false, 48));
      setScratchings(getHorseType(horses, raceIndex, true, 24));
    }
  }, [horses, raceIndex]);

  function onChangeMeeting(track, date) {
    getMeeting(track, date).then((meet) => {
      setMeeting(meet);
    });
  }

  function onChangeRace(raceInd) {
    setRaceIndex(raceInd);
  }

  function onChangePace(ind, pace) {
    setRacesConditions(changePace(racesConditions, ind, pace));
    updatePace(meeting.track, meeting.date, ind, pace).then((result) => {
      setUpdateError(result.updateError);
      if (result.updateError) {
        setUpdateMessage("Change of pace unsuccessful");
      } else {
        setUpdateMessage("Change of pace successful");
      }
    });
  }

  function onChangeCondition(ind, cond) {
    setRacesConditions(changeCondition(racesConditions, ind, cond));
    updateCondition(meeting.track, meeting.date, ind, cond).then((result) => {
      setUpdateError(result.updateError);
      if (result.updateError) {
        setUpdateMessage("Change of condition unsuccessful");
      } else {
        setUpdateMessage("Change of condition successful");
      }
    });
  }

  function onMove(horse, to) {
    let isScratched = to.type === "scratching" ? true : false;
    setHorses(changeHorses(horses, horse.horsesIndex, isScratched, to.index));
    updateMove(
      meeting.track,
      meeting.date,
      horse.raceIndex,
      horse.fieldIndex,
      isScratched,
      to.index
    ).then((result) => {
      setUpdateError(result.updateError);
      if (result.updateError) {
        setUpdateMessage("Move unsuccessful");
      } else {
        setUpdateMessage("Move successful");
      }
    });
  }

  if (loading) {
    return <div>...loading</div>;
  } else if (meeting.loadError) {
    return <div>error</div>;
  } else if (meeting.noMeeting) {
    return <NoMeetings />;
  } else {
    return (
      <div id="speedmap">
        <Barriers barriers={barriers} />
        <Header
          meeting={meeting}
          racesConditions={racesConditions}
          raceIndex={raceIndex}
          onChangeMeeting={onChangeMeeting}
          onChangeRace={onChangeRace}
          onChangePace={onChangePace}
          onChangeCondition={onChangeCondition}
        />
        <Starters rows="4" horses={starters} onMove={onMove} />
        <Message error={updateError} msg={updateMessage} />
        <Scratchings rows="2" horses={scratchings} onMove={onMove} />
      </div>
    );
  }
}

export default SpeedMap;
