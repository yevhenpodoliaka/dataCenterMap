import refs from "./refs.js";
import chooseNumberUsers from "./handler/chooseNumberUsers.js";
import calculateDistance from "./helpers/calculateDistance.js";
import calculateCoordinates from "./helpers/calculateCoordinates.js";
import drawParabola from "./helpers/drawParabola.js"
refs.map.addEventListener("click", chooseNumberUsers);
import { ctx } from "./helpers/drawParabola.js";

const singapore = {
  id: "singapore",
  name: "Singapore",
  location: [1.333217, 103.857971],
};
const germany = {
  id: "germany",
  name: "Germany",
  location: [50.868561, 10.252547],
};
const northAmerica = {
  id: "north-america",
  name: "North America",
  location: [37.824352, -121.897435],
};
const southAmerica = {
  id: "south-america",
  name: "South America",
  location: [32.259548, -82.906252],
};

export const GLOBAL_STATE = {
  centres: [singapore, germany, northAmerica, southAmerica],
  users: [],
  currentDataCenter: null,
  newDataCenter: [],

  addUsers(continent) {
    this.users.push(continent);
  },
  addCurrentDataCenter(dataCenter) {
    const res = this.centres.find((i) => i.id === dataCenter);
    this.currentDataCenter = res;
  },
  addNewDataCenter(dataCenter) {
    const res = this.centres.find((i) => i.id === dataCenter);
    this.newDataCenter.push(res);
    console.log(this.newDataCenter);
  },
  getDistance(start, end) {
    const distance = calculateDistance(start[0], start[1], end[0], end[1]);
    return distance;
  },
  reset() {
    (this.users.length = 0), (this.currentDataCenter = null);
    this.newDataCenter.length = 0;
  },
};

// const map = refs.map.getBoundingClientRect();

// const na = document
//   .querySelector("#north-america .user-large")
//   .getBoundingClientRect();
// const naX = na.x - map.x;
// const naY = na.y - map.y;

// const asia = document
//   .querySelector("#asia .user-large")
//   .getBoundingClientRect();
// const asiaX = asia.x - map.x;
// const asiaY = asia.y - map.y;

// const australia = document
//   .querySelector("#australia .user-large")
//   .getBoundingClientRect();
// const australiaX = australia.x - map.x;
// const australiaY = australia.y - map.y;

// const sa = document
//   .querySelector("#south-america .user-large")
//   .getBoundingClientRect();
// const saX = sa.x - map.x;
// const saY = sa.y - map.y;

// const europe = document
//   .querySelector("#europe .user-large")
//   .getBoundingClientRect();
// const europeX = europe.x - map.x;
// const europeY = europe.y - map.y;

// console.log(sa, europe, australia, asia, na)

// const { x: startX, y: startY } = calculateCoordinates(na);
// const { x: end1X, y: end1Y } = calculateCoordinates(asia);
// const { x: end2X, y: end2Y } = calculateCoordinates(europe);
// const { x: end3X, y: end3Y } = calculateCoordinates(sa);
// const { x: end4X, y: end4Y } = calculateCoordinates(australia);

// console.log(startX, startY, end1X, end1Y);
// drawParabola(startX, startY, end2X, end2Y);
// drawParabola(startX, startY, end3X, end3Y);
// drawParabola(startX, startY, end4X, end4Y);
// drawParabola(startX, startY, end1X, end1Y);

// console.log(ctx)

// setTimeout(() => { ctx.clearRect(0, 0, 1000, 600) }, 5000)








