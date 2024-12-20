let image1 = document.querySelector(".pl-1");
let image2 = document.querySelector(".pl-2");
let left = document.querySelector(".left-btn");
let right = document.querySelector(".right-btn");

let faces = [
  "face-1.png",
  "face-2.png",
  "face-3.png",
  "face-4.png",
  "face-5.png",
  "face-6.png",
];

const randomImage = () => {
  const random = Math.random() * faces.length;
  const floor = Math.floor(random);
  return floor;
};

left.addEventListener("click", () => {
  image1.src = `${faces[randomImage()]}`;
});
right.addEventListener("click", () => {
  image2.src = `${faces[randomImage()]}`;
});
