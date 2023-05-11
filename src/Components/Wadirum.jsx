import { useEffect, useMemo, useRef, useState } from "react";

export const Wadirum = (props) => {
  return (
    <div
      className="planet wadirum"
      id="wadirum"
      style={{ width: "max-content" }}
    >
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
