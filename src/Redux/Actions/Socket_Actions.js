//imports
import { io } from "socket.io-client";
import { TerminalOutput } from "./Terminal_Actions";
//exports
export const ONLINE_USERS = "ONLINE_USERS";
export const MOVING_USERS = "MOVING_USERS";

//socket
const socket = io("https://solarsystembe-production.up.railway.app", {
  transports: ["websocket"],
});
//actions
export const connectToSocket = () => {
  return async (dispatch, getState) => {
    const user = getState().user_data.user;

    try {
      socket.on("welcome", (welcomeMessage) => {
        dispatch(TerminalOutput({ message: "Connecting to AstroLink..." }));
        dispatch(TerminalOutput({ message: welcomeMessage.message }));
      });
      socket.emit("login", user);
      socket.on("onlineUsers", (onlineUsers) => {
        dispatch({
          type: ONLINE_USERS,
          payload: onlineUsers,
        });
      });
      // socket.on("moving", (payload) => {
      //   console.log("moving", payload);
      //   dispatch({
      //     type: ONLINE_USERS,
      //     payload: onlineUsers,
      //   });
      // });
      socket.on("moving", (payload) => {
        dispatch({
          type: MOVING_USERS,
          payload: payload,
        });
      });
    } catch (error) {
      console.log("Socket Error");
    }
  };
};

export const moveToLocation = (from, to) => {
  return async (dispatch, getState) => {
    const user = getState().user_data.user;
    const payload = { from: from, to: to, username: user.username };
    try {
      socket.emit("moving", payload);
    } catch (error) {
      console.log("Socket Error");
    }
  };
};
