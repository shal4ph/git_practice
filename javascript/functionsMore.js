function greetUser(hours){
    if (hours>=0 && hours <=12){
return "good morn";
    }
    else if (hours>=12 && hours <=16){
        return "good aft";
        
    }
    else if (hours >=16 && hours <=20){
        return "good nigt";
    }
}
console.log(greetUser(10));
console.log(greetUser(15));
console.log(greetUser(20));