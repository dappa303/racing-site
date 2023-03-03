import React from "react";
import Horse from "./Horse";
import VacantPosition from "./VacantPosition";

function HorseCell({ horse, rows, index, type, onMove }) {
  const COLS = 12;

  let cName = "horse-cell";
  if (index >= COLS * (rows - 1)) cName = cName.concat(" bottom");
  if (index % COLS === 11) cName = cName.concat(" end");
  return (
    <div className={cName}>
      {horse ? (
        <Horse horse={horse} type={type} onMove={onMove} />
      ) : (
        <VacantPosition index={index} type={type} />
      )}
    </div>
  );
}

export default HorseCell;
