var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Car.prototype.CallFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'white';
    };
    Toyota.prototype.isGPSavailable = function () {
        return "GPS available";
    };
    return Toyota;
}(Car));
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return 'gray';
    };
    Hundyai.prototype.isGPSavailable = function () {
        return "GPS facility is not available in TOYOTA.";
    };
    return Hundyai;
}(Car));
console.log("***Created the new object from the class Toyota***");
var myToyota = new Toyota();
console.log("price of toyota car is ".concat(myToyota.Price(), "."));
console.log("Seats in toyota car is ".concat(myToyota.getTotalSeats()));
console.log("color of toyota car is ".concat(myToyota.Color()));
console.log("GPS facility is not available in TOYOTA.");
//console.log(myToyota.isGPSavailable());
console.log("---------------------------------------------------------");
console.log("***Created the new object from the class Hyundai***");
var myHyundai = new Hundyai();
console.log("price of Hyundai car is ".concat(myHyundai.Price(), "."));
console.log("Seats in Hyundai car is ".concat(myHyundai.getTotalSeats()));
console.log("color of Hyundai car is ".concat(myHyundai.Color()));
console.log("Is GPS is available in the Hyundai Car: ".concat(myHyundai.isGPSavailable()));
