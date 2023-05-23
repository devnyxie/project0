import { MOVING_USERS, ONLINE_USERS } from "../Actions/Socket_Actions";

const initialState = {
  onlineUsers: [],
  moving_users: [],
};

const Socket_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload,
      };
    case MOVING_USERS:
      return {
        ...state,
        moving_users: action.payload,
      };
    default:
      return state;
  }
};

export default Socket_Reducer;
