// function greetUser(hours){
//     if (hours>=0 && hours <=12){
// return "good morn";
//     }
//     else if (hours>=12 && hours <=16){
//         return "good aft";
        
//     }
//     else if (hours >=16 && hours <=20){
//         return "good nigt";
//     }
// }
// console.log(greetUser(10));
// console.log(greetUser(15));
// console.log(greetUser(20));

let orderData1 = {name:"shampu", cost: 500.0, discount: 10, taxrate:10, inStock: true, calculatePrice: function(){
    return (this.cost + (this.taxrate*100)/this.cost - (this.discount*100)/this.cost);
},}

let orderData2 = {name:"shamp999u", cost: 50990.0, discount: 9, taxrate:50, inStock: false, calculatePrice: function(){
    return (this.cost + (this.taxrate*100)/this.cost - (this.discount*100)/this.cost);
},

displayInstock: function(productName){
    if(this.inStock){
        return productName+ " is in stk";
    }
    else {return productName = " is not in stk";}
},
showDiscount: function() {
    return "tot discount is "+this.discount
},

}

console.log(orderData1.calculatePrice());
console.log(orderData1.displayInstock("shampu"));
console.log(orderData1.showDiscount());


orderData1.calculatePrice.call(orderData2);
