// const menu = [

// {
//   id: 1,
//   title: "quarantine buddy",
//   category: "shakes",
//   price: 16.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is shake.`,
// },
// {
//   id: 2,
//   title: " buddy",
//   category: "dinner",
//   price: 10.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is dinner.`,
// },
// ,
// {
//   id: 3,
//   title: "quarantineyy buddy",
//   category: "shakes",
//   price: 11.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is shake.`,
// },
// {
//   id: 4,
//   title: "quarant buddy",
//   category: "lunch",
//   price: 16.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is lunch.`,
// },
// {
//   id: 5,
//   title: "qua buddy",
//   category: "lunch",
//   price: 19.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is lunch.`,
// },
// {
//   id: 6,
//   title: "quyy buddy",
//   category: "breakfast",
//   price: 14.99,
//   img: "./images/item1.jpg",
//   desc: `hello this is nashta.`,
// }
// ];

//API Connection

if (import.meta.env.DEV) {
  import("../api/browser").then(({ worker }) =>
    worker
      .start()
      .then(() => fetch("/dishes"))
      .then((res) => res.json())
      .then((res) => (menu = res))
  );
}

//variable declarations

let menu = [];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButtons = [];
let allDishes = document.getElementById("allDishes");
let content = "";
let cartContent = "";
let allButtons = document.querySelectorAll("button");

//function calls

updateCartCounter();
displayAll(menu);
displayCartDishes();

function displayAll(dishes) {
  content = "";
  dishes.forEach((dish) => {
    let individualDish = `<div class="dish">
  <img src=${dish.img} />
  <div class="dishOuter">

  <div class="dishInner">
    <h3 class="dishName">${dish.title}</h3>
    <h3 class="dishPrice">$${dish.price}</h3>
  </div>

  <p class="dishContent">
   ${dish.desc}
  </p>
<button class="dishCartButton">Add to cart</button>
</div>
</div>`;
    content += individualDish;
  });

  allDishes.innerHTML = content;
  getCartButtons();
}

//console.log(allButtons);
allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    filterItems(e.target.innerText);
  })
);

function filterItems(category) {
  allDishes.innerHTML += "";
  // console.log(category);
  if (category == "All") {
    displayAll(menu);
  } else {
    let filteredItems = menu.filter(
      (dish) => dish.category.toLowerCase() == category.toLowerCase()
    );
    //console.log(filteredItems);
    displayAll(filteredItems);
  }
}

//cart functions

function updateCartCounter() {
  document.getElementById("cartButton").innerHTML = "&#x1F6D2;" + cart.length;
}

function getCartButtons() {
  allAddToCartButtons = document.querySelectorAll(".dishCartButton");
  allAddToCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      addDishToCart(e.target.id);
    })
  );
}
function addDishToCart(dishID) {
  let flag = -1;
  menu.forEach((dish) => {
    if (dish.id == dishID) {
      cart.forEach((cartDish) => {
        if (cartDish.id == dishID) {
          cartDish.quantity += 1;
          flag = 1;
        }
      });
      if (flag != 1) {
        let tempDish = { ...dish, quantity: 1 };
        cart.push(tempDish);
      }
    }
  });
  updateCartCounter();
  displayCartDishes();
}

function displayCartDishes() {
  cartContent = "";
  cart.forEach((dish) => {
    let individualDish = `<div class="cartDish">
      <img src=${dish.img} alt="" />
      <h3>${dish.title}</h3>
      <h3>${dish.price}</h3>
      <h3>${dish.quantity}</h3>
      <p class="cartDelete" id=${dish.id}>x</p>
    </div>`;
    cartContent += dish;
  });
  document.getElementById("cart").innerHTML = cartContent;
  getDeleteButtons();
}
//select all Delete buttons
function getDeleteButtons() {
  allCartDeleteButtons = document.querySelectorAll(".cartDelete");
  allCartDeleteButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      removeDishFromCart(e.target.id);
      // console.log("Remove button clicked!"+e.target.id);
      //console.log(cart);
    })
  );
}

function removeDishFromCart(removeID) {
  let flag = -1;
  let tempID = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == removeID) {
      flag = 1;
      tempID = i;
    }
  }
  if (flag) {
    cart.splice(tempID, 1);
  }

  updateCartCounter();
  displayCartDishes();
}
