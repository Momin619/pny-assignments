let btn = document.querySelectorAll(".btn-outline-success");

let cart = document.querySelector(".bi-cart-plus-fill");
let text = document.querySelector(".number");

let croton = document.querySelector(".croton");
let button = document.querySelector(".bi-list");
let bar = document.querySelector(".sidebar");
let underlay = document.querySelector(".underlay");
let underlay_2 = document.querySelector(".underlay2");
let anchor = document.querySelectorAll(".anchor"

button.addEventListener("click", () => {
  bar.classList.toggle("move");

 
);
  if (bar.classList.contains("move")) {
    underlay.style.transform = "translateX(0)";
    underlay.style.transition = "1.2s all";
  } else {
    underlay.style.transform = "translateX(-120%)";
    underlay.style.transition = "1.2s all";
  }
});

let number = 0;
btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert("Added to Cart");
    number++;

    if (number < 10) {
      text.innerHTML = ` ${0}${number} `;
    } else if (number >= 10) {
      text.innerHTML = number;
    }
  });
});
// Get all buttons and the cart container

let cart_menu = document.querySelector(".cartmenu");

let title = document.createElement("h1");
title.innerHTML = "Add To Cart";
title.classList.add("title1");
title.style.fontWeight = "bold";
cart_menu.appendChild(title);

cart.addEventListener("click", () => {
  cart_menu.classList.toggle("cartmove");
  if (cart_menu.classList.contains("cartmove")) {
    underlay_2.style.transform = "translateX(0)";
    underlay_2.style.transition = "1s all";
  } else {
    underlay_2.style.transform = "translateX(1910px)";
    underlay_2.style.transition = "1s all";
  }
});

// btn.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     let menu = document.createElement("div");
//     menu.classList.add("display");
//     cart_menu.appendChild(menu);
//     console.log(menu);
//     let img = document.createElement("img");
//     img.src = "";
//     let details = document.createElement("h2");
//     details.classList.add("details");

//     menu.appendChild(img);
//     menu.appendChild(details);
//     // if-else conditions
//     if (item.classList.contains("croton")) {
//       img.src = "pics/FG143ROIMG_0488MG_opt-e1667581033304.png";
//       details.innerHTML = "Croton";
//       img.style.clipPath = "circle()";
//       img.style.height = "100%";
//       // img.style.border = "1px solid green";
//     } else if (item.classList.contains("money")) {
//       img.src = "pics/Money-Plant-Green_1.webp";
//       details.innerHTML = "Money Plant";
//       img.style.clipPath = "circle()";
//       img.style.height = "100%";
//     }
//   });
// });

// Select elements
const cartMenu = document.getElementById("cart-items");
const cart_1 = [];

// Add event listener to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;
    const id = event.target.dataset.id;

    // Add item to cart
    addToCart(name, price, id);
  });
});

function addToCart(name, price, id) {
  // Find if the item is already in the cart
  const existingItem = cart_1.find((item) => item.id === id);
  if (existingItem) {
    // Update quantity if the item is already in the cart
    existingItem.quantity += 1;
  } else {
    // Add new item to the cart
    cart_1.push({ name, price, id, quantity: 1 });
  }

  // Update the cart menu
  updateCartMenu();
}

function updateCartMenu() {
  // Clear existing items
  cartMenu.innerHTML = "";

  // Add items to the cart menu
  cart_1.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.quantity} x ${item.price} Rs`;
    cartMenu.appendChild(li);
  });
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    // Create a clone of the cart icon
    const cartIcon = this.querySelector(".cart-icon");
    const iconClone = cartIcon.cloneNode(true);

    // Style the clone for the animation
    iconClone.classList.add("cart-fly");
    document.body.appendChild(iconClone);

    // Remove the clone from the DOM after animation ends
    iconClone.addEventListener("animationend", () => {
      iconClone.remove();
    });

    // Optional: Add a scale effect to the original cart icon on click
    cartIcon.classList.add("animate");
    setTimeout(() => {
      cartIcon.classList.remove("animate");
    }, 300); // Duration should match the CSS transition
  });
});
