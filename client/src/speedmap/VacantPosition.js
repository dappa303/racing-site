import React from "react";
import { useDrop } from "react-dnd";

function VacantPosition({ index, type }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ["starter", "scratching"],
    drop: () => ({ to: { type: type, index: index } }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  let cName = "vacant-position";
  if (isOver) {
    cName = "vacant-position over";
  }
  return <div ref={drop} className={cName}></div>;
}

export default VacantPosition;
