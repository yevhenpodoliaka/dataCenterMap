import refs from "./refs.js";
import chooseDataCenter from "./handler/chooseDataCenter.js";
import dataCenterPositionsMarkup from "./markup/dataCenterPositionsMarkup.js";

export default function dataCenterRender() {
  refs.northAmerica.insertAdjacentHTML(
    "beforeend",
    dataCenterPositionsMarkup("south-america")
  );
  refs.northAmerica.insertAdjacentHTML(
    "beforeend",
    dataCenterPositionsMarkup("north-america")
  );

  refs.asia.insertAdjacentHTML(
    "beforeend",
    dataCenterPositionsMarkup("asia")
  );
  refs.europe.insertAdjacentHTML(
    "beforeend",
    dataCenterPositionsMarkup("europe")
  );

  refs.map.addEventListener("click", chooseDataCenter);
}
