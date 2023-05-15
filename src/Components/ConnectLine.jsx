import LineTo, { Line } from "react-lineto";

export const ConnectLine = (props) => {
  return (
    <LineTo
      from={props.from}
      to={props.to}
      stroke={"white"}
      strokeWidth={2}
      zIndex={"0"}
      borderColor={"#707070"}
      borderStyle={"dashed"}
      className={"line"}
      delay={0}
    />
  );
};
