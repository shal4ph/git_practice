// let choice = 0;
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
let choice = 1;

do{

    
let a = prompt("pick \n1. tea \n2. coffee\n3. exit");
choice = intParse(a);
 

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

