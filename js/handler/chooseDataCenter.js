import refs from "../refs.js"
import dataCenterMarkup from "../markup/dataCenterMarkup.js";
import onStartBtnClick from "./onStartBtnClick.js";

let newCenter = 0;

export default function chooseDataCenter(e) {
  const current = document.querySelector('[data-status="current"]');

  if (e.target.classList.contains("data-center")) {
    if (current !== null) {
      e.target.setAttribute("data-status", "new");
      e.target.innerHTML = dataCenterMarkup("new");
      e.target.style.width = "50px";
      newCenter+=1;
     if (newCenter === 2) {
       refs.nextBtn.disabled = false;
       refs.nextBtn.addEventListener("click",onStartBtnClick)
     }
  
    } else {
      e.target.setAttribute("data-status", "current");
      e.target.innerHTML = dataCenterMarkup("current");
      e.target.style.width = "50px"
      refs.message.textContent = "Choose minimum two additional spots for Byte Cloud and press"
      refs.nextBtn.classList.remove("visually-hidden");
      refs.nextBtn.disabled= true
    }
  }
}
