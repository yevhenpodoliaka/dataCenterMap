import { GLOBAL_STATE } from "../main.js";

const create = (continent) => {
  return {
    small: document.querySelector(`#${continent} .device-small`),
    medium: document.querySelector(`#${continent} .device-medium`),
    large: document.querySelector(`#${continent} .device-large`),
  };
};

export default function onStartBtnClick() {
  const users = GLOBAL_STATE.users;

  const usersRef = users.map((u) => {
    return create(u);
  });

}

// const asia = create("asia")

// console.log(asia)

// const start = GLOBAL_STATE.currentDataCenter.location
// const endArr = GLOBAL_STATE.newDataCenter.map(i => i.location)
// console.log("end",endArr)
// console.log("start", start)

// console.log("args", start, endArr[0]);
// const distance = GLOBAL_STATE.getDistance(start, endArr[0])
// console.log(distance)

// GLOBAL_STATE.reset()
// document.location.reload();

//  console.log("data atribute",document.querySelector("[data-location='singapore']"));
