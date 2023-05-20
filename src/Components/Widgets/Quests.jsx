import { useSelector } from "react-redux";

export const Quests = () => {
  const opacity = useSelector((state) => state.style_data.widgets_opacity);

  return (
    <div
      className="monospace widget text-center text-white p-1"
      style={{
        height: "max-content",
        width: "300px",
        left: "50px",
        top: "0",
        opacity: opacity,
      }}
    >
      Quests
    </div>
  );
};
