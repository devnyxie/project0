import { useEffect, useState } from "react";
import "./App.css";
import { Stars } from "./Components/Stars";
import { Planets } from "./Components/Planets";
import { General_Chat } from "./Components/Widgets/General_Chat";
import { Quests } from "./Components/Widgets/Quests";
import { Time } from "./Components/Widgets/Time";
import { Widgets } from "./Components/Layers/Widgets";
import { useDispatch } from "react-redux";
import { connectToSocket } from "./Redux/Actions/Socket_Actions";
function App() {
  const dispatch = useDispatch();
  //connect to socket
  useEffect(() => {
    dispatch(connectToSocket());
  });
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
      <Widgets />
      {/* <General_Chat />
      <Quests />
      <Time /> */}
    </div>
  );
}

export default App;
