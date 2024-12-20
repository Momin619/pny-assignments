let car = document.querySelector(".car");
let btn = document.querySelector(".btn-info");

let val = 100;
let xAxis = 20;
let yAxis = 20;

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    xAxis += 20;
    car.style.transform = `translate(${xAxis}px,${yAxis}px)`;
  } else if (e.key == "ArrowLeft") {
    xAxis -= 20;
    car.style.transform = `translate(${xAxis}px,${yAxis}px)`;
  } else if (e.key == "ArrowUp") {
    yAxis -= 20;
    car.style.transform = `translate(${xAxis}px,${yAxis}px)`;
  } else {
    yAxis += 20;
    car.style.transform = `translate(${xAxis}px,${yAxis}px)`;
  }
});
