//exports
export const SOLAR_SYSTEM = "SOLAR_SYSTEM";

//actions
export const getSolarSystem = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://solarsystembe-production.up.railway.app/planets`
      );
      if (response.ok) {
        let solar_system = await response.json();
        dispatch({
          type: SOLAR_SYSTEM,
          payload: solar_system,
        });
        console.log(solar_system);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
