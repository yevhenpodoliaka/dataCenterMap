import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import { GLOBAL_STATE } from "./main.js";
import latencyInfoCardMarkup from "./markup/latencyInfoCardMarkup.js"

// from = data-location="nameNewLocation"

//to = idSelector of continent without "#"


export default function renderNewDataCenterWork(from, to) {
  const { centres } = GLOBAL_STATE
  
  const { latencyTime } = centres.find((i) => i.id === from);

  

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
    drawParabola(startPoint.x, startPoint.y, i.x, i.y,"blue")
  );
  document
    .querySelector(`#${to}`)
    .insertAdjacentHTML(
      "beforeend",
      latencyInfoCardMarkup(latencyTime[to])
    );
 

}
