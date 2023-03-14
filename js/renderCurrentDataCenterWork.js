import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import { GLOBAL_STATE } from "./main.js";
import animationLatency from "./helpers/animation.js";
import resultTableMarkup from "./markup/resultTableMarkup.js";

//функція реалізує побудову парабол між теперішнім сервером користувача
// та "новими" користувачами на вибраних континнентах
//Потім запускає аніміцію та викликає функцію побудови 
//фінальної таблиці

export default function renderCurrentDataCenterWork() {
  const { currentDataCenter, users } = GLOBAL_STATE;

  //генеруються кінцеві точки("користувачі")
  const points = Array.from(document.querySelectorAll(".point")).map((i) => {
    return calculateCoordinates(i.getBoundingClientRect());
  });
  //отримую поточний сервер
  const currentCenter = calculateCoordinates(
    document.querySelector("[data-status='current']").getBoundingClientRect()
  );
  //будую параболи
  points.forEach((i) =>
    drawParabola(currentCenter.x, currentCenter.y, i.x, i.y)
  );
  //змінюю інфо-текст на актуальний
  document
    .querySelectorAll(".info-card")
    .forEach(
      (i) =>
        (i.textContent = `Latency :${
          currentDataCenter.latencyTime[i.parentNode.getAttribute("id")] / 1000
        } sec.`)
    );
  const timeOut = Math.max(...Object.values(currentDataCenter.latencyTime)) / 2;
  //timeOut визначає час середньої затримки "latencyTime" вибраного сервера
  //для вибраних континентів

  setTimeout(() => {
    document
      .querySelectorAll(".info-card")
      .forEach(
        (i) =>
          (i.textContent = `Download: ${
            currentDataCenter.downloadTime[i.parentNode.getAttribute("id")] /
            1000
          } sec.`)
      );
  }, timeOut);

  users.forEach((i) => animationLatency(currentDataCenter.latencyTime[i], i));

  const time = Math.max(...Object.values(currentDataCenter.latencyTime));
  //time визначає час максимальної затримки "latencyTime" вибраного сервера
  //для вибраних континентів після якої викликаться 
  //функція побудови фінальної таблиці
  setTimeout(() => {
    document
      .querySelector("#map")
      .insertAdjacentHTML("beforeend", resultTableMarkup());
    const resetBtn = document.querySelector(".resetBtn");
    resetBtn.addEventListener("click", () => document.location.reload());
  }, time);
}
   