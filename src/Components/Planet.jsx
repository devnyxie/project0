import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiCompass } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Tooltip } from "./Tooltip/Tooltip";
export const Planet = (props) => {
  // const location = useSelector((state) => state.player_data.current_location);
  const location = "haik";
  return (
    <>
      <div
        className={`trajectory relative trajectory-${props.planet.planet_id}`}
      >
        <div
          className="rotate-trajectory"
          style={{ height: "100%", width: "100%", zIndex: 1 }}
        ></div>
      </div>

      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          height: `${props.planet.planet_size}%`,
          top: `${props.planet.planet_position.top}%`,
          left: `${props.planet.planet_position.left}%`,
          zIndex: 1,
        }}
      >
        <div className="planet-container relative w-full h-full">
          {props.planet.planet_name === location &&
          props.planet.planet_name !== "sun" ? (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-10%",
                transform: "translate(-50%, 100%)",
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
          ) : (
            <></>
          )}

          <div
            className={`planet rotate text-white bg-black ${props.planet.planet_name} `}
          >
            {/* spinning + background + planet itself */}
          </div>
          {props.planet.planet_name !== "sun" ? (
            <div
              className="center planet-actions"
              onClick={props.handlePlanetClick}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
