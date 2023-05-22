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
import { drawOrbitTrash } from "./Functions/OrbitTrash";
import { drawLineToPlanet } from "./Functions/LineToPlanet";
import { CHANGE_ASTEROID_DENSITY } from "../Redux/Actions/Settings_Actions";

export const Planets = (props) => {
  // const solar_system = useSelector((state) => state.planets_data.solar_system);
  const asteroid_density = useSelector(
    (state) => state.settings_data.asteroid_density
  );

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

  const handlePlanetClick = (event) => {
    drawLineToPlanet(event, { setEndPoint });
  };
  useEffect(() => {
    console.log(asteroid_density.value);
    if (asteroid_density.value) {
      drawOrbitTrash("orbit-trash-content", asteroid_density.value); // Adjust the desired number of asteroids
    } else {
      dispatch({
        type: CHANGE_ASTEROID_DENSITY,
        payload: { setting: "medium", value: 120 },
      });
    }
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
