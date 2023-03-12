import refs from "../refs.js";

export default function calculateCoordinates(rect) {

    const map = refs.map.getBoundingClientRect();
    const x = rect.x - map.x + rect.width / 2
    const y = rect.y - map.y + rect.width / 2;
    
    return {x,y}

}
