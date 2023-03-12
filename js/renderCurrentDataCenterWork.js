import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import { GLOBAL_STATE } from "./main.js";

export default function renderCurrentDataCenterWork() {
  const { centres, currentDataCenter } = GLOBAL_STATE;

  const points = Array.from(document.querySelectorAll(".point")).map((i) => {
    return calculateCoordinates(i.getBoundingClientRect());
  });

  const currentCenter = calculateCoordinates(
    document.querySelector("[data-status='current']").getBoundingClientRect()
  );

  points.forEach((i) =>
    drawParabola(currentCenter.x, currentCenter.y, i.x, i.y)
  );
  document
    .querySelectorAll(".info-card")
    .forEach(
      (i) =>
        (i.textContent = `Latency :${
          currentDataCenter.latencyTime[i.parentNode.getAttribute("id")]
        }`)
    );
}
