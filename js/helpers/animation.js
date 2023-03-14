//функція приймає два аргумента
// час затримки та континент на якому цю затримку треба відобразити

export default function animationLatency(latencyTime,continent) {
  let start = Date.now();

  let time = latencyTime; //100%

  let timer = setInterval(function () {
    //рахує пройдений час
    let timePassed = Date.now() - start;
//очищує інтервал по завершенню
    if (timePassed >= time) {
      clearInterval(timer);
      return;
    }

    draw(timePassed);
  }, time / 20);
//анімація відбувається шляхом зменшення ширин маски девайса
  function draw(timePassed) {
    document
      .querySelectorAll(`#${continent} .mask`)
      .forEach(
        (e) => (e.style.width = ((time - timePassed) / time) * 100 + "%")
      );
  }
}




