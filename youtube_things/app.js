particlesJS("particles-js", {
  particles: {
    number: {
      value: 66,
      density: { enable: true, value_area: 394.57382081613633 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "edge",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

let icon = document.querySelector(".bi-chevron-down");
let list = document.querySelector(".list");

let h = document.querySelector(".change-lang");

let items = document.querySelectorAll(".list-items");

let side_bar = document.querySelector(".sidebar");

let main_line = document.querySelector(".lines");

let line = document.querySelectorAll(".line");
list.style.opacity = "0";

let display_menu = document.querySelector(".display-menu");
let drop_icon = document.querySelector(".bi-chevron-down");

let sidebar_list = document.querySelectorAll(".f-item");

icon.addEventListener("click", () => {
  list.style.opacity = "1";
});

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    h.innerHTML = item.innerHTML;
  });
});

main_line.addEventListener("click", () => {
  line.forEach((item, index) => {
    line[0].style.transform = "rotate(405deg)   translate(12px,15px)";
    line[2].style.transform = "rotate(495deg)";

    line[1].style.opacity = "0";
  });
});

main_line.addEventListener("click", () => {
  if (display_menu.innerHTML == "MENU") {
    display_menu.innerHTML = "CLOSE";
    side_bar.style.transform = "translateX(0)";
  } else {
    display_menu.innerHTML = "MENU";
    side_bar.style.transform = "translateX(-100%)";
  }

  sidebar_list.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("animate");
    }, 300 * index);
  });
});

drop_icon.addEventListener("click", () => {
  drop_icon.style.transform = "rotate(180deg) translateY(-10px)";
});
