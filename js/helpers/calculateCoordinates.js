import refs from "../refs.js";

export default function calculateCoordinates(rect) {
    const map = refs.map.getBoundingClientRect();
    const x = rect.x - map.x
    const y = rect.y - map.y
    
    return {x,y}

}


// const map = refs.map.getBoundingClientRect();

// const na = refs.northAmerica.getBoundingClientRect();
// const naX = na.x-map.x
// const naY = na.y - map.y;


// const asia = refs.asia.getBoundingClientRect();
// const asiaX=asia.x-map.x 
// const asiaY = asia.y - map.y; 

// const australia = refs.australia.getBoundingClientRect();
// const australiaX=australia.x-map.x
// const australiaY = australia.y - map.y; 

// const sa = refs.southAmerica.getBoundingClientRect();
// const saX=sa.x-map.x
// const saY =  sa.y-map.y 

// const europe = refs.europe.getBoundingClientRect();
// const europeX=europe.x-map.x
// const europeY =  europe.y-map.y 