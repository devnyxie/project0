//imports
import { io } from "socket.io-client";
import { TerminalOutput } from "./Terminal_Actions";
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
        dispatch(TerminalOutput({ message: "Connecting to AstroLink..." }));
        dispatch(TerminalOutput({ message: welcomeMessage.message }));
      });
    } catch (error) {
      console.log("Socket Error");
    }
  };
};
