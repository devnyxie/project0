//imports
//exports
export const EXPORT_TERMINAL_MESSAGES = "EXPORT_TERMINAL_MESSAGES";
//socket
//actions
export const TerminalOutput = (props) => {
  return async (dispatch, getState) => {
    try {
      const data = props;
      const addMessage = (data) => {
        if (typeof data === "array") {
          data.forEach((message) => {
            console.log(message);
            const existing_messages =
              getState().terminal_data.terminal_messages;
            existing_messages.push(message);
            dispatch({
              type: EXPORT_TERMINAL_MESSAGES,
              payload: [...existing_messages],
            });
          });
        } else {
          if (typeof data === "object") {
            const existing_messages =
              getState().terminal_data.terminal_messages;
            existing_messages.push(data);
            dispatch({
              type: EXPORT_TERMINAL_MESSAGES,
              payload: [...existing_messages],
            });
          }
        }
      };
      addMessage(data);
    } catch (error) {
      console.log("AstroLink Error: could not add message to the Terminal.");
    }
  };
};
