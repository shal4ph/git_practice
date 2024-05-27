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



let allDishes = document.getElementById("allDishes");
let content = "";
displayAll(menu);
function displayAll(dishes){
content = "";
dishes.forEach((dish)=>{
  let individualDish = `<div class="dish">
  <img src=${dish.img} width="200" height="90" />
  <div class="dishOuter">

  <div class="dishInner">
    <h3 class="dishName">${dish.title}</h3>
    <h3 class="dishPrice">$${dish.price}</h3>
  </div>

  <p class="dishContent">
   ${dish.desc}
  </p>

</div>
</div>`;
content += individualDish;
});

allDishes.innerHTML = content;
//filter logic here
}
let allButtons = document.querySelectorAll("button");
//console.log(allButtons);
allButtons.forEach((button)=>
button.addEventListener("click", (e)=>{
  filterItems(e.target.innerText);
})
);

function filterItems(category){
  allDishes.innerHTML += "";
 // console.log(category);
 if(category=="All"){
  displayAll(menu);
 } else {
  let filteredItems = menu.filter((dish)=>dish.category.toLowerCase()==category.toLowerCase()
  );
  //console.log(filteredItems);
  displayAll(filteredItems);
 }
  
  
}