import { useEffect, useState } from "react";
import LineTo, { Line } from "react-lineto";
import { Trajectory } from "./Trajectory";
import React from "react";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Planets = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    {
      title: "solo",
      size: 12,
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          border: "1px solid red",
        }}
        className="center"
      >
        <TransformWrapper centerOnInit={true}>
          <TransformComponent
            centerOnInit={true}
            wrapperStyle={{
              height: "100%",
              width: "100%",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
            // contentClass="wrapper-react-zoom-pan-pinch"
            // contentStyle={{}}
          >
            <div
              style={{
                aspectRatio: 1 / 1,
                height: "150vh",
              }}
            >
              {trajectories.map((trajectory, index) => {
                // console.log(trajectory);
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
            {/* <img
          src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-842711.jpg&fm=jpg"
          style={{ height: "100vh", width: "100vw" }}
        /> */}
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
