let x = require('readline-sync');

console.log("Enter the first number:");
let num1 = Number(x.prompt());
console.log("Enter the second number:");
let num2 = Number(x.prompt());

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);