import { useEffect, useState, useRef } from "react";
import LineTo, { Line } from "react-lineto";
import { Planet } from "./Planet";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from "react-redux";
import { getSolarSystem } from "../Redux/Actions/Planets_Actions";
import { TerminalOutput } from "../Redux/Actions/Terminal_Actions";

export const Planets = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [targetPlanet, setTargetPlanet] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState("haik");

  // const solar_system = useSelector((state) => state.planets_data.solar_system);
  const solar_system = [
    {
      planet_id: 7,
      planet_name: "solo",
      planet_position: { left: 50, top: 0 },
      planet_size: "12",
      cities: ["Aurora Prime", "Celestia"],
    },
    {
      planet_id: 6,
      planet_name: "wadirum",
      planet_position: { left: 100, top: 50 },
      planet_size: "7",
      cities: ["Crystalline Oasis", "Luminary Sands"],
    },
    {
      planet_id: 5,
      planet_name: "draugr",
      planet_position: { left: 50, top: 100 },
      planet_size: "12",
      cities: ["Obsidian Citadel", "Eclipseville", "Nocturnia"],
    },
    {
      planet_id: 4,
      planet_name: "haik",
      planet_position: { left: 23, top: 50 },
      planet_size: "10",
      cities: ["Nebula Heights", "Nova Haven"],
    },
    {
      planet_id: 3,
      planet_name: "saffar",
      planet_position: { left: 68, top: 42 },
      planet_size: "7",
      cities: ["Asteria", "Sandsea Settlement", "Sandstorm Outpost"],
    },
    {
      planet_id: 2,
      planet_name: "solaris",
      planet_position: { left: 43, top: 60 },
      planet_size: "5",
      cities: ["Solaris Station", "Solstice Springs"],
    },
    {
      planet_id: 1,
      planet_name: "sun",
      planet_position: { left: 50, top: 50 },
      planet_size: "12",
    },
  ];
  const messages = useSelector(
    (state) => state.terminal_data.terminal_messages
  );
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
  const handlePlanetClick = (props) => {
    // const x1 = 50;
    // const y1 = 50;
    // const x2 = props.planet_position.left;
    // const y2 = props.planet_position.top;
    // const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    // setTargetPlanet(props.planet_name);
    // console.log(
    //   `The distance between the two planets is ${Math.round(distance)}vh.`
    // );
  };

  const containerRef = React.useRef(null);
  const [startPoint] = React.useState({ x: 50, y: 50 });
  const [endPoint, setEndPoint] = React.useState({ x: 23, y: 50 });

  const handleContainerClick = (event) => {
    const containerBounds = containerRef.current.getBoundingClientRect();
    const x =
      ((event.clientX - containerBounds.left) / containerBounds.width) * 100;
    const y =
      ((event.clientY - containerBounds.top) / containerBounds.height) * 100;
    setEndPoint({ x, y });
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
                border: "1px solid red",
                aspectRatio: 1 / 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="solar-system-100-container"
                onClick={handleContainerClick}
                ref={containerRef}
                style={{
                  height: "100vh",
                  border: "1px solid white",
                  aspectRatio: 1 / 1,
                  position: "relative",
                }}
              >
                <LineTo
                  from={currentPlanet}
                  to={targetPlanet}
                  within="solar-system-100-container"
                  stroke={"white"}
                  strokeWidth={2}
                  zIndex={0}
                  borderColor={"white"}
                  borderStyle={"dashed"}
                  className={"line"}
                  delay={0}
                />
                <svg
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
                    style={{ stroke: "red", strokeWidth: 2 }}
                  />
                </svg>
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
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
