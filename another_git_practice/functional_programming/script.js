class Person {
    constructor(name, id, city){
        this.name = name;
        this.id = id;
        this.city = city;
    }

    showInfo(){
        return`${this.name} lives in ${this.city} and their ID is ${this.id}`;
    }
}

class librarian extends Person {}

class Student extends Person{
    constructor(name, id, city, houseNumber){
        super(name, id, city);
        this.houseNumber = houseNumber;
    }
    showInfo(){
        //return super();
        return`${this.name} lives in ${this.city} and their ID is ${this.id} and house number ${this.houseNumber}`;
    }
}

let newLibrarian = new librarian("Jane", 1234, "New York");
console.log(newLibrarian.showInfo());
let newStudent = new Student("bachha", 5678, "Dilli", 139);
console.log(newStudent.showInfo());