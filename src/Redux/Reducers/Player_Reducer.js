import { CHANGE_LOCATION } from "../Actions/Player_Actions";

const initialState = {
  current_location: "",
};

const Player_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        current_location: action.payload,
      };
    default:
      return state;
  }
};

export default Player_Reducer;
