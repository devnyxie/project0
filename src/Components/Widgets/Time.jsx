import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const Time = () => {
  const [time, setTime] = useState("Loading...");
  let hours;
  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      hours = today.getHours();

      setTime(
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
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
    <div className="flex justify-center items-center monospace widget text-center text-white time-widget center-top p-1 relative">
      {time}
      <div className="absolute flex" style={{ right: "5%" }}>
        {/* {hours >} */}
        {hours > 6 && hours < 20 ? (
          <IoSunnyOutline size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </div>
    </div>
  );
};
