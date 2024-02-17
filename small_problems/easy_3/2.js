const readlineSync = require('readline-sync');

function search() {
  const numberLabel = ['1st', '2nd', '3rd', '4th', '5th'];
  let numbers = [];

  for(let count = 0; count < 5; count += 1) {
    numbers.push(readlineSync.question(`Enter the ${numberLabel[count]} number: `));
  }

  let lastNum = readlineSync.question(`Enter the last number: `);

  if(numbers.indexOf(lastNum) === -1) {
    console.log(`The number ${lastNum} does not appear in ${numbers}`);
  } else {
    console.log(`The number ${lastNum} appears in [${numbers}]`);
  }
}

search();