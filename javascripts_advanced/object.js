// let person = {

// name: "ww",
// isEmployed: false,
// age: 34,

// }
// console.log(person.name);
// person.company = "QQ";
// console.log(person);
// console.log(person.company);
// person.name = "qqqQQ";
// console.log(person.name);
// console.log(person.name + " is " + person.age + " years old");
// let { name } = person;
// console.log(`${person.name} is ${person.age} years old`);
let books = [
    { title: "tt",
    author: "ss",
    year: 1234
},
{
    title: "treet",
    author: "sraars",
    year: 1400

},
{
    title: "trrpp",
    author: "srrxx",
    year: 1499

},
{
    title: "tppt",
    author: "srxxs",
    year: 1888

}];
let newBook = {
    title: "ssss",
    author: "nnn",
    year: 1111,

};

let allBooks = [...books];
console.log(allBooks);
console.log("haha");
allBooks.push(newBook);
console.log(books);
console.log(allBooks);

