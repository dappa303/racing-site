import React from "react";
import HorseCell from "./HorseCell";

function HorseArea({ rows, horses, type, onMove }) {
  return (
    <div id={type.concat("-area")}>
      {horses.map((horse, index) => (
        <HorseCell
          key={type.concat(index)}
          horse={horse}
          rows={rows}
          index={index}
          type={type}
          onMove={onMove}
        />
      ))}
    </div>
  );
}

export default HorseArea;
