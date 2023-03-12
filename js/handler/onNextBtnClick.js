import refs from "../refs.js";
import dataCenterRender from "../dataCenterRender.js";
import chooseNumberUsers from "./chooseNumberUsers.js";

export default function onNextBtnClick() { 
    refs.map.removeEventListener("click", chooseNumberUsers); 

   refs.continents.forEach((i) =>
    i.firstElementChild.classList.contains("user-small")?
    i.innerHTML = "" : i)
    refs.message.textContent = "Where is Your Data? Choose one spot for Object Storage system"
    refs.nextBtn.classList.add("visually-hidden");
    refs.nextBtn.textContent = "Start"
    dataCenterRender()
    refs.nextBtn.removeEventListener("click", onNextBtnClick);
}