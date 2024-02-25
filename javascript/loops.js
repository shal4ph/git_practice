// // //loop var initiasation
// // //loop condition
// // //loop update increment or decrement i++ i--


// // // for (let i =1; i<=10; i=i+1){
// // //     console.log(i);
// // // }
// // for (let i=10; i>=1; i=i-1){
// // if(i==5){
// //     continue;
// // }
// // console.log(i);
// // }



// // const word = "hello";
// // const book = {
// //     title: "ss",
// //     rating: 4.0,
// //     price: 550.00
// // }
// // // for (const letter of word ){
// // // console.log(letter);

// // // }
// //  for (const key in book){

// //     console.log(key);
// //  }

//  let number = -5;
//  while (number <=10){
//     console.log(number);
//     number++;
//  }

//  //do while below

//  let choice = 0;
//  do{
    
// choice = prompt("pick an item : \n1. Tea\n2.  coffee");

// alert("your choice: "+ choice);

//  }
//  while(choice>=0 && choice <=5);

// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i+" x "+j + " = " + i*j);
//     }
// }


// const prompt=require("prompt-sync")({sigint:true}); 

let choice = 1;

do{

    
choice = prompt("pick \n1. tea \n2. coffee\n3. exit");
 

switch(choice){

    case 1:
        alert("tea coming");
        break;
    case 2:
        alert("coffee coming");

        break;
    default:
        alert("invalid choice");

}
}
while(choice>=1 && choice <=5);
