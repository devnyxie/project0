import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoaderFunc } from "../../Redux/Actions/Loader";

export const Loader = () => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(LoaderFunc());
  //   }, []);
  return (
    <div
      className="absolute"
      style={{
        width: "100vh",
        height: "100vw",
        backgroundColor: "red",
      }}
    ></div>
  );
};
