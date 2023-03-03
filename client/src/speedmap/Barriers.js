import React from "react";
import Barrier from "./Barrier";

function Barriers({ barriers }) {
  return (
    <div id="barriers">
      {barriers.map((horse, index) => (
        <Barrier key={horse.number} horse={horse} barrier={index + 1} />
      ))}
    </div>
  );
}

export default Barriers;
