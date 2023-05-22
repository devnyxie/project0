export function insertDotAfterFirstChar(number) {
  if (typeof number !== "string") {
    number = number.toString();
  }

  if (number.length >= 2) {
    return number.slice(0, 1) + "." + number.slice(1);
  }

  return number;
}
