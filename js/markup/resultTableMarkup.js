import tableRowMarkup from "./tableRowMarkup.js";
import {GLOBAL_STATE} from "../main.js"

export default function resultTableMarkup() {
  const { users } = GLOBAL_STATE;
  const byteCloud = users.map(tableRowMarkup).join(" ");
  const objectStorage = users.map(tableRowMarkup).join(" ");

  return ` <div class="backdrop">
 
  <div class="modal">
     <p class="modal-info">Do you want to Start again ? Press</p> <button class="resetBtn" type="button">Reset</button>
      <div class="card">
        <h3 class="title">Byte cloud</h3>
            ${byteCloud}
      </div>

      <div class="card">
        <h3 class="title">Object storage</h3>
        ${objectStorage}
      </div>
    </div>
    </div>`;


}
