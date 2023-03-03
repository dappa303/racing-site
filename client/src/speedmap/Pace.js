import React from "react";

function Pace({ pace, raceIndex, onChangePace }) {
  const paces = ["Fast", "Solid", "Average", "Slow"];

  return (
    <label id="pace">
      Pace:
      <select
        onChange={(e) => onChangePace(raceIndex, e.target.value)}
        value={pace}
        className={pace.concat("-pace").toLowerCase()}
      >
        {paces.map((p, index) => (
          <option
            className={paces[index].concat("-pace").toLowerCase()}
            key={p}
            value={p}
          >
            {p}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Pace;
