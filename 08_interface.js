// interface IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price?: number;
//     display() : number; // only declaration 
// }
var EXCEL = /** @class */ (function () {
    function EXCEL() {
    }
    EXCEL.prototype.print = function () {
        console.log('EXCEL');
    };
    return EXCEL;
}());
var DOC = /** @class */ (function () {
    function DOC() {
    }
    DOC.prototype.print = function () {
        console.log("DOC");
    };
    return DOC;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log("PDF");
    };
    return PDF;
}());
var objEXCEL = new EXCEL();
objEXCEL.print();
