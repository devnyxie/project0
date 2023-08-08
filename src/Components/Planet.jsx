import { RiCompassDiscoverLine } from "react-icons/ri";
import { useSelector } from "react-redux";
export const Planet = (props) => {
  console.log(props.planet)
  const user = useSelector((state) => state.user_data.user);
  return (
    <>
      <div
        className={`trajectory relative trajectory-${props.planet.planet_id}`}
      >
        <div style={{ height: "100%", width: "100%", zIndex: 1 }}></div>
      </div>

      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          height: `${props.planet.planet_size}%`,
          top: `${props.planet.planet_position_y}%`,
          left: `${props.planet.planet_position_x}%`,
          zIndex: 1,
        }}
      >
        <div className="planet-container relative w-full h-full">
          <div
            className="compass-container"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-10%",
              transform: "translate(-50%, 100%)",
              opacity:
                props.planet.planet_name === user.current_location &&
                props.planet.planet_name !== "sun"
                  ? 1
                  : 0,
              visibility:
                props.planet.planet_name === user.current_location &&
                props.planet.planet_name !== "sun"
                  ? "visible"
                  : "hidden",
              transition: "0.2s",
            }}
          >
            <RiCompassDiscoverLine
              size={25}
              style={{
                color: "white",
                opacity: 0.6,
                transform: "rotate(-45deg)",
              }}
            />
          </div>

          <div
            className={`planet rotate text-white bg-black ${props.planet.planet_name} `}
          >
            {/* spinning + background + planet itself */}
          </div>
          {props.planet.planet_name !== "sun" ? (
            <div
              className="center planet-actions"
              onClick={() => props.handlePlanetClick(props.planet)}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
