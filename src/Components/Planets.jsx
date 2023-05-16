import { useEffect, useState } from "react";
import LineTo, { Line } from "react-lineto";
import { Trajectory } from "./Trajectory";
import React from "react";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Planets = (props) => {
  const trajectories = [
    {
      title: "sun",
      size: 12,
    },
    {
      title: "solaris",
      size: 5,
    },
    {
      title: "saffar",
      size: 7,
    },
    {
      title: "haik",
      size: 10,
    },
    {
      title: "draugr",
      size: 12,
    },
    {
      title: "wadirum",
      size: 7,
    },
  ];
  return (
    <div
      className="bg-transparent absolute "
      style={{ height: "100%", width: "100%" }}
    >
      <div style={{ height: "100vh", width: "100vw" }}>
        {trajectories.map((trajectory, index) => {
          console.log(trajectory);
          return (
            <Trajectory
              key={index}
              size={trajectory.size}
              title={trajectory.title}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
