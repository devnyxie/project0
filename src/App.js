import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Planets } from "./Components/Planets";
import { Widgets } from "./Components/Layers/Widgets";
import { useDispatch } from "react-redux";
import { connectToSocket } from "./Redux/Actions/Socket_Actions";
import { Main_View } from "./Views/Main/Main_View";
import { Cabin_View } from "./Views/Testing/Cabin_View";
function App() {
  const dispatch = useDispatch();
  //connect to socket
  useEffect(() => {
    dispatch(connectToSocket());
  });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main_View />} />
          <Route path="/cabin-view" element={<Cabin_View />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
