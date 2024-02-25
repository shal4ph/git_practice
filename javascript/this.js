const emp = {
    first: "Ram",
    sec: "tt",
    showDetails: function(){
        console.log(this.first + " works " + this.sec);
    }
   
}
emp.showDetails();
console.log(emp.showDetails);
console.log(emp.showDetails());