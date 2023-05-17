import { useEffect, useState } from "react";
import LineTo, { Line } from "react-lineto";
import { Planet } from "./Planet";
import React from "react";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from "react-redux";
import { getSolarSystem } from "../Redux/Actions/Planets_Actions";

export const Planets = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const planets = useSelector((state) => state.planets_data.planets);
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (planets === undefined || planets.length === 0) {
      dispatch(getSolarSystem());
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
                // aspectRatio: "1 / 1",
                height: "130vh",
                width: "130vw",
              }}
            >
              {planets ? (
                planets.map((planet, index) => {
                  // console.log(trajectory);
                  return <Planet key={index} planet={planet} index={index} />;
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
