let categories = ["tt", "ww"];
console.log(categories[0]);

let book = {
    title: "The",
    author: "aa",
    avRating: 4.4,
    isInStoc: true,
};
console.log(typeof book);
console.log(100 !== "100");

let totalAmount = 1000.0;
discount = 8.0;

if (totalAmount > 4000.00){
    discount = 10.0;
} else if (totalAmount > 3000.00){
    discount = 7.0;
}
else {
    discount = 5.0;
}
console.log("total amount = " + totalAmount);
console.log("discount = "+ discount);


username = "shalu123";
password = "shal123";
if (username === "shalu123" && password === "shal111123"){
    console.log(" username and password are correct");
}
else {
    console.log(" username and password are incorrect. try again");
}

var named = 1000;
function modifyNamed(){
var named = 2000;
console.log("initial "+named);
}
modifyNamed();
console.log("final " + named);
var amount = 1000;
var amount = 8000;
console.log("recent amount "+ amount);

const taxAmount = 10.0;
console.log(typeof taxAmount);