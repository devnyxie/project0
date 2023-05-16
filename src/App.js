import { useEffect, useState } from "react";
import "./App.css";
import { Stars } from "./Components/Stars";
import { Planets } from "./Components/Planets";
function App() {
  return (
    <div
      className="bg-transparent relative"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <Planets />
    </div>
  );
}

export default App;
