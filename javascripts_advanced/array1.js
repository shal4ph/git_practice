// let allReviews = ["one", "two", "ww"];
// console.log("before reverse: " + allReviews);
// allReviews.reverse();
// console.log("before reverse: " + allReviews);


// let prices = [100.2, 200.6, 350.7];
// let newPrices = Array.of(100.2, 200.6, 350.7);
// console.log(newPrices);
// console.log(prices);

// let characters = Array.from("How are you?");
// console.log(characters);
// console.log(characters.join(""));


let numbers = [];
let choice;
do{
console.log("choose option: \n1. add a no\n2. remove a no\n3. print nos\n4. exit")
choice = parseInt(prompt("enter your choice: "));
switch(choice){

    case 1: let numberToAdd = prompt("enter value to add: "); 
    numbers.push(numberToAdd); console.log("added");
    break;

    case 2: let numberToRemove = prompt("enter no to remove: ");
    let indexToRemove = numbers.indexOf(numberToRemove);
    if (indexToRemove !== -1){
        number.splice(indexToRemove, 1);
        console.log("removed");
    }
        else {console.log("no such value found")}
    
    break;
    case 3: for (const number of numbers){console.log(number)};break;
    case 4: console.log("thanks for coming"); break;
    default: console.log("invalid choice")
;}
}
while (choice >=1 && choice < 4);

