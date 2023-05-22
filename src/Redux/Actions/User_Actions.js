import { TerminalOutput } from "./Terminal_Actions";

export const GET_USER = "GET_USER";

export const getUser = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://solarsystembe-production.up.railway.app/users/1`
      );
      if (response.ok) {
        let response_json = await response.json();
        dispatch({
          type: GET_USER,
          payload: response_json[0],
        });
        dispatch(TerminalOutput({ message: "User Data Retrieved." }));
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const changeLocation = (planet_name) => {
  return async (dispatch, getState) => {
    try {
      // const response = await fetch(
      //   `https://solarsystembe-production.up.railway.app/users/1`
      // );
      // if (response.ok) {
      //   let response_json = await response.json();
      //   dispatch({
      //     type: GET_USER,
      //     payload: response_json[0],
      //   });
      //   dispatch(TerminalOutput({ message: "User Data Retrieved." }));
      // } else {
      //   console.log("Error fetching data");
      // }
      let user = getState().user_data.user;
      user.current_location = planet_name;
      dispatch({
        type: GET_USER,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
