import Planets_Reducer from "./Planets_Reducer";
import Settings_Reducer from "./Settings_Reducer";
import Socket_Reducer from "./Socket_Reducer";
import Style_Reducer from "./Style_Reducer";
import Terminal_Reducer from "./Terminal_Reducer";
import User_Reducer from "./User_Reducer";

export default function Reducer(state = {}, action) {
  return {
    planets_data: Planets_Reducer(state.planets_data, action),
    socket_data: Socket_Reducer(state.socket_data, action),
    terminal_data: Terminal_Reducer(state.terminal_data, action),
    style_data: Style_Reducer(state.style_data, action),
    user_data: User_Reducer(state.user_data, action),
    settings_data: Settings_Reducer(state.settings_data, action),
  };
}
