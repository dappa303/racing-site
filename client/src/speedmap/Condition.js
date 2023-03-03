import React from "react";
import { useState } from "react";

function Condition({ condition, raceIndex, onChangeCondition }) {
  const conditions = [
    { display: "Fast 1", cName: "fast-condition" },
    { display: "Fast 2", cName: "fast-condition" },
    { display: "Good 3", cName: "good-condition" },
    { display: "Good 4", cName: "good-condition" },
    { display: "Slow 5", cName: "slow-condition" },
    { display: "Slow 6", cName: "slow-condition" },
    { display: "Slow 7", cName: "slow-condition" },
    { display: "Heavy 8", cName: "heavy-condition" },
    { display: "Heavy 9", cName: "heavy-condition" },
    { display: "Heavy 10", cName: "heavy-condition" },
  ];
  const currentIndex = conditions.findIndex((c) => c.display === condition);
  const className = conditions[currentIndex].cName;
  return (
    <label id="condition">
      Condition:
      <select
        onChange={(e) => onChangeCondition(raceIndex, e.target.value)}
        value={condition}
        className={conditions[currentIndex].cName}
      >
        {conditions.map((c, index) => (
          <option
            className={conditions[index].cName}
            key={conditions[index].display}
            value={conditions[index].display}
          >
            {conditions[index].display}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Condition;
