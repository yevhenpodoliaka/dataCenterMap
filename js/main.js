import refs from "./refs.js";
import chooseNumberUsers from "./handler/chooseNumberUsers.js";
refs.map.addEventListener("click", chooseNumberUsers);


const asia = {
  id: "asia",
  name: "Asia",
  latencyTime: {
    asia:3,
    australia: 5,
    europa: 8,
    "north-america": 12,
    "south-america" :11
  }
};
const europe = {
  id: "europe",
  name: "Europe",
  latencyTime: {
    europe:3,
    australia: 9,
    asia: 9,
    "north-america": 10,
    "south-america": 10,
  },
};
const northAmerica = {
  id: "north-america",
  name: "North America",
  latencyTime: {
    australia: 12,
    asia: 12,
    europe: 8,
    "north-america":3,
    "south-america": 5,
  },
};
const southAmerica = {
  id: "south-america",
  name: "South America",
  latencyTime: {
    australia: 12,
    asia: 12,
    europe: 8,
    "north-america": 5,
    "south-america": 3,
  },
};

export const GLOBAL_STATE = {
  centres: [asia, europe, northAmerica, southAmerica],
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

};












