var canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;
canvas.style.position="absolute"
canvas.style.top="0px"
canvas.style.left="0px"

export default function drawParabola(startX, startY, endX, endY,color="red") {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  // ctx.arc(start.x, start.y, end.x, end.y, Math.PI, false); // Mouth (clockwise)
  ctx.quadraticCurveTo(
    // (start.x + end.x) / 2,
    // Math.min(start.y, end.y) -
    //   Math.abs(start.x - end.x) ** 2 / (4 * Math.abs(start.y - end.y)),
    (startX + endX) / 2,
    endY / 5,
    endX,
    endY
  );
  ctx.strokeStyle = color;
  ctx.stroke();
}



// console.log(from, to, parent);



// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = 1000;
// canvas.height = 600;

// function drawParabola(startX, startY, endX, EndY) {
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   // ctx.arc(start.x, start.y, end.x, end.y, Math.PI, false); // Mouth (clockwise)
//   ctx.quadraticCurveTo(
//     // (start.x + end.x) / 2,
//     // Math.min(start.y, end.y) -
//     //   Math.abs(start.x - end.x) ** 2 / (4 * Math.abs(start.y - end.y)),
//     (startX + endX) / 2,
//     EndY / 5,
//     endX,
//     EndY
//   );
//   ctx.strokeStyle = "red";
//   ctx.stroke();
// }
// console.log(naX, naY, europeX, europeY);
// drawParabola(naX,naY,europeX,europeY)
// drawParabola(naX,naY,asiaX,asiaY)
// drawParabola(naX,naY,saX,saY)
// drawParabola(naX,naY,australiaX,australiaY)
// drawParabola(naX,naY,)




// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// визначення точок start та end
// var start = { x: from.x-parent.x, y: from.y-parent.y };
// var end = { x:to.x-parent.x, y:to.y-parent.y };

// встановлення розмірів canvas та відображення зображення
// canvas.width = 1000;
// canvas.height = 600;

// намалювання параболи
//         function drawParabola() {
//           ctx.beginPath();
//           ctx.moveTo(start.x, start.y);
//           // ctx.arc(start.x, start.y, end.x, end.y, Math.PI, false); // Mouth (clockwise)
//           ctx.quadraticCurveTo(
//             // (start.x + end.x) / 2,
//             // Math.min(start.y, end.y) -
//             //   Math.abs(start.x - end.x) ** 2 / (4 * Math.abs(start.y - end.y)),
//             (start.x + end.x) / 2,
//             end.y / 5,
//             end.x,
//             end.y
//           );
//           ctx.strokeStyle = "red";
//           ctx.stroke();
//         }
// drawParabola()