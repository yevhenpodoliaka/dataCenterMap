import { GLOBAL_STATE } from "./main.js";
import { ctx } from "./helpers/drawParabola.js";
import chooseDataCenter from "./handler/chooseDataCenter.js";
import renderCurrentDataCenterWork from "./renderCurrentDataCenterWork.js";
import renderNewDataCenterWork from "./renderNewDataCenterWork.js";
import refs from "./refs.js";

export default function renderDataCentresWork() {
  const { users } = GLOBAL_STATE;
  refs.message.style.opacity=0
  refs.nextBtn.style.opacity = 0
  refs.map.removeEventListener("click", chooseDataCenter);
    if (
      users.includes("asia") &&
      document.querySelector("[data-location='oceania']")
    ) {
      renderNewDataCenterWork("oceania", "asia");
    }

    if (
      users.includes("australia") &&
      document.querySelector("[data-location='oceania']")
    ) {
      renderNewDataCenterWork("oceania", "australia");
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
    document
      .querySelectorAll(".mask")
      .forEach(
        (e) => (e.style.width = 100 + "%")
      );
    renderCurrentDataCenterWork()
  }, 5000);
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
