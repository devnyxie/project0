import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { changeAsteroidDensity } from "../../../../Redux/Actions/Settings_Actions";

export const SettingsModal = (props) => {
  const current_density = useSelector(
    (state) => state.settings_data.asteroid_density
  );
  
  const [localDensity, setLocalDensity] = useState(current_density.setting || "high");
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!current_density.setting) {
      dispatch(changeAsteroidDensity("high"));
    }
  }, [current_density.setting, dispatch]);

  const changeAsteroidDensityFunc = (setting) => {
    setLocalDensity(setting.toLowerCase());
    dispatch(changeAsteroidDensity(setting.toLowerCase()));
  };

  return (
    <div
      className="monospace text-left text-white p-1 transform-center center"
      style={{
        height: "100%",
        width: "100%",
        display: props.show ? "block" : "none",
        zIndex: 5,
      }}
    >
      <div
        style={{
          width: "30vh",
          height: "40vh",
          backgroundColor: "black",
          position: "relative",
        }}
        className="widget-menu center p-2"
      >
        <div>
          <label className="block text-sm font-medium leading-6 text-white">
            Asteroid Belt Density
          </label>
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={localDensity}
            onChange={(e) => changeAsteroidDensityFunc(e.target.value)}
          >
            {["Low", "Medium", "High"].map((setting, index) => (
              <option key={index} value={setting.toLowerCase()}>
                {setting}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
