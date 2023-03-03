import React from "react";
import AreaHeader from "./AreaHeader";
import StartersFooter from "./StartersFooter";
import HorseArea from "./HorseArea";

function Starters({ rows, horses, onMove }) {
  return (
    <div id="starters">
      <AreaHeader title="Speedmap" />
      <HorseArea rows={rows} horses={horses} type="starter" onMove={onMove} />
      <StartersFooter />
    </div>
  );
}

export default Starters;
