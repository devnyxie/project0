import Planets_Reducer from "./Planets_Reducer";
import Socket_Reducer from "./Socket_Reducer";

export default function Reducer(state = {}, action) {
  return {
    planets_data: Planets_Reducer(state.planets_data, action),
    socket_data: Socket_Reducer(state.socket_data, action),
  };
}