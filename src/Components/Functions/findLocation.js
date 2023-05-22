import { findObjectByValue } from "./FindObjInArr";

export const findLocation = (solar_system, user) => {
  console.log("Calculated initial location successfully.");
  const location = findObjectByValue(solar_system, user.current_location);
  const x1 = location.planet_position.left;
  const y1 = location.planet_position.top;
  return { x: x1, y: y1 };
};
