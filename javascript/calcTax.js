// function calculateTax(price, taxRate){
//    // let result = price + (taxRate/100)*price;

// return parseInt(price + (taxRate/100)*price);
// }

// console.log("total price of tax is: "+calculateTax(100, 50));
// ;

let emp = { first: 'Sita', last: 'Jija', age: 29};
let emp2 = { first: 'Mita', last: 'Pija', age: 49};

let showDetails = function(username, salary){
    console.log(this.first+ " "+ this.last+ " with age as "+this.age+ " has username "+ username + " and has salary "+salary);
}
showDetails.call(emp2, "shal1234", "1000");
showDetails.apply(emp, ['shalu89', '909']);