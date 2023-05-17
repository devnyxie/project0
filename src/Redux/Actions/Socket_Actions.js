//imports
import { io } from "socket.io-client";
//exports
//socket
const socket = io("https://solarsystembe-production.up.railway.app", {
  transports: ["websocket"],
});
//actions
export const connectToSocket = () => {
  return async (dispatch, getState) => {
    try {
      socket.on("welcome", (welcomeMessage) => {
        console.log(welcomeMessage);
      });
    } catch (error) {
      console.log("Socket Error");
    }
  };
};
