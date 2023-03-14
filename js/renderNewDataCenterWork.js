import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js";
import { GLOBAL_STATE } from "./main.js";
import animationLatency from "./helpers/animation.js";
import infoCardMarkup from "./markup/infoCardMarkup.js";



//функція реалізує побудову парабол між вибраним сервером
// та користувачами на вибраному континенті
//дя цього потрібні два аргументи

// from = data-location="nameNewLocation"
//         та
//to = idSelector of continent without "#"

export default function renderNewDataCenterWork(from, to) {
  const { centres } = GLOBAL_STATE;

  const { latencyTime, downloadTime } = centres.find((i) => i.id === from);
  //отримую координати початкової точки на вибраному континенті
  const startPoint = calculateCoordinates(
    document.querySelector(`[data-location=${from}]`)?.getBoundingClientRect()
  );
  //отримую координати кінцевих точок на вибраному континенті
  const usersPoints = Array.from(
    document.querySelectorAll(`#${to} .point`)
  ).map((i) => {
    return calculateCoordinates(i.getBoundingClientRect());
  });

  //будую парабалу(и)
  usersPoints.forEach((i) =>
    drawParabola(startPoint.x, startPoint.y, i.x, i.y, "blue")
  );
  //надаю інформацію про час затримки з вибраного серверу
  //до вибраного континенту
  document
    .querySelector(`#${to}`)
    .insertAdjacentHTML(
      "beforeend",
      infoCardMarkup(`Latency: ${latencyTime[to] / 1000} sec.`)
    );
  //надаю інформацію про час завантаження з вибраного серверу
  //до вибраного континенту
  // setTimeout має затримку яка доріннює половині часу затримки
  
  setTimeout(() => {
    document.querySelector(`#${to} .info-card`).textContent = `Download:  ${
      downloadTime[to] / 1000
    } sec.`;
  }, latencyTime[to] / 2);

  animationLatency(latencyTime[to], to);
}


 