// union type assignment
console.log("1)Union type: variable has string,number and string[] datatypes.");
console.log("");
var stringNumber;
stringNumber = "This is string";
console.log("stringNumber: ".concat(stringNumber));
stringNumber = 9503924333;
console.log("stringNumber: ".concat(stringNumber));
stringNumber = ["This", "is", "string", "Array"];
console.log("stringNumber: ".concat(stringNumber));
console.log("");
console.log("2)created objects using Class parameter property in constructor.");
var newPerson = /** @class */ (function () {
    // public name: string;       
    // public contact: number;
    function newPerson(name, contact) {
        this.name = name;
        this.contact = contact;
        // this.fname = fname;
        // this.contact = contact;
    }
    return newPerson;
}());
var Rohit = new newPerson('Rohit', 95039151622);
console.log(Rohit);
var Nikhil = new newPerson('Nikhil', 8886595485);
console.log(Nikhil);
console.log("");
console.log("3)Intersection Type (&).");
var example;
example = {
    name: "Shubham",
    contact: 9503924333
};
// console.log(`\nExample 1] Log object on console`);
// console.log(example);
// console.log(`\nExample 2] The object with message :`);
console.log("The name is ".concat(example.name, " and Contact No is is ").concat(example.contact));
// console.log(`\nExample 3]  function with object as argument with message :`);
// function info(informationObj) {
//     console.log(`Id : ${informationObj.id}\nName is ${informationObj.name}  `);
// }
// info(example)
console.log("");
console.log("4)Optional Paramenter. In this made city as a optional parameter. In infosys city is absent.");
function company(name, totalEmployee, city) {
    console.log("Name:", name);
    console.log("totalEmployee:", totalEmployee);
    if (city != undefined) {
        console.log("city:", city);
    }
}
company("TCS", 15000, "Pune");
console.log("");
company("Infosys", 20000);
