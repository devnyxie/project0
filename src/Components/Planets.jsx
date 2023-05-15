import { useEffect, useState } from "react";
import LineTo, { Line } from "react-lineto";
import { Trajectory } from "./Trajectory";
import { ConnectLine } from "./ConnectLine";
import { useDispatch, useSelector } from "react-redux";
import { getSolarSystem } from "../Redux/Actions/Planets";
export const Planets = (props) => {
  const dispatch = useDispatch();
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);
  const trajectories_from_pg = useSelector((state) => state?.solar_system);
  // useEffect(() => {
  //   function handleResize() {
  //     setContainerWidth(window.innerWidth);
  //     setContainerHeight(window.innerHeight);
  //   }
  //   window.addEventListener("resize", handleResize);

  //   setSaffar("saffar");
  //   setHaik("haik");
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  const trajectories = [
    {
      planets: [{ title: "sun", size: 12 }],
    },
    {
      planets: [{ title: "solaris", size: 5 }],
    },
    {
      planets: [{ title: "saffar", size: 7 }],
    },
    {
      planets: [{ title: "haik", size: 6 }],
    },
    {
      planets: [
        { title: "wadirum", size: 6 },
        { title: "ursus", size: 6 },
      ],
    },
    {
      planets: [
        { title: "draugr", size: 10 },
        { title: "colosseum", size: 9 },
      ],
    },
  ];
  useEffect(() => {
    const data = dispatch(getSolarSystem());
    console.log(data);
  }, []);
  useEffect(() => {
    console.log(trajectories_from_pg);
  });
  return (
    <div
      className="bg-transparent absolute"
      style={{ height: "100%", width: "100%", overflow: "hidden" }}
    >
      {trajectories.map((trajectory, index) => {
        return <Trajectory planets={trajectory.planets} index={index} />;
      })}
    </div>
  );
};
