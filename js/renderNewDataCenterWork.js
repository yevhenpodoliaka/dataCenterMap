import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";


// from = data-location="nameNewLocation"

//to = idSelector of continent without "#"

export default function renderNewDataCenterWork(from,to) {
  const startPoint = calculateCoordinates(
    document
      .querySelector(`[data-location=${from}]`)
      ?.getBoundingClientRect()
  );

  const usersPoints = Array.from(
    document.querySelectorAll(`#${to} .point`)
  ).map((i) => {
    return calculateCoordinates(i.getBoundingClientRect());
  });

  usersPoints.forEach((i) =>
    drawParabola(startPoint.x, startPoint.y, i.x, i.y)
  );
}
