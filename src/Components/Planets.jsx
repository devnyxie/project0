import { useEffect, useState } from "react";
import { Haik } from "./Haik";
import { Saffar } from "./Saffar";
import { Ursus } from "./Ursus";
import LineTo, { Line } from "react-lineto";

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
  return (
    <div
      className="bg-transparent absolute"
      style={{ height: "100%", width: "100%" }}
    >
      <Haik />
      <Ursus />
      <Saffar />
      {/*--- lines ---*/}
      <LineTo
        from="haik"
        to="ursus"
        stroke={"white"}
        strokeWidth={2}
        zIndex={0}
        borderColor={"white"}
        borderStyle={"dashed"}
        className={"line"}
        delay={0}
      />
      <LineTo
        from="haik"
        to="saffar"
        stroke={"white"}
        strokeWidth={2}
        zIndex={0}
        borderColor={"white"}
        borderStyle={"dashed"}
        className={"line"}
        delay={0}
      />
      <LineTo
        from="saffar"
        to="ursus"
        stroke={"white"}
        strokeWidth={2}
        zIndex={0}
        borderColor={"white"}
        borderStyle={"dashed"}
        className={"line"}
        delay={0}
      />
    </div>
  );
};
