import { GLOBAL_STATE } from "./main.js";
import { ctx } from "./helpers/drawParabola.js";
import chooseDataCenter from "./handler/chooseDataCenter.js";
import renderCurrentDataCenterWork from "./renderCurrentDataCenterWork.js";
import renderNewDataCenterWork from "./renderNewDataCenterWork.js";
import refs from "./refs.js";

export default function renderDataCentresWork() {
  const { users } = GLOBAL_STATE;
  refs.message.style.opacity = 0;
  refs.nextBtn.style.opacity = 0;
  refs.map.removeEventListener("click", chooseDataCenter);
  if (
    users.includes("asia") &&
    document.querySelector("[data-location='oceania']")
  ) {
    renderNewDataCenterWork("oceania", "asia");
  } else if (
    //цей сценарій надає Європейсикий серер як найблищий
    users.includes("asia") &&
    document.querySelector("[data-location='europe']")
  ) {
    renderNewDataCenterWork("europe", "asia");
  }

  if (
    users.includes("australia") &&
    document.querySelector("[data-location='oceania']")
  ) {
    renderNewDataCenterWork("oceania", "australia");
  } else if (
    //цей сценарій надає Європейсикий серер як найблищий
    users.includes("asia") &&
    document.querySelector("[data-location='europe']")
  ) {
    renderNewDataCenterWork("europe", "australia");
  }
  if (
    users.includes("europe") &&
    document.querySelector("[data-location='europe']")
  ) {
    renderNewDataCenterWork("europe", "europe");
  } else if (
    //цей сценарій надає Південно Американський серер як найблищий
    users.includes("europe") &&
    document.querySelector("[data-location='south-america']")
  ) {
    renderNewDataCenterWork("south-america", "europe");
  }
  if (
    users.includes("south-america") &&
    document.querySelector("[data-location='south-america']")
  ) {
    renderNewDataCenterWork("south-america", "south-america");
  }else if (
    //цей сценарій надає Північно Американський серер як найблищий
    users.includes("south-america") &&
    document.querySelector("[data-location='north-america']")
  ) {
    renderNewDataCenterWork("north-america", "south-america");
  }
  if (
    users.includes("north-america") &&
    document.querySelector("[data-location='north-america']")
  ) {
    renderNewDataCenterWork("north-america", "north-america");
  } else if (
    //цей сценарій надає Південно Американський серер як найблищий
    users.includes("north-america") &&
    document.querySelector("[data-location='south-america']")
  ) {
    renderNewDataCenterWork("south-america", "north-america");
  }
//час анімації 5000 вибраний тому що "latencyTime" для ближніх серверів всередньому 5000
  setTimeout(() => {
    ctx.clearRect(0, 0, 1000, 600);
    document
      .querySelectorAll(".mask")
      .forEach((e) => (e.style.width = 100 + "%"));
    renderCurrentDataCenterWork();
  }, 5000);
}

