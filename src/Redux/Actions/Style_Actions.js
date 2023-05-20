//exports
export const DIM_WIDGETS = "DIM_WIDGETS";
//socket
//actions
export const lowWidgetsOpacity = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DIM_WIDGETS,
        payload: "0.25",
      });
    } catch (error) {
      console.log("Socket Error");
    }
  };
};
export const highWidgetsOpacity = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DIM_WIDGETS,
        payload: "1",
      });
    } catch (error) {
      console.log("Socket Error");
    }
  };
};
