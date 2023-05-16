export const Trajectory = (props) => {
  return (
    <div className={`trajectory relative trajectory-${props.index}`}>
      <div
        className="rotate-trajectory"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className={`${props.title}`}
          style={{
            position: "absolute",
            height: `${props.size}vh`,
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
      </div>
    </div>
  );
};
