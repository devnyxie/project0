import { useEffect, useState } from "react";
import LineTo, { Line } from "react-lineto";
import { Planet } from "./Planet";
import React from "react";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from "react-redux";
import { getSolarSystem } from "../Redux/Actions/Planets_Actions";
import { TerminalOutput } from "../Redux/Actions/Terminal_Actions";

export const Planets = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const solar_system = useSelector((state) => state.planets_data.solar_system);
  const messages = useSelector(
    (state) => state.terminal_data.terminal_messages
  );
  console.log(solar_system);
  const dispatch = useDispatch();
  useEffect(() => {
    if (solar_system === undefined || solar_system.length === 0) {
      dispatch(getSolarSystem());
    } else {
      dispatch(
        TerminalOutput({ message: "Cosmic System Data is already retrieved." })
      );
    }
  }, []);
  //
  //
  //
  //
  //
  const handlePlanetClick = (planet) => {
    console.log(planet);
    // setCurrentPlanet(planet); // Update the currentPlanet in the state
  };
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
        <TransformWrapper centerOnInit={true}>
          <TransformComponent
            wrapperStyle={{
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "130vh",
                width: "130vw",
              }}
            >
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
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
