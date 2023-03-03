import React from "react";

function StartersFooter(props) {
  const positions = [
    "Backmarker",
    "Off Midfield",
    "Midfield",
    "Off Pace",
    "On Pace",
    "Leader",
  ];
  const getClass = (ind) => {
    if (ind !== positions.length - 1) {
      return "starters-footer-cell non-end";
    } else {
      return "starters-footer-cell";
    }
  };

  return (
    <div id="starters-footer">
      {positions.map((pos, index) => (
        <div key={pos} className={getClass(index)}>
          {pos}
        </div>
      ))}
    </div>
  );
}

export default StartersFooter;
