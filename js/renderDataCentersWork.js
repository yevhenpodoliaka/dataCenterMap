import { GLOBAL_STATE } from "./main.js";
import { ctx } from "./helpers/drawParabola.js";
import renderCurrentDataCenterWork from "./renderCurrentDataCenterWork.js";
import renderNewDataCenterWork from "./renderNewDataCenterWork.js";
export default function renderLatency() {
  const { users } = GLOBAL_STATE;

    if (
      users.includes("asia") &&
      document.querySelector("[data-location='asia']")
    ) {
      renderNewDataCenterWork("asia", "asia");
    }

    if (
      users.includes("australia") &&
      document.querySelector("[data-location='asia']")
    ) {
      renderNewDataCenterWork("asia", "australia");
    }
    if (
      users.includes("europe") &&
      document.querySelector("[data-location='europe']")
    ) {
      renderNewDataCenterWork("europe", "europe");
    }
    if (
      users.includes("south-america") &&
      document.querySelector(
        "[data-location='south-america']"
      )
    ) {
      renderNewDataCenterWork("south-america", "south-america");
    }
    if (
      users.includes("north-america") &&
      document.querySelector(
        "[data-location='north-america']"
      )
    ) {
      renderNewDataCenterWork("north-america", "north-america");
    }

  setTimeout(() => {
    ctx.clearRect(0, 0, 1000, 600);
renderCurrentDataCenterWork()
  }, 8000);
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