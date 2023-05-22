export const createAsteroids = (divId, trashAmount) => {
  const div = document.getElementById(divId);

  // Clear existing trash
  div.innerHTML = "";

  const trashSizeMin = 2; // Minimum size of trash (pixels)
  const trashSizeMax = 4; // Maximum size of trash (pixels)
  const maxTrashPerRadius = 140; // Maximum number of trash elements per radius
  const radiusIncrement = 15; // Radius increment when moving to the next circle

  let radius = 215; // Initial radius of the circle (adjust as needed)
  let trashCount = 0; // Counter for the number of created trash elements

  for (let i = 0; i < trashAmount; i++) {
    const trash = document.createElement("div");
    trash.classList.add("center");

    const angle = Math.random() * Math.PI * 2; // Random angle between 0 and 2*PI
    const randomDistance = Math.random() * (radiusIncrement - trashSizeMax);
    const x = Math.cos(angle) * (radius + randomDistance);
    const y = Math.sin(angle) * (radius + randomDistance);
    const trashSize =
      Math.floor(Math.random() * (trashSizeMax - trashSizeMin + 1)) +
      trashSizeMin;
    trash.style.width = trashSize + "px";
    trash.style.height = trashSize + "px";
    trash.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => {
      const randomBorderRadius = Math.floor(Math.random() * 50); // Random border-radius value between 0 and 50
      trash.style.borderRadius = `${randomBorderRadius}%`; // Apply the random border-radius value
      trash.classList.add("orbit-trash"); // Add the "orbit-trash" class after a delay
    }, Math.random() * 1000); // Random micro delay (0-1000 milliseconds)

    div.appendChild(trash);

    trashCount++;

    // Move to the next radius if the maximum number of trash elements per radius is reached
    if (trashCount >= maxTrashPerRadius) {
      radius += radiusIncrement;
      trashCount = 0; // Reset the trash counter for the new radius
    }
  }
};
