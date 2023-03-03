import React from "react";

function Barrier({ horse, barrier }) {
  const imgSrc = () => "images/".concat(horse.silks);
  return (
    <div className="barrier">
      <div className="barrier-number">{barrier}</div>
      <img
        className="barrier-silks"
        src={"images/".concat(horse.silks)}
        alt="none"
      />
      <div className="barrier-name">
        {" "}
        {horse.number}.&nbsp;{horse.name}&nbsp;{horse.weight}kg
      </div>
      <div className="barrier-trainer">{horse.trainer}</div>
      <div className="barrier-jockey">{horse.jockey}</div>
    </div>
  );
}

export default Barrier;
