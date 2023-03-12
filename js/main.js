import refs from "./refs.js";
import chooseNumberUsers from "./handler/chooseNumberUsers.js";
import calculateDistance from "./helpers/calculateDistance.js";
refs.map.addEventListener("click", chooseNumberUsers);


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












