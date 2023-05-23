import { getSolarSystem } from "./Planets_Actions";
import { getUser } from "./User_Actions";

export const LOADED = "LOADED";

export const LoaderFunc = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(getUser());
      dispatch(getSolarSystem());
    } catch (error) {}
  };
};
