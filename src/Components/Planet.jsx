export const Planet = (props) => {
  const handleClick = () => {
    props.handlePlanetClick("title");
  };
  return (
    <div className={`trajectory relative trajectory-${props.index}`}>
      <div
        className="rotate-trajectory"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className={`${props.planet.planet_name}`}
          style={{
            position: "absolute",
            height: `${props.planet.planet_size}vh`,
          }}
        >
          <div
            onClick={handleClick}
            className={`planet rotate text-white bg-black `}
          ></div>
        </div>
      </div>
    </div>
  );
};
