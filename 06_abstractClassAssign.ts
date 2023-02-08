
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
        isGPSavailable() : string {
            return "GPS available";
        }
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
    isGPSavailable() : string {
        return "GPS facility is not available in TOYOTA.";
    }
}
   console.log(`***Created the new object from the class Toyota***`);
   
let myToyota = new Toyota();
console.log(`price of toyota car is ${myToyota.Price()}.`);
console.log(`Seats in toyota car is ${myToyota.getTotalSeats()}`);
console.log(`color of toyota car is ${myToyota.Color()}`);
console.log(`GPS facility is not available in TOYOTA.`);

//console.log(myToyota.isGPSavailable());
console.log(`---------------------------------------------------------`);

console.log(`***Created the new object from the class Hyundai***`);
let myHyundai = new Hundyai();
console.log(`price of Hyundai car is ${myHyundai.Price()}.`);
console.log(`Seats in Hyundai car is ${myHyundai.getTotalSeats()}`);
console.log(`color of Hyundai car is ${myHyundai.Color()}`);
console.log(`Is GPS is available in the Hyundai Car: ${myHyundai.isGPSavailable()}`);