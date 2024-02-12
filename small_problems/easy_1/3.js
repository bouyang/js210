const rls = require('readline-sync');

console.log("Enter the length of the room in meters:");
let length = rls.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = rls.prompt();
width = parseInt(width, 10);

let areaMeters = (length * width);
let areaFeet = (length * width * 10.7639);

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)