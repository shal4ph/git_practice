class Courier{
    constructor(weight, destination, source, bookedBy){
        this.weight = weight;
        this.destination = destination;
        this.source = source;
        this.bookedBy = bookedBy;
    }
    bookCourier(){
        this.price =  this.weight > 20 ? 200 : 100;
        return `Courier booked! The price is ${this.price}`;
    }
    showCourier(){
        return `The courier is headed to ${this.destination}. It was booked by ${this.bookedBy} at ${this.source} and weight is ${this.weight}`;
    }
}
let choice = -1;
do{
    let myCourier = new Courier(25,"goa", "ramgarh", "Sita");
    console.log("Choose one : \n1. Book Courier\n2. See Details\n3. Quit");
    choice = parseInt(prompt("enter your choice : "));
    switch (choice){
        case 1: console.log(myCourier.bookCourier()); 
        break;
        case 2: console.log(myCourier.showCourier()); 
        break;
        case 3: console.log("thanks for stopping by"); 
        break;
        default:
            console.log("Invalid choice");
    }
}
    while (choice >0 && choice <= 3);

