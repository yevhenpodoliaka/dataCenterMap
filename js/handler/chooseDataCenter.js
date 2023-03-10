import dataCenterMarkup from "../markup/dataCenterMarkup.js";
export default function chooseDataCenter(e) {
  const current = document.querySelector('[data-status="current"]');

  if (e.target.classList.contains("data-center")) {
    if (current !== null) {
      e.target.setAttribute("data-status", "new");
      e.target.innerHTML = dataCenterMarkup("new");
        e.target.style.width = "50px";

    } else {
      e.target.setAttribute("data-status", "current");
      e.target.innerHTML = dataCenterMarkup("current");
      e.target.style.width="50px"
    }
  }
}
