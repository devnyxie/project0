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

export const Planets = (props) => {
  // const solar_system = useSelector((state) => state.planets_data.solar_system);
  const [startPoint] = React.useState({ x: 23, y: 50 });
  const [endPoint, setEndPoint] = React.useState({ x: 23, y: 50 });
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

  const dispatch = useDispatch();
  useEffect(() => {
    // if (solar_system === undefined || solar_system.length === 0) {
    dispatch(getSolarSystem());
    // } else {
    //   dispatch(
    //     TerminalOutput({ message: "Cosmic System Data is already retrieved." })
    //   );
    // }
  }, []);
  // const handlePlanetClick = (props) => {
  // const x1 = 50;
  // const y1 = 50;
  // const x2 = props.planet_position.left;
  // const y2 = props.planet_position.top;
  // const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  // setTargetPlanet(props.planet_name);
  // console.log(
  //   `The distance between the two planets is ${Math.round(distance)}vh.`
  // );
  // };

  const drawLineToPlanet = (event) => {
    const containerElement = document.getElementById(
      "solar-system-100-container"
    );
    const containerBounds = containerElement.getBoundingClientRect();
    const targetElement = event.target;
    const targetBounds = targetElement.getBoundingClientRect();

    const x =
      ((targetBounds.left - containerBounds.left + targetBounds.width / 2) /
        containerBounds.width) *
      100;
    const y =
      ((targetBounds.top - containerBounds.top + targetBounds.height / 2) /
        containerBounds.height) *
      100;

    setEndPoint({ x, y });
  };

  const handlePlanetClick = (event) => {
    drawLineToPlanet(event);
  };

  //
  //
  //
  //
  //
  function drawOrbitTrash(divId, trashAmount) {
    const div = document.getElementById(divId);

    // Clear existing trash
    div.innerHTML = "";

    const trashSizeMin = 2; // Minimum size of trash (pixels)
    const trashSizeMax = 4; // Maximum size of trash (pixels)
    const maxTrashPerRadius = 120; // Maximum number of trash elements per radius
    const radiusIncrement = 15; // Radius increment when moving to the next circle

    let radius = 215; // Initial radius of the circle (adjust as needed)
    let trashCount = 0; // Counter for the number of created trash elements

    for (let i = 0; i < trashAmount; i++) {
      const trash = document.createElement("div");
      trash.classList.add("center");

      const angle = (trashCount / maxTrashPerRadius) * Math.PI * 2;
      const randomDistance = Math.random() * (radiusIncrement - trashSizeMax);
      const x = Math.cos(angle) * (radius + randomDistance);
      const y = Math.sin(angle) * (radius + randomDistance);
      const trashSize =
        Math.floor(Math.random() * (trashSizeMax - trashSizeMin + 1)) +
        trashSizeMin;
      trash.style.width = trashSize + "px";
      trash.style.height = trashSize + "px";
      trash.style.transform = `translate(${x}px, ${y}px)`;

      setTimeout(() => {
        const randomBorderRadius = Math.floor(Math.random() * 50); // Random border-radius value between 0 and 50
        trash.style.borderRadius = `${randomBorderRadius}%`; // Apply the random border-radius value
        trash.classList.add("orbit-trash"); // Add the "orbit-trash" class after a delay
      }, Math.random() * 1000); // Random micro delay (0-1000 milliseconds)

      div.appendChild(trash);

      trashCount++;

      // Move to the next radius if the maximum number of trash elements per radius is reached
      if (trashCount >= maxTrashPerRadius) {
        radius += radiusIncrement;
        trashCount = 0; // Reset the trash counter for the new radius
      }
    }
  }

  useEffect(() => {
    drawOrbitTrash("orbit-trash-content", 120); // Adjust the desired number of trash elements
  }, []);

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
          // onWheelStart={(event) => dispatch(lowWidgetsOpacity())}
          // onWheelStop={(event) => dispatch(highWidgetsOpacity())}
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
                    style={{
                      stroke: "white",
                      strokeWidth: 0.2,
                      strokeDasharray: 0.3,

                      opacity: 0.5,
                    }}
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
