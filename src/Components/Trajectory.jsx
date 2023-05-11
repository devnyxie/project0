export const Trajectory = (props) => {
  console.log(props.planets);
  return (
    <div className="trajectory relative " style={{ height: `${props.size}vh` }}>
      <div
        className="rotate-trajectory"
        style={{ height: "100%", widht: "100%" }}
      >
        {props.planets.map((planet, index) => {
          return (
            <div
              key={index}
              className={`planet ${planet.title}`}
              style={{
                position: "absolute",
                height: `${planet.size}vh`,
              }}
            >
              <div
                className={`planet rotate text-white bg-black `}
                style={{
                  border: "1px dashed white",
                  borderStyle: "dashed",
                  borderRadius: "50%",
                  height: `100%`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
