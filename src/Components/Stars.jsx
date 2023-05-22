import { useEffect, useMemo, useRef, useState } from "react";

export const Stars = () => {
  let currentStars = 0;
  const starPositions = [
    { left: "5%", top: "5%" },
    { right: "10%", top: "30%" },
    { right: "13%", top: "39%" },
    { left: "13%", top: "64%" },
    { left: "30%", top: "75%" },
  ];

  const createFallingStar = () => {
    const starfield = document.getElementById("starfield");
    if (starfield && (currentStars > 0 || currentStars < 5)) {
      console.log(currentStars);
      currentStars = currentStars + 1;
      // Create a div element for the star
      const star = document.createElement("div");
      star.classList.add("falling-star");
      // Set initial position and size of the star
      const size = Math.floor(Math.random() * 3) + 1; // Random size between 1 and 5 pixels
      const startX = Math.floor(Math.random() * window.innerWidth);
      const startY =
        Math.floor(Math.random() * (window.innerHeight - size - 50)) + 50;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = startX + "px";
      star.style.top = startY + "px";
      // Add the star to the page
      starfield.appendChild(star);
      // Generate a random angle of motion for the star
      const angle = Math.random() * Math.PI * 2;
      // Define the speed of the star
      const speed = Math.floor(Math.random() * 10) + 1; // Random speed between 1 and 5 pixels per frame
      // Animate the star falling down the screen
      const fallInterval = setInterval(() => {
        // Calculate the new top and left positions of the star based on the angle and speed
        const currentX = parseInt(star.style.left);
        const currentY = parseInt(star.style.top);
        const newX = currentX + Math.cos(angle) * speed;
        const newY = currentY + Math.sin(angle) * speed;
        star.style.left = newX + "px";
        star.style.top = newY + "px";
        // Check if the star has gone off the screen
        if (
          newX < -size ||
          newY < -size ||
          newX > window.innerWidth + size ||
          newY > window.innerHeight + size
        ) {
          clearInterval(fallInterval);
          currentStars = currentStars - 1;
          star.remove();
          // Create a new falling star
          createFallingStar();
        }
      }, 12);
    }
  };
  useEffect(() => {
    createFallingStar();
    const ranNum = Math.floor(Math.random() * 2) + 2;
  }, []);
  useEffect(() => {
    const stars = Array.from(document.querySelectorAll(".star-div"));
    const delay = 100;
    stars.forEach((star, i) => {
      setTimeout(function () {
        star.classList.add("star");
      }, delay * i);
    });
    createFallingStar();
  }, []);

  return (
    <div
      className="bg-black bg-black absolute"
      id="starfield"
      style={{ height: "100%", width: "100%" }}
    >
      {starPositions.map((star) => {
        return (
          <div
            className="text-white absolute star-div"
            style={{
              right: star.right,
              top: star.top,
              left: star.left,
              bottom: star.bottom,
            }}
          >
            *
          </div>
        );
      })}
    </div>
  );
};
