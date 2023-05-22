export function findObjectByValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === value) {
        return obj;
      }
    }
  }
  return null; // Return null if the value is not found in any object
}
