import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export const Time = () => {
  const opacity = useSelector((state) => state.style_data.widgets_opacity);
  const [time, setTime] = useState("Loading...");
  const [hours, setHours] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      setTime(
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
      setHours(today.getHours());
    };
    // Call updateTime immediately
    updateTime();
    // Schedule updateTime to be called every second
    const interval = setInterval(updateTime, 1000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="flex justify-center items-center monospace widget text-center text-white time-widget p-1 relative"
      style={{ opacity: opacity, top: 0, left: "50%" }}
    >
      {time}
      <div className="absolute flex" style={{ right: "5%" }}>
        {/* {hours >} */}

        {hours >= 6 && hours <= 20 ? (
          <IoSunnyOutline size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </div>
    </div>
  );
};
