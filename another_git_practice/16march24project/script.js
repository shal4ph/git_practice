// https://www.googleapis.com/books/v1/volumes?q=quilting
//step 1: read user input
let searchButton = document.getElementById("SearchButton");
searchButton.addEventListener("click", fetchBooks);

function fetchBooks(){
    let bookTitle = document.getElementById("bookTitle").value;
console.log(bookTitle);
}
//step 2. create request
//step 3 send request and received response
//step 4 display on front end