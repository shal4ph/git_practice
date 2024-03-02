//let bookTitles = ["ram nagar", "hari vansh", "maludi days", 100.00, true, 4.5];


// let bookTitles = new Array(2);
// bookTitles[0] = "ww";
// bookTitles[2] = "rr";

// console.log(bookTitles[0]);

function groupArrayElements(inputArr, n){
    //check if n valid number
    const result = [];
    if(n<=0 || !Number.isInteger(n)){

return result;
    }
//calculate length of each subarray

const len = Math.floor(inputArr.length / n);
//initialise array 

let start = 0; //starting index
let end = len;

for(let i = 0; i< n; i++){

    if(i == n-1){ result.push.slice(start);
    } else{
        result.push(inputArr.slice(start, end))
    }
    start = end;
    end+=len;
              
    }
    return result;
}
    console.log(groupArrayElements([1,2,3,4,5,6],3));

//     let arr = [1,2,3,4,5,6]
// let num = 2;
// const response = groupArrayElements(arr, num);
// console.log(response);







