import { LOADED } from "../Actions/Loader";
const initialState = {
  loaded: false,
};

const Planets_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        loaded: action.payload,
      };
    default:
      return state;
  }
};

export default Planets_Reducer;
