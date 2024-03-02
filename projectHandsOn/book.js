
// let allBooks = [{
//     id: 1,
//     title: "eee",
//     author: "aaa",
//     ratings: [3.0, 3.5, 4.2, 4.6],
//     reviews: [{
//         username: "Ram",
//         content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nobis nihil fugiat sit magnam. Exercitationem quae provident ",

//     },
//     {
//         username: "Ramesh",
//         content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nobis nihil fugiat sit magnam. Exercitationem quae provident ",

//     },
//     {
//         username: "Ramooo",
//         content: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nobis nihil fugiat sit magnam. Exercitationem quae provident ",

//     }
//     ]

// }];

function Book(title, author, year){
this.title = title;
this.author = author;
this.year = year;
this.id = Date.now().toString();
this.ratings = [];
this.reviews = [];
}

const BookCollection = {
    book: [],
    //1. add a book

    addBook: function(book){
this.books.push(book);
console.log("book added sxsfully");
console.log(`Book ${book.title} added sxsfully with ID ${book.id}`);
    },

//2. remove book

removeBook: function(removeId){

    let bookToBeRemoved = this.books.findIndex(book=>book.id === removeId);
if(this.bookToBeRemoved ==-1){console.log(`no book with ID ${removeId} found`)}
else {
    let removedBook = this.books.splice(bookToBeRemoved, 1);
    console.log(`the book ${removedBook[0].title} has been removed from collxn`)
}

},
//3. search for a book

searchBook: function(title){
let filteredBooks = this.books.filter((book) => book.title.includes(title));
if(filteredBooks.length ==0){
    console.log(`no books found with this title ${title}`);
}
else {
    console.log(" here is what we found: ");
    filteredBooks.forEach(book=>console.log(`${book.title} released in ${book.year} written by ${book.author}`));
}
},
//4. add a rating
rateBook: function(id, rating){
    let book = this.books.find(book =>book.id===id);
    if(!book){
        console.log(`no book with ID ${id} found`)
    }else {
        book.ratings.push(rating);
        console.log(`your rating for ${book.title} stored sxsfly`);
    }
},

//5. add a review
reviewBook: function(id, review){
    let book = this.books.find(book =>book.id===id);
    if(!book){
        console.log(`no book with ID ${id} found`)
    }else {
        book.ratings.push(review);
        console.log(`your review for ${book.title} stored sxsfly`);
    }
},
//5. calculate average rating
calculateAverageRating: function(id){
    let book = this.books.find((book) => book.id === id);
    let initialValue = 0;
    let noOfRatings = book.ratings.length;
    let totalRatings = book.ratings.reduce((accumulator, currentValue)=> accumulator+currentValue, initialValue);
    let averageRating = totalRatings/noOfRatings;
    console.log(`average rating for ${book.title} and ${book.author} is ${averageRating}`)
},


};


let choice = -1;

do {

console.log("choose an option : \n1. add a book\n2. remove a book\n3. search for a book\n4. Add a rating\n5. add a review \n6. compute average of all ratings\n7. exit");

choice = parseInt(prompt("enter choice: "));

    switch(expression){
        case 1 : let title = prompt("enter title: ")
        let author = prompt("enter author ");
        let year = prompt("enter release year")
        let newBook = new Book(title, author, year);
        BookCollection.addBook(newBook);
        break;
        case 2 : 
        let removeId = prompt("enter id of book : ");
        BookCollection.removeBook(removeId);
        break;
        case 3 : let searchTitle = prompt("enter title to search")

BookCollection.searchBook(searchTitle);
        break;
        case 4 : 
        let ratingID = prompt("enter ID of book to rate: ");
        let rating = prompt("enter rating(1 to 5)");
        break;
        case 5 : 
        let reviewID = prompt("enter ID of book to review");
        let username = prompt("enter username");
        let newReview = prompt("add new review");
        BookCollection.reviewBook(reviewID, newReview);
        break;
        case 6 : 
        let averageID = prompt("enter ID of book u want average rating for: ");
        BookCollection.calculateAverageRating(averageID);
        break;
        case 7 :  console.log("thanks for stopping by");
        break;
        default : ;
    }
}while (choice >=1 && choice < 7);


