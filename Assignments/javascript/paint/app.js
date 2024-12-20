let canvas = document.querySelector(".canvas");
// console.log(canvas.innerHTML);

canvas.addEventListener("click", (e) => {
  let ball = document.createElement("div");
  canvas.appendChild(ball);
  ball.classList.add("brush");
  let { clientX, clientY } = e;

  ball.style.transform = `translate(${clientX - 130}px,${clientY - 110}px)`;

  if (size1) {
    ball.style.width = "20px";
    ball.style.height = "20px";
  } else if (size2) {
    ball.style.width = "30px";
    ball.style.height = "30px";
  } else if (size3) {
    ball.style.width = "40px";
    ball.style.height = "40px";
  } else {
    ball.style.width = "50px";
    ball.style.height = "50px";
  }
  if (color1) {
    ball.style.background = "#0D6EFD";
  } else if (color2) {
    ball.style.background = "#198754";
  } else if (color3) {
    ball.style.background = "#DC3545";
  } else {
    ball.style.background = "#FFC107";
  }
});

let color = document.querySelectorAll(".color");

color.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("bg-primary")) {
      alert("Blue color is selected");
      color1 = true;
      color2 = false;
      color3 = false;
      color4 = false;
    } else if (e.target.classList.contains("bg-success")) {
      alert("Green color is selected");
      color1 = false;
      color2 = true;
      color3 = false;
      color4 = false;
    } else if (e.target.classList.contains("bg-danger")) {
      alert("Red color  is selected");
      color1 = false;
      color2 = false;
      color3 = true;
      color4 = false;
    } else {
      alert("Yellow color is selected");
      color1 = false;
      color2 = false;
      color3 = false;
      color4 = true;
    }
  });
});

let color1 = false;
let color2 = false;
let color3 = false;
let color4 = false;

let size1 = false;
let size2 = false;
let size3 = false;
let size4 = false;

let sizes = document.querySelectorAll(".size");
// console.log(sizes);
sizes.forEach((item, index) => {
  // alert("hello");
  item.addEventListener("click", (e) => {
    // alert("hi");
    if (e.target.classList.contains("size1")) {
      alert("X-small size is selected");
      size1 = true;
      size2 = false;
      size3 = false;
      size4 = false;
    } else if (e.target.classList.contains("size2")) {
      alert("Small size is selected");
      size1 = false;
      size2 = true;
      size3 = false;
      size4 = false;
    } else if (e.target.classList.contains("size3")) {
      alert("Medium size is selected");
      size1 = false;
      size2 = false;
      size3 = true;
      size4 = false;
    } else {
      alert("Large size is selected");
      size1 = false;
      size2 = false;
      size3 = false;
      size4 = true;
    }
  });
});
