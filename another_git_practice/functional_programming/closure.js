// function foo(){
//     let b =1;
//     function inner(){
//         return b;
//     }
//     return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());

function foo(outer_arg){

    function inner(inner_arg){
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(5);
console.log(get_func_inner(4));
console.log(get_func_inner(3));