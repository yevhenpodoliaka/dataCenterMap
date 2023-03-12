import refs from "../refs.js";
import dataCenterMarkup from "../markup/dataCenterMarkup.js";
import onStartBtnClick from "./onStartBtnClick.js";
import renderDataCentersWork from "../renderDataCentersWork.js";
import { GLOBAL_STATE } from "../main.js";

export default function chooseDataCenter(e) {
  const current = document.querySelector('[data-status="current"]');

  if (e.target.classList.contains("data-center")) {
    if (current !== null) {
      e.target.setAttribute("data-status", "new");
      e.target.innerHTML = dataCenterMarkup("new");
      e.target.style.width = "50px";
      GLOBAL_STATE.addNewDataCenter(e.target.dataset.location);

      if (GLOBAL_STATE.newDataCenter.length === 2) {
        refs.nextBtn.disabled = false;
        refs.nextBtn.addEventListener("click", onStartBtnClick);
      }
      if (GLOBAL_STATE.newDataCenter.length === 3) {
        refs.nextBtn.disabled = true;
        refs.nextBtn.removeEventListener("click", onStartBtnClick);
        renderDataCentersWork();
      }
    } else {
      e.target.setAttribute("data-status", "current");
      e.target.innerHTML = dataCenterMarkup("current");
      e.target.style.width = "50px";
      refs.message.textContent =
        "Choose minimum two additional spots for Byte Cloud and press";
      refs.nextBtn.classList.remove("visually-hidden");
      refs.nextBtn.disabled = true;
      GLOBAL_STATE.addCurrentDataCenter(e.target.dataset.location);
    }
  }
}
