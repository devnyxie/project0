import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions/User_Actions";
import { getSolarSystem } from "../../Redux/Actions/Planets_Actions";
import { LoaderFunc } from "../../Redux/Actions/Loader";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loaded = useSelector((state) => state.loader_data.loaded);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loaded) {
      dispatch(LoaderFunc());
      console.log("Loaded started.");
    }
  }, []);

  return (
    <div
      className={`relative flex-center text-white loader-component loader-container `}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <div className={`trajectory relative`} style={{ height: "20vh" }}>
        <div className="center" style={{ animation: "opacity 2s infinite" }}>
          Loading...
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            animation: "rotation-trajectory 10s infinite linear",
          }}
        >
          <div
            className={`planet`}
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: `5vh`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
