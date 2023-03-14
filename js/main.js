import refs from "./refs.js";
import chooseNumberUsers from "./handler/chooseNumberUsers.js";

refs.map.addEventListener("click", chooseNumberUsers);


const oceania = {
  id: "oceania",
  name: "Oceania",
  latencyTime: {
    asia:3000,
    australia: 5000,
    europe: 8000,
    "north-america": 12000,
    "south-america" :11000
  },
    downloadTime: {
    asia:10000,
    australia: 11000,
    europe: 36000,
    "north-america": 46000,
    "south-america" :52000,
  }
};
const europe = {
  id: "europe",
  name: "Europe",
  latencyTime: {
    europe: 3000,
    australia: 9000,
    asia: 9000,
    "north-america": 10000,
    "south-america": 10000,
  },
  downloadTime: {
    europe: 10000,
    australia: 14000,
    asia: 12000,
    "north-america": 26000,
    "south-america": 36000,
  },
};
const northAmerica = {
  id: "north-america",
  name: "North America",
  latencyTime: {
    australia: 12000,
    asia: 12000,
    europe: 8000,
    "north-america": 3000,
    "south-america": 5000,
  },
  downloadTime: {
    australia: 31000,
    asia: 37000,
    europe: 26000,
    "north-america": 10000,
    "south-america": 15000,
  },
};
const southAmerica = {
  id: "south-america",
  name: "South America",
  latencyTime: {
    australia: 12000,
    asia: 12000,
    europe: 8000,
    "north-america": 5000,
    "south-america": 3000,
  },
  downloadTime: {
    australia: 38000,
    asia: 48000,
    europe: 16000,
    "north-america": 15000,
    "south-america": 10000,
  },
};

export const GLOBAL_STATE = {
  centres: [oceania, europe, northAmerica, southAmerica],
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












