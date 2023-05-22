import React, { useRef, useEffect } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // const aspectRatio = 16 / 9; // Desired aspect ratio (16:9 in this example)
    // const resizeCanvas = () => {
    // Calculate the canvas dimensions based on the parent container and aspect ratio
    const parentDiv = canvas.parentNode;

    let canvasWidth = parentDiv.offsetWidth;
    let canvasHeight = parentDiv.offsetHeight;

    // const parentDivWidth = parentDiv.offsetWidth;
    // const parentDivHeight = parentDiv.offsetHeight;
    // let canvasWidth, canvasHeight;
    //--------------------------------------------------------- ASPECT RATIO --- IMPORTANT
    // if (parentDivWidth / parentDivHeight > aspectRatio) {
    //   canvasWidth = parentDivHeight * aspectRatio;
    //   canvasHeight = parentDivHeight;
    // } else {
    //   canvasWidth = parentDivWidth;
    //   canvasHeight = parentDivWidth / aspectRatio;
    // }
    // Set the canvas dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Calculate the center coordinates
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set line properties
    context.strokeStyle = "gray";
    // Set fill properties
    context.fillStyle = "black";

    context.lineWidth = 1;

    // Draw the line from the center of the left border to the middle of the screen
    context.beginPath();
    //LEFT LINE + MINI LINE ------------------------
    context.moveTo(0, centerY + canvasHeight * 0.35); // Starting point at the left border
    context.lineTo(centerX - canvasWidth * 0.15, centerY + canvasHeight * 0.1); // Ending point at the middle of the screen
    //mini line up 40deg
    context.moveTo(centerX - canvasWidth * 0.15, centerY + canvasHeight * 0.1);
    context.lineTo(centerX - canvasWidth * 0.1, centerY - canvasHeight * 0);
    //2nd line up 40deg
    context.moveTo(centerX - canvasWidth * 0.18, centerY + canvasHeight * 0.12);
    context.lineTo(centerX - canvasWidth * 0.12, centerY - canvasHeight * 0);
    //RIGHT LINE + MINI LINE ------------------------
    context.moveTo(canvasWidth, centerY + canvasHeight * 0.35);
    context.lineTo(centerX + canvasWidth * 0.15, centerY + canvasHeight * 0.1);
    //mini line up 40deg
    context.moveTo(centerX + canvasWidth * 0.15, centerY + canvasHeight * 0.1);
    context.lineTo(centerX + canvasWidth * 0.1, centerY - canvasHeight * 0);
    //2nd line up 40deg
    context.moveTo(centerX + canvasWidth * 0.18, centerY + canvasHeight * 0.12);
    context.lineTo(centerX + canvasWidth * 0.12, centerY - canvasHeight * 0);
    //CONNECT MINI LINES
    context.moveTo(centerX - canvasWidth * 0.1, centerY - canvasHeight * 0);
    context.lineTo(centerX + canvasWidth * 0.1, centerY - canvasHeight * 0);
    //CONNECT MINI LINES 2
    context.moveTo(centerX - canvasWidth * 0.1, centerY - canvasHeight * 0.01);
    context.lineTo(centerX + canvasWidth * 0.1, centerY - canvasHeight * 0.01);
    //left
    context.moveTo(centerX - canvasWidth * 0.12, centerY - canvasHeight * 0);
    context.lineTo(centerX - canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    //left 2
    context.moveTo(centerX - canvasWidth * 0.1, centerY - canvasHeight * 0.01);
    context.lineTo(centerX - canvasWidth * 0.28, centerY - canvasHeight * 0.35);
    //right
    context.moveTo(centerX + canvasWidth * 0.12, centerY - canvasHeight * 0);
    context.lineTo(centerX + canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    //right 2
    context.moveTo(centerX + canvasWidth * 0.1, centerY - canvasHeight * 0.01);
    context.lineTo(centerX + canvasWidth * 0.28, centerY - canvasHeight * 0.35);
    // connector upper
    context.moveTo(centerX - canvasWidth * 0.32, centerY - canvasHeight * 0.42);
    context.lineTo(centerX + canvasWidth * 0.32, centerY - canvasHeight * 0.42);
    // connector
    context.moveTo(centerX - canvasWidth * 0.28, centerY - canvasHeight * 0.35);
    context.lineTo(centerX + canvasWidth * 0.28, centerY - canvasHeight * 0.35);
    //left
    context.moveTo(centerX - canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    context.lineTo(centerX - canvasWidth * 0.5, centerY + canvasHeight * 0);
    //right
    context.moveTo(centerX + canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    context.lineTo(centerX + canvasWidth * 0.5, centerY + canvasHeight * 0);
    //left
    context.moveTo(centerX - canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    context.lineTo(centerX - canvasWidth * 0.5, centerY - canvasHeight * 0.5);
    //right
    context.moveTo(centerX + canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    context.lineTo(centerX + canvasWidth * 0.5, centerY - canvasHeight * 0.5);
    //
    context.moveTo(centerX - canvasWidth * 0.4, centerY - canvasHeight * 0.4);
    context.lineTo(centerX - canvasWidth * 0.5, centerY + canvasHeight * 0);
    //left
    context.moveTo(centerX - canvasWidth * 0.32, centerY - canvasHeight * 0.42);
    context.lineTo(centerX - canvasWidth * 0.7, centerY - canvasHeight * 0.99);
    //right
    context.moveTo(centerX + canvasWidth * 0.32, centerY - canvasHeight * 0.42);
    context.lineTo(centerX + canvasWidth * 0.7, centerY - canvasHeight * 0.99);

    context.stroke();
    // Fill the area with a color
    function fill_one(
      context,
      topWidth_percent,
      bottomWidth_percent,
      topX_percent,
      topY_percent,
      bottomX_percent,
      bottomY_percent
    ) {
      const topWidth = canvasWidth * topWidth_percent; // Width of the filled area at the top
      const bottomWidth = canvasWidth * bottomWidth_percent; // Width of the filled area at the bottom

      const topX = centerX - canvasWidth * topX_percent;
      const topY = centerY + canvasHeight * topY_percent;
      const bottomX = bottomX_percent;
      const bottomY = centerY + canvasHeight * bottomY_percent;

      context.beginPath();
      context.moveTo(topX, topY);
      context.lineTo(topX + topWidth, topY);
      context.lineTo(bottomX + bottomWidth, bottomY);
      context.lineTo(bottomX, bottomY);
      context.fill();
      context.closePath();
    }
    fill_one(context, 0.3, 1, 0.15, 0.101, 0, 0.351);
    fill_one(context, 1, 1, 0, 1, 0, 0.35);
    // };
    // // Initial resize on component mount
    // resizeCanvas();

    // // Event listener for window resize
    // window.addEventListener("resize", resizeCanvas);

    // // Cleanup the event listener on component unmount
    // return () => {
    //   window.removeEventListener("resize", resizeCanvas);
    // };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", zIndex: 2 }}>
      <canvas
        className="transform-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        ref={canvasRef}
      />
    </div>
  );
};

export default CanvasComponent;
