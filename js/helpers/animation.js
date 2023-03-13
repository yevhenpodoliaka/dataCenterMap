
export default function animationLatency(latencyTime,continent) {
let start = Date.now();

let time = latencyTime; //100%
// time = 100%
//  interval time /20
//step =5%
let timer = setInterval(function () {
  let timePassed = Date.now() - start;
//   console.log("timePassed", timePassed);
  if (timePassed >= time) {
    clearInterval(timer);
    return;
  }

  draw(timePassed);
}, time / 20);

function draw(timePassed) {
  // console.log("draw", Date.now());
  document
    .querySelectorAll(`#${continent} .mask`)
    .forEach((e) => (e.style.width = ((time - timePassed) / time) * 100 + "%"));
}


}




