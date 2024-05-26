let allDishes = document.getElementById("allDishes");
let content = "";;
menubar.forEach(()=>{
  let individualDish = ` <div class="dish">
  <img src="./images/item1.jpg" width="200" height="90" />
  <div class="dishOuter">

  <div class="dishInner">
    <h3 class="dishName">Buttermilk Pancake</h3>
    <h3 class="dishPrice">$10.00</h3>
  </div>

  <p class="dishContent">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas
    iste impedit quis, recusandae necessitatibus commodi nobis iusto amet
    quidem quasi exercitationem doloremque placeat cumque eaque repellat.
    Excepturi, labore? Voluptates.
  </p>

</div>
</div>`;
content += individualDish;
});

allDishes.innerHTML = content;