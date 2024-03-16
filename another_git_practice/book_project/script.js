function Book(title, author, rating){
this.title = title;
this.author = author;
this.rating = rating;
this.id = Date.now().toString();
this.reviews = [];

}


console.log(currentBooks);
const BookCollection = {
  
    books:JSON.parse(localStorage.getItem("books"))||[];,

    //1. add a book
    addBook: function (){
        let bookTitle = document.getElementById("bookTitle").value;
        let bookAuthor = document.getElementById("bookAuthor").value;
        let bookRating = document.getElementById("bookRating").value;
        let book= new Book(bookTitle, bookAuthor, bookRating);
      this.books.push(book) ;
    //  console.log(this.books);
      this.displayBooks(this.books);
     // console.log(`Book ${book.title} added sxsfully with ID ${book.id}!`);
     attachRemoveListener();
     saveForLater();

    },

    // 2. remove a book
    removeBook: function(removeId){
        let bookToBeRemoved = this.books.findIndex((book) => book.id === removeId);
        if(bookToBeRemoved == -1){
            console.log("no book found");
          // console.log(`No book with ID ${removeId} found in the collxn!`);
        }else {
                let removeBook = this.books.splice(bookToBeRemoved, 1);
                console.log(removeBook);
                this.displayBooks(this.books);
            }
        
    },

    //3. search for a book
    searchBook: function (title) {
       
        let filteredBooks = this.books.filter((book) => book.title.includes(title));
        if (filteredBooks.length == 0) {
         document.getElementById("userMessage").innerText = "No books found!";
        } else {
          this.disp
          document.getElementById("userMessage").innerText = "";layBooks(filteredBooks);
        
        }
    },

    //. add a rating
    // rateBook: function(id, rating){
    //     let book = this.books.find((book)=> book.id === id);
    //     if (!book){

    //     } else {book.ratings.push(rating);
    //     }
    // },

    // 4. add a review
    reviewBook: function (id, review){
        let book = this.books.find((book)=> book.id === id);
        if (!book){

        } else {
            book.reviews.push(review);
        }
    },
    //5. display books
    displayBooks: function (inputArray){
        let content = "";

inputArray.forEach((book) => {
    let individualBook = `<div>
    <h3>Title : ${book.title}</h3>
    <h4>Author : ${book.author}</h4>
    <p>Rating : ${book.rating}</p>
    <button class="remove_button" id="${book.id}">Remove</button>
    </div>`;
    content += individualBook;
});
document.getElementById("bookList").innerHTML = content;
}
    
};

//adding event listener to the Add Book Button
let addBookButton =  document.getElementById("addBookButton");
//console.log(addBookButton);
addBookButton.addEventListener("click", () =>{BookCollection.addBook();});


//display books on the screen

// function displayBooks(inputArray){
// let content = "";


// BookCollection.books.forEach((book) => {
//     let individualBook = `<div>
//     <h3>Title : ${book.title}</h3>
//     <h4>Author : ${book.author}</h4>
//     <p>Rating : ${book.rating}</p>
//     </div>`;
//     content += individualBook;
// });
// document.getElementById("bookList").innerHTML = content;
// }

//adding event listener to the Remove Book Button

function attachRemoveListener(){
let allRemoveButtons = document.querySelectorAll(".remove_button");
console.log(allRemoveButtons);
allRemoveButtons.forEach((button)=>{
    button.addEventListener("click", ()=> {BookCollection.removeBook(button.id);});
});
}

// let removeBookButton = document.getElementById("");
// removeBookButton.addEventListener("click", (e) => {
//     BookCollection.removeBook(e.target.id);
// });

//adding onchange listener to search input
let searchInput = document.getElementById("searchTitle");
searchInput.addEventListener('change', ()=>{BookCollection.searchBook(searchInput.value);});

function saveForLater(){

    localStorage.setItem("books", JSON.stringify(BookCollection.books));
}
