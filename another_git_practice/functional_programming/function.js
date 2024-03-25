

// var username = "qq";


// function greetUser() {console.log(`Hello, ${username}!`);}
// greetUser();
// greetUser("ww");



// let y = 20;


// function multiplyByY(n){
// console.log(n * y);}

// multiplyByY(3);
//let x=7;
//let y=9;

function compute(x,y, fn){
    if(typeof x==='number' && typeof y==='number'){
       console.log("true");
        return fn(x,y);
      
    
    } 
  
        return ()=> null;
    
}

   function fn(x,y){
    console.log(x+y);
   }
   let n1 = parseInt(10);
   let n2 = parseInt(20);
   compute(10,20,fn);
   console.log(compute(10,20,fn));
