import { useEffect, useState } from "react";
import { Haik } from "./Haik";
import { Saffar } from "./Saffar";
import { Ursus } from "./Ursus";
import LineTo, { Line } from "react-lineto";
import { Draugr } from "./Draugr";
import { Wadirum } from "./Wadirum";
import { Trajectory } from "./Trajectory";

export const Planets = (props) => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const linesData = [
    { from: "haik", to: "ursus" },
    { from: "haik", to: "saffar" },
    { from: "saffar", to: "ursus" },
    { from: "haik", to: "draugr" },
    { from: "draugr", to: "saffar" },
  ];

  //
  //
  //
  //
  //add positions!
  //we will pass size as a prop to trajectory when we gonna map!
  const trajectories = [
    {
      size: 0,
      planets: [{ title: "sun", size: 12 }],
    },
    {
      size: 25,
      planets: [{ title: "solaris", size: 5 }],
    },
    {
      size: 40,
      planets: [{ title: "saffar", size: 7 }],
    },
    {
      size: 60,
      planets: [{ title: "haik", size: 6 }],
    },
    {
      size: 75,
      planets: [
        { title: "wadirum", size: 6 },
        { title: "ursus", size: 6 },
      ],
    },
    {
      size: 88,
      planets: [
        { title: "draugr", size: 10 },
        { title: "colosseum", size: 9 },
      ],
    },
  ];

  return (
    <div
      className="bg-transparent absolute"
      style={{ height: "100%", width: "100%", overflow: "hidden" }}
    >
      {trajectories.map((trajectory) => {
        return (
          <Trajectory size={trajectory.size} planets={trajectory.planets} />
        );
      })}

      {/* {linesData.map((line, index) => {
        return (
          <LineTo
            key={index}
            from={line.from}
            to={line.to}
            stroke={"white"}
            strokeWidth={2}
            zIndex={0}
            borderColor={"#707070"}
            borderStyle={"dashed"}
            className={"line"}
            delay={0}
          />
        );
      })} */}
    </div>
  );
};
