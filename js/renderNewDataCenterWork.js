import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import { GLOBAL_STATE } from "./main.js";
import animationLatency from "./helpers/animation.js";
import infoCardMarkup from "./markup/infoCardMarkup.js";

// from = data-location="nameNewLocation"

//to = idSelector of continent without "#"


export default function renderNewDataCenterWork(from, to) {
  const { centres } = GLOBAL_STATE
  
  const { latencyTime, downloadTime } = centres.find((i) => i.id === from);

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
    .insertAdjacentHTML("beforeend", infoCardMarkup(`Latency ${latencyTime[to]} sec.`));
  
  setTimeout(() => {
     document.querySelector(
       `#${to} .info-card`
     ).textContent = `Download ${downloadTime[to]} sec.`;
  }, latencyTime[to]/2);
  


animationLatency(latencyTime[to],to);

}



  // let start = Date.now();

  // let time = latencyTime; //100%
  // // time = 100%
  // //  interval time /20
  // //step =5%
  // let timer = setInterval(function () {
  //   let timePassed = Date.now() - start;
  //   // console.log("timePassed", timePassed);
  //   if (timePassed >= time) {
  //     clearInterval(timer);
  //     return;
  //   }

  //   draw(timePassed);
  // }, time / 20);

  // function draw(timePassed) {
  //   console.log("draw", Date.now());
  //   document
  //     .querySelectorAll(".mask")
  //     .forEach(
  //       (e) => (e.style.width = ((time - timePassed) / time) * 100 + "%")
  //     );
  // }
 