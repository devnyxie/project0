import { GET_USER } from "../Actions/User_Actions";

const initialState = {
  user: {},
};

const User_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default User_Reducer;
