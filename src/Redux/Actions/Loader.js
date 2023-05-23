import { getSolarSystem } from "./Planets_Actions";
import { TerminalOutput } from "./Terminal_Actions";
import { getUser } from "./User_Actions";

export const LOADED = "LOADED";

export const LoaderFunc = () => {
  return async (dispatch, getState) => {
    try {
      const finish = () => {
        dispatch({
          type: LOADED,
          payload: true,
        });
      };
      const load = async () => {
        dispatch(getUser());
        dispatch(getSolarSystem());
        finish();
      };
      load();
    } catch (error) {
      console.log(error);
    }
  };
};
