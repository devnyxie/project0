import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connectToSocket } from "./Redux/Actions/Socket_Actions";
import { Main_View } from "./Views/Main/Main_View";
import { Cabin_View } from "./Views/Testing/Cabin_View";
import { getUser } from "./Redux/Actions/User_Actions";
import { getSolarSystem } from "./Redux/Actions/Planets_Actions";
import { Loader } from "./Views/Loader/Loader";
function App() {
  const solar_system = useSelector((state) => state.planets_data.solar_system);
  const user = useSelector((state) => state.user_data.user);
  const dispatch = useDispatch();
  //connect to socket
  useEffect(() => {
    dispatch(connectToSocket());
  }, []);

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
