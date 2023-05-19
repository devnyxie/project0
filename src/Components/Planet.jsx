export const Planet = (props) => {
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
        // className={`${props.planet.planet_name}`}

        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          border: "1px solid red",
          height: `${props.planet.planet_size}vh`,
          top: `${props.planet.planet_position.top}%`,
          left: `${props.planet.planet_position.left}%`,
          zIndex: 1,
        }}
      >
        <div
          onClick={props.handlePlanetClick.bind(null, props.planet)}
          className={`planet rotate text-white bg-black ${props.planet.planet_name}`}
        ></div>
      </div>
    </>
  );
};
