import refs from "../refs.js";

//Розрахунок точок координат елементів між якими буде намальвана парабола
//так як getBoundingClientRect() розраховує координати відносно  viewport
//виникає необхідність врахувати позицію батьківського елеметнта відносно  viewport
//це дозволяє отримати координати потрібного елемента
//так як координати "rect" вираховуються відносно верхнього лівого кута
//rect.width / 2 дозволяє вирахувати центр елемента


export default function calculateCoordinates(rect) {

    const map = refs.map.getBoundingClientRect();
    const x = rect.x - map.x + rect.width / 2
    const y = rect.y - map.y + rect.width / 2;
    
    return {x,y}

}
