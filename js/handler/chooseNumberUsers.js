import laptopMarkup from "../markup/laptopMarkup.js";
import laptopAndSmartphoneMarkup from "../markup/laptopAndSmartphoneMarkup.js";
import laptopSmartphoneMobileMarkup from "../markup/laptopSmartphoneMobileMarkup.js";
import dataCenterRender from "../dataCenterRender.js";
import onNextBtnClick from "./onNextBtnClick.js";
import refs from "../refs.js";
import { GLOBAL_STATE } from "../main.js";



export default function chooseNumberUsers(e) {
  const regionName = e.target.parentNode.getAttribute("id");
  
  if (e.target.classList.contains("user-small")) {
    e.target.parentNode.innerHTML = laptopMarkup();

    GLOBAL_STATE.addUsers(regionName)
  }
  if (e.target.classList.contains("user-medium")) {
    e.target.parentNode.innerHTML = laptopAndSmartphoneMarkup();

    GLOBAL_STATE.addUsers(regionName);
  }
  if (e.target.classList.contains("user-large")) {
    e.target.parentNode.innerHTML = laptopSmartphoneMobileMarkup();

    GLOBAL_STATE.addUsers(regionName);
  }

  if (GLOBAL_STATE.users.length > 0) {
    refs.nextBtn.classList.remove("visually-hidden");
    refs.nextBtn.addEventListener("click", onNextBtnClick);
  }
  if (GLOBAL_STATE.users.length === 5) {
    refs.map.removeEventListener("click", chooseNumberUsers);
    refs.message.textContent =
      "Where is Your Data? Choose one spot for Object Storage system";
    refs.nextBtn.classList.add("visually-hidden");
    refs.nextBtn.textContent = "Start";
    dataCenterRender();
    refs.nextBtn.removeEventListener("click", onNextBtnClick);
  }
}
