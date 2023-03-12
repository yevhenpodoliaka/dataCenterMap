import { GLOBAL_STATE } from "./main.js"
import refs from "./refs.js"


export default function renderLatency(){
    const { users, currentDataCenter, newDataCenter } = GLOBAL_STATE

    const small = document.querySelectorAll(".device-small");
    const medium = document.querySelectorAll(".device-medium");
    const large = document.querySelectorAll(".device-large");
    console.log(small, medium, large)
    

//     const usersRefs = users.map(continentUsersRefs).filter(i=>i);
//     console.log(usersRefs)
}