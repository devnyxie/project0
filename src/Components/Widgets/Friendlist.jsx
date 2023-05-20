import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
export const Friendlist = () => {
  const opacity = useSelector((state) => state.style_data.widgets_opacity);

  return (
    <div
      className="monospace flex items-center justify-center widget text-center text-white p-1 relative"
      style={{
        height: "max-content",
        width: "300px",
        left: "50px",
        bottom: "0",
        opacity: opacity,
      }}
    >
      Friends
      <div className="absolute flex items-center  pe-2" style={{ right: "0" }}>
        <span className="text-xs opacity-50">
          Online: <span>3</span>
        </span>
      </div>
    </div>
  );
};
