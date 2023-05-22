import Planets_Reducer from "./Planets_Reducer";
import Player_Reducer from "./Player_Reducer";
import Settings_Reducer from "./Settings_Reducer";
import Socket_Reducer from "./Socket_Reducer";
import Style_Reducer from "./Style_Reducer";
import Terminal_Reducer from "./Terminal_Reducer";

export default function Reducer(state = {}, action) {
  return {
    planets_data: Planets_Reducer(state.planets_data, action),
    socket_data: Socket_Reducer(state.socket_data, action),
    terminal_data: Terminal_Reducer(state.terminal_data, action),
    style_data: Style_Reducer(state.style_data, action),
    player_data: Player_Reducer(state.player_data, action),
    settings_data: Settings_Reducer(state.settings_data, action),
  };
}
