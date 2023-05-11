import { useEffect, useMemo, useRef, useState } from "react";

export const Haik = (props) => {
  return (
    <div className="planet haik" id="haik" style={{ width: "max-content" }}>
      <div
        className="text-white rotate bg-black"
        style={{
          border: "1px dashed white",
          borderStyle: "dashed",
          borderRadius: "50%",
          height: "10rem",
          width: "10rem",
        }}
      ></div>
    </div>
  );
};
