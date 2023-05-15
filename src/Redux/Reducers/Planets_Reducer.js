import { SOLAR_SYSTEM } from "../Actions/Planets";
const initialState = {
  solar_system: [],
};

const Planets_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SOLAR_SYSTEM:
      return {
        ...state,
        planets: action.payload,
      };
    default:
      return state;
  }
};

export default Planets_Reducer;
