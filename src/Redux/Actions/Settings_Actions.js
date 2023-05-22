import { TerminalOutput } from "./Terminal_Actions";

export const CHANGE_ASTEROID_DENSITY = "CHANGE_ASTEROID_DENSITY";

export const changeAsteroidDensity = (setting) => {
  return async (dispatch, getState) => {
    console.log(setting);
    try {
      switch (setting) {
        case "Low":
          dispatch({
            type: CHANGE_ASTEROID_DENSITY,
            payload: { setting: "low", value: 60 },
          });
          break;
        case "Medium":
          dispatch({
            type: CHANGE_ASTEROID_DENSITY,
            payload: { setting: "medium", value: 120 },
          });
          break;
        case "High":
          dispatch({
            type: CHANGE_ASTEROID_DENSITY,
            payload: { setting: "high", value: 200 },
          });
          break;
        default:
          break;
      }
      dispatch(
        TerminalOutput({
          message: "Cosmic Map's Asteroid Density parameted was changed.",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
