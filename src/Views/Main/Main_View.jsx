import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Planets } from "../../Components/Planets";
import { Widgets } from "../../Components/Layers/Widgets";
export const Main_View = () => {
  return (
    <div
      className="bg-transparent relative"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <Planets />
      <Widgets />
    </div>
  );
};
