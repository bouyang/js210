const readlineSync = require('readline-sync');

let number = readlineSync.question('Please enter an integer greater than 0: ');
let answer = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
let result;

if (answer === 's') {
  result = 0;
  answer = 'sum';
} else {
  result = 1;
  answer = 'product';
}

for (let counter = 1; counter <= number; counter += 1) {
  if (answer === 'sum') {
    result += counter;
  } else {
    result *= counter;
  }
}

console.log(`The ${answer} of the integers between 1 and ${number} is ${result}`);