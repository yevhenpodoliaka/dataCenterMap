import refs from "../refs.js";
import { GLOBAL_STATE } from "../main.js";
import renderDataCentersWork from "../renderDataCentersWork.js";

export default function onStartBtnClick() {
  if (GLOBAL_STATE.newDataCenter.length < 3) {
    Array.from(document.querySelectorAll(".data-center"))
      .find((i) => !i.dataset.status)
      .remove();
    renderDataCentersWork();
    refs.map.removeEventListener("click", chooseNumberUsers);
    refs.nextBtn.removeEventListener("click", onStartBtnClick);
    refs.nextBtn.disabled = true;
  }
}
