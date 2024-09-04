import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { changeAsteroidDensity } from "../../../../Redux/Actions/Settings_Actions";
export const SettingsModal = (props) => {
  const current_density = useSelector(
    (state) => state.settings_data.asteroid_density
  );

  const dispatch = useDispatch();
  const changeAsteroidDensityFunc = (setting) => {
    dispatch(changeAsteroidDensity(setting));
  };
  return (
    <div
      className="monospace text-left text-white p-1 transform-center center"
      style={{
        height: "100%",
        width: "100%",
        // backgroundColor: "rgb(0,0,0,0.25)",
        // backdropFilter: "blur(1px)",
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
        <div style={{}}>
          <label className="block text-sm font-medium leading-6 text-white">
            Asteroid Belt Density
          </label>
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {["Low", "Medium", "High"].map((setting, index) => {
              if (current_density.setting === setting.toLowerCase()) {
                return (
                  <option
                    selected
                    key={index}
                    onClick={() => changeAsteroidDensityFunc(setting)}
                  >
                    {setting}
                  </option>
                );
              } else {
                return (
                  <option
                    key={index}
                    onClick={() => changeAsteroidDensityFunc(setting)}
                  >
                    {setting}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div>
    </div>
  );
};