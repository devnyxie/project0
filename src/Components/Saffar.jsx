import { BlurFilter } from "pixi.js";
import { Stage, Sprite, Container, Text } from "@pixi/react";
import { useEffect, useMemo, useRef, useState } from "react";

export const Saffar = (props) => {
  return (
    <div className="planet saffar" id="saffar" style={{ width: "max-content" }}>
      <div
        className="text-white rotate bg-black"
        style={{
          border: "1px dashed white",
          borderStyle: "dashed",
          borderRadius: "50%",
          height: "8rem",
          width: "8rem",
        }}
      ></div>
    </div>
  );
};
