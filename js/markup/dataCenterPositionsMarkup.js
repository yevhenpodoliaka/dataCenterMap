

export default function dataCenterPositionsMarkup(location) {
    return `<div class ="data-center" data-location="${location}">
     <img class="location" src="./img/circle_empty.png" alt="server location">
      <img class="location-hover" src="./img/circle_filled.png" alt="server location">
     </div>`;
}
