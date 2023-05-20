import { DIM_WIDGETS } from "../Actions/Style_Actions";
const initialState = {
  widgets_opacity: [],
};

const Style_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DIM_WIDGETS:
      return {
        ...state,
        widgets_opacity: action.payload,
      };
    default:
      return state;
  }
};

export default Style_Reducer;
