import React from "react";
import AreaHeader from "./AreaHeader";
import HorseArea from "./HorseArea";

function Scratchings({ rows, horses, onMove }) {
  return (
    <div id="scratchings">
      <AreaHeader title="Scratchings" />
      <HorseArea
        rows={rows}
        horses={horses}
        type="scratching"
        onMove={onMove}
      />
    </div>
  );
}

export default Scratchings;
