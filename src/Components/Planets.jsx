import { useEffect, useState, useRef } from "react";
import LineTo, { Line } from "react-lineto";
import { Planet } from "./Planet";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from "react-redux";
import { getSolarSystem } from "../Redux/Actions/Planets_Actions";
import { TerminalOutput } from "../Redux/Actions/Terminal_Actions";
import {
  highWidgetsOpacity,
  lowWidgetsOpacity,
} from "../Redux/Actions/Style_Actions";
import { createAsteroids } from "./Functions/Asteroids";
import { drawLineToPlanet } from "./Functions/LineToPlanet";
import { CHANGE_ASTEROID_DENSITY } from "../Redux/Actions/Settings_Actions";
import { changeLocation, getUser } from "../Redux/Actions/User_Actions";
import { findObjectByValue } from "./Functions/FindObjInArr";
import { findLocation } from "./Functions/findLocation";
import { insertDotAfterFirstChar } from "./Functions/insertDotAfterFirstChar";

export const Planets = (props) => {
  const dispatch = useDispatch();
  const solar_system = useSelector((state) => state.planets_data.solar_system);
  const user = useSelector((state) => state.user_data.user);
  const [position, setPosition] = useState({});
  useEffect(() => {
    dispatch(getUser());
    dispatch(getSolarSystem());
    // dispatch(TerminalOutput({ message: position }));
  }, []);

  useEffect(() => {
    if (solar_system.length > 0 && Object.keys(user).length > 0) {
      setPosition(findLocation(solar_system, user));
      console.log(position);
    }
  }, [solar_system, user]);
  const [timeToTravel, setTimeToTravel] = useState(10);
  const asteroid_density = useSelector(
    (state) => state.settings_data.asteroid_density
  );
  //line
  const [startPoint] = React.useState({ x: 23, y: 50 });
  const [endPoint, setEndPoint] = React.useState({ x: 23, y: 50 });
  //line end

  //line func
  // const handlePlanetClick = (event) => {
  //   drawLineToPlanet(event, { setEndPoint });
  // };
  //line end

  //create asteroids
  useEffect(() => {
    console.log(asteroid_density.value);
    if (asteroid_density.value) {
      createAsteroids("orbit-trash-content", asteroid_density.value); // Adjust the desired number of asteroids
    } else {
      dispatch({
        type: CHANGE_ASTEROID_DENSITY,
        payload: { setting: "medium", value: 120 },
      });
    }
  }, [asteroid_density]);
  //end asteroids
  //move to planet
  const handlePlanetClick = (props) => {
    console.log("handleClick", user);
    const location = findObjectByValue(solar_system, user.current_location);
    const x1 = location.planet_position.left;
    const y1 = location.planet_position.top;
    const x2 = props.planet_position.left;
    const y2 = props.planet_position.top;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    setTimeToTravel(Math.round(distance));
    dispatch(
      TerminalOutput({
        message: `Calculations were successful, you will arrive approximetely in ${insertDotAfterFirstChar(
          distance
        )}s`,
      })
    );

    const animatePixel = (finalX, finalY) => {
      setPosition({ x: finalX, y: finalY });
    };

    animatePixel(x2, y2); // Example usage
    console.log(props.planet_name);
    dispatch(changeLocation(props.planet_name));
  };
  const { x, y } = position;

  //end move to planet

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
        className="center"
      >
        <TransformWrapper
          centerOnInit={true}
          doubleClick={{
            disabled: "true",
          }}
          onPanning={(event) => dispatch(lowWidgetsOpacity())}
          onPanningStop={(event) => dispatch(highWidgetsOpacity())}
        >
          <TransformComponent
            wrapperStyle={{
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "130vh",
                // aspectRatio: 1 / 1,
                width: "130vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="solar-system-100-container"
                id="solar-system-100-container"
                style={{
                  height: "100vh",
                  aspectRatio: 1 / 1,
                  position: "relative",
                }}
              >
                <div
                  id="spaceship"
                  style={{
                    width: "3px",
                    height: "3px",
                    background: "white",
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transition: `left ${insertDotAfterFirstChar(
                      timeToTravel
                    )}s linear, top ${insertDotAfterFirstChar(
                      timeToTravel
                    )}s linear`,
                  }}
                ></div>
                {/* <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <line
                    x1={startPoint.x}
                    y1={startPoint.y}
                    x2={endPoint.x}
                    y2={endPoint.y}
                    style={{
                      stroke: "white",
                      strokeWidth: 0.2,
                      strokeDasharray: 0.3,

                      opacity: 0.5,
                    }}
                  />
                </svg> */}
                {solar_system ? (
                  solar_system.map((planet, index) => {
                    return (
                      <Planet
                        key={index}
                        planet={planet}
                        index={index}
                        handlePlanetClick={handlePlanetClick}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
                <div
                  className="center"
                  style={{ aspectRatio: 1 / 1, height: "50vh" }}
                  id="orbit"
                >
                  <div id="orbit-trash-content" className="w-full h-full"></div>
                </div>
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
