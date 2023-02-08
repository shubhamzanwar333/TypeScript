// alert("hello all");
// confirm("Are you sure?");
var sub1 = Number(prompt("Please enter Maths score:"));
console.log("maths: ".concat(sub1));
var sub2 = Number(prompt("Please enter Physics score:"));
console.log("Physics: ".concat(sub2));
var sub3 = Number(prompt("Please enter Chemistry score:"));
console.log("Chemistry: ".concat(sub3));
var avg = (sub1 + sub2 + sub3) / 3;
console.log("The average of three subjects is: ".concat(avg));
var newAvg = avg.toFixed(2);
console.log(newAvg);
if (avg < 70) {
    console.log("Your grade is C.");
}
if (avg > 70 && avg < 90) {
    console.log("Your grade is B.");
}
if (avg > 90) {
    console.log("Your grade is A.");
}
// alert(data);
// parseInt('32px'); // 32 
// Number('32dny'); // NaN
// let x1: unknown = "I am any";
// let y1:number = 888;
// y1=x1;
// console.log(y1);
