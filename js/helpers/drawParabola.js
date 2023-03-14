//побудова параболи за допомогою canvas
// canvas має з мапою одну обгортку,
//позиціоную над мапоб з відповідними розмірами
//що дозволяє вирівняти координати холста відносно мапи
//за допомогою метода quadraticCurveTo
//та формули отримую параболу 
//додав параметр кольору

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
  ctx.quadraticCurveTo(
    (startX + endX) / 2,
    endY / 5,
    endX,
    endY
  );
  ctx.strokeStyle = color;
  ctx.stroke();
}
