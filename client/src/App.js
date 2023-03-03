import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeedMap from "./speedmap/SpeedMap";
import Review from "./review/Review";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="speedmap" element={<SpeedMap />} />
          <Route path="/" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}
export default App;
