class Person{
    display(){
        console.log("hi, this is person");
    }
}

class YoungPerson extends Person {
    display(){
        console.log("hi, this is young person");
    }
}
class OldPerson extends Person{
    display(){
        console.log("hi, this is old person");
    }
}
let person = new Person();
person.display();

let youngPerson = new YoungPerson();
youngPerson.display();

let oldPerson = new OldPerson();
oldPerson.display();