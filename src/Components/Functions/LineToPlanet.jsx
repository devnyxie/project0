export const drawLineToPlanet = (event, { setEndPoint }) => {
  const containerElement = document.getElementById(
    "solar-system-100-container"
  );
  const containerBounds = containerElement.getBoundingClientRect();
  const targetElement = event.target;
  const targetBounds = targetElement.getBoundingClientRect();

  const x =
    ((targetBounds.left - containerBounds.left + targetBounds.width / 2) /
      containerBounds.width) *
    100;
  const y =
    ((targetBounds.top - containerBounds.top + targetBounds.height / 2) /
      containerBounds.height) *
    100;

  setEndPoint({ x, y });
};
