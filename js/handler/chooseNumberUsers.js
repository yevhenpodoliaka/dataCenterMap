import laptopMarkup from "../markup/laptopMarkup.js";
import laptopAndSmartphoneMarkup from "../markup/laptopAndSmartphoneMarkup.js";
import laptopSmartphoneMobileMarkup from "../markup/laptopSmartphoneMobileMarkup.js";
import dataCenterRender from "../dataCenterRender.js";
import onNextBtnClick from "./onNextBtnClick.js";
import refs from "../refs.js";

const selectedRegionsList = [];

export default function chooseNumberUsers(e) {
  const regionName = e.target.parentNode.getAttribute("id");

  if (e.target.classList.contains("users-small")) {
    e.target.parentNode.innerHTML = laptopMarkup();
    selectedRegionsList.push(regionName);
  }
  if (e.target.classList.contains("users-medium")) {
    e.target.parentNode.innerHTML = laptopAndSmartphoneMarkup();
    selectedRegionsList.push(regionName);
  }
  if (e.target.classList.contains("users-large")) {
    e.target.parentNode.innerHTML = laptopSmartphoneMobileMarkup();
    selectedRegionsList.push(regionName);
  }

  if (selectedRegionsList.length > 0) {
    refs.nextBtn.classList.remove("visually-hidden");
    refs.nextBtn.addEventListener("click", onNextBtnClick);
  }
  if (selectedRegionsList.length === 5) {
    refs.map.removeEventListener("click", chooseNumberUsers);
    refs.message.textContent =
      "Where is Your Data? Choose one spot for Object Storage system";
    refs.nextBtn.classList.add("visually-hidden");
    refs.nextBtn.textContent = "Start";
    dataCenterRender();
    refs.nextBtn.removeEventListener("click", onNextBtnClick);
  }
}