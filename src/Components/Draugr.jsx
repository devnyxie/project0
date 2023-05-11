import { useEffect, useMemo, useRef, useState } from "react";

export const Draugr = (props) => {
  return (
    <div className="planet draugr" id="draugr" style={{ width: "max-content" }}>
      <div
        className="text-white rotate bg-black"
        style={{
          border: "1px dashed white",
          borderStyle: "dashed",
          borderRadius: "50%",
          height: "11rem",
          width: "11rem",
        }}
      ></div>
    </div>
  );
};
