import { CHANGE_ASTEROID_DENSITY } from "../Actions/Settings_Actions";
const initialState = {
  asteroid_density: "high",
};

const Settings_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ASTEROID_DENSITY:
      return {
        ...state,
        asteroid_density: action.payload,
      };
    default:
      return state;
  }
};

export default Settings_Reducer;
