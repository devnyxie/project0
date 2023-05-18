import { EXPORT_TERMINAL_MESSAGES } from "../Actions/Terminal_Actions";
const initialState = {
  terminal_messages: [],
};

const Terminal_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPORT_TERMINAL_MESSAGES:
      return {
        ...state,
        terminal_messages: action.payload,
      };
    default:
      return state;
  }
};

export default Terminal_Reducer;
