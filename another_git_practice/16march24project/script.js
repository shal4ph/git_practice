// https://www.googleapis.com/books/v1/volumes?q=quilting


let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

async function fetchBooks() {
    //step 1: read user input
    let bookTitle = document.getElementById("bookTitle").value;
    console.log(bookTitle);
}
//step 2. create request
// let myRequest = new XMLHttpRequest(); //readyState = 0
// myRequest.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
// ); //readyState = 1 now

//step 3 send request and received response
//myRequest.send(); //readyState = 2

//server processing, readyState = 3
//after response, readyState = 4
// myRequest.onreadystatechange = () => {
  
//     if (myRequest.readyState === 4 && myRequest.status === 200) {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);
        let convertedBooks = await response.json();
      //  console.log(convertedBooks);
        let newBook = convertedBooks.items

        .map(
            (book) => 
            `<div class="book">
            <img src=${book.volumeInfo.imageLinks.thumbnail}/>
                <h1>${book.volumeInfo.title}</h1>
                <p>${book.volumeInfo.description}</p>
            </div>`
        )
        .join("");

        content += newBook;
     
    //}
    allBooks.innerHTML = content;
//};

//step 4 convert response to JS object

//step 5 - display on front end