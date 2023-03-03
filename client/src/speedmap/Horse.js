import React from "react";
import { useDrag } from "react-dnd";

function Horse({ horse, type, onMove }) {
  const [, drag] = useDrag(
    () => ({
      type: type,
      item: { horse: horse },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          onMove(item.horse, dropResult.to);
        }
      },
    }),
    [horse]
  );
  return (
    <div ref={drag} className="horse">
      <img
        className="horse-silks"
        src={"images/".concat(horse.silks)}
        alt="none"
      />
      {type === "starter" ? (
        <div className="horse-barrier">
          {horse.number}&nbsp;({horse.effectiveBarrier})
        </div>
      ) : (
        <div className="horse-barrier">
          {horse.number}&nbsp;(
          <span className="horse-barrier scratching">{horse.barrier}</span>)
        </div>
      )}
      <div className="horse-name">{horse.name}</div>
    </div>
  );
}

export default Horse;
