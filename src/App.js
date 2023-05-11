import { useEffect, useState } from "react";
import "./App.css";
import { Stars } from "./Components/Stars";
import { Planets } from "./Components/Planets";
function App() {
  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      alert(
        "Please use Landscape mode, this project is not optimized for Portrait mode yet."
      );
    }
  });

  return (
    <div
      className="bg-transparent relative"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Stars />
      <Planets />
    </div>
  );
}

export default App;
