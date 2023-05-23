import { findObjectByValue } from "./FindObjInArr";

export const findLocation = (solar_system, user) => {
  if (!solar_system || !user || !user.current_location) {
    // Handle the case when data is not available or incomplete
    return { x: 0, y: 0 }; // Return default or placeholder values
  }

  const location = findObjectByValue(solar_system, user.current_location);
  if (!location || !location.planet_position) {
    // Handle the case when the location or planet_position is null
    return { x: 0, y: 0 }; // Return default or placeholder values
  }

  const x1 = location.planet_position.left;
  const y1 = location.planet_position.top;
  return { x: x1, y: y1 };
};
