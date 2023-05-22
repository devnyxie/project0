import { Planet } from "../../Components/Planet";
import CanvasComponent from "./CanvasComponent";

export const Cabin_View = () => {
  const planet_data = [
    {
      planet_id: 4,
      planet_name: "test",
      planet_position: { left: 60, top: 50 },
      planet_size: "80",
    },
  ];
  return (
    <div
      className="bg-transparent relative"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {planet_data ? (
        planet_data.map((planet, index) => {
          return <Planet key={index} planet={planet} index={index} />;
        })
      ) : (
        <></>
      )}
      <CanvasComponent />
    </div>
  );
};
