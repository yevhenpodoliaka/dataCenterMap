import { GLOBAL_STATE } from "./main.js";
import { ctx } from "./helpers/drawParabola.js";
import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import renderNewDataCenter from "./renderNewDataCenterWork.js";
export default function renderLatency() {
  const { users } = GLOBAL_STATE;

  const points = Array.from(document.querySelectorAll(".point"));
  const res = points.map((i) => {
    return calculateCoordinates(i.getBoundingClientRect());
  });

  const currentCenter = calculateCoordinates(
    document.querySelector("[data-status='current']").getBoundingClientRect()
  );

  res.forEach((i) => drawParabola(currentCenter.x, currentCenter.y, i.x, i.y));

  setTimeout(() => {
    ctx.clearRect(0, 0, 1000, 600);
     
  if (
    users.includes("asia") &&
    document.querySelector("[data-status='new'][data-location='singapore']")
  ) {
    renderNewDataCenter("singapore", "asia");
    }
    
    if (
      users.includes("australia") &&
      document.querySelector("[data-status='new'][data-location='singapore']")
    ) {
      renderNewDataCenter("singapore", "australia");
    }
    if (
      users.includes("europe") &&
      document.querySelector("[data-status='new'][data-location='germany']")
    ) {
      renderNewDataCenter("germany", "europe");
    }
    if (
      users.includes("south-america") &&
      document.querySelector(
        "[data-status='new'][data-location='south-america']"
      )
    ) {
      renderNewDataCenter("south-america", "south-america");
    }
        if (
          users.includes("north-america") &&
          document.querySelector(
            "[data-status='new'][data-location='north-america']"
          )
        ) {
          renderNewDataCenter("north-america", "north-america");
        }
  }, 4000);









}



// let start = Date.now(); // remember start time
  
//   let time = 5000 //100%
// // time = 100%
// //  interval time /20
//   //step =5%
// let timer = setInterval(function () {

//   let timePassed = Date.now() - start;
// // console.log("timePassed", timePassed);
//   if (timePassed >= time) {
//     clearInterval(timer); 
//     return;
//   }

//   draw(timePassed);
// },time/20);


//   function draw(timePassed) {
//   console.log("draw", Date.now());
//   document.querySelectorAll(".mask").forEach(e=>e.style.width = (time -timePassed )/time*100 + "%")
// }
