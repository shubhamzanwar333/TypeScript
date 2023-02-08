export{}
abstract class Car {
    Wheel(): string {
        return '4 wheeler';
    }

    CheckAC(): string {
        return 'Ac is available';
    }

    CallFacility() : string {
        return "Call facility supported"
    }

    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
}

class Hundyai extends Car {
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'gray';
    }


}

let hundai = new Hundyai();

console.log(hundai.CallFacility());

class Toyota extends Car {
    Price(): number {
       return 1000000;
    }
    getTotalSeats(): number {
       return 5;
    }
    Color(): string {
        return 'white';
    }

   
}

class Tata extends Car {
    Price(): number {
        return 11000000;
     }
     getTotalSeats(): number {
        return 7;
     }
     Color(): string {
        return 'white';
    }
}

let toyota = new Toyota();

console.log(toyota.CallFacility());
// 

// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .

// we can solve this problem by using abstract class ..

// 

// we can not create a instace or object of abstract class .

// let objCar = new Car();







// full time  8 

// contract 

abstract class Employee {
    name: string;
    paymentPerHour: number;

    // parameterisied constructor
    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    // this method is abstract method only declartion 
    public abstract CalculateSalary(): number;


}

//let empl = new Employee();

class Contractor extends Employee {
   

    hoursOfWorking: number;

    constructor(name: string, paymentPerHour: number, hoursOfWorking: number) 
    {
        // parent class constructor by using super.
        super(name, paymentPerHour);
        this.hoursOfWorking = hoursOfWorking;
    }

    public CalculateSalary(): number {
        return this.paymentPerHour * this.hoursOfWorking;
    }
}


class FullTimeEmployee  extends Employee {
   
    // parameterised contructor
    constructor(name: string, paymentPerHour: number) {
        super(name, paymentPerHour);
    }

    public CalculateSalary(): number {
       return this.paymentPerHour * 8;
    }
}

let  objcontractor = new Contractor('Harry', 8, 10); // 40 
let objfullTimeEmployee = new FullTimeEmployee('Jack', 8);

console.log(objcontractor.CalculateSalary());
console.log(objfullTimeEmployee.CalculateSalary());