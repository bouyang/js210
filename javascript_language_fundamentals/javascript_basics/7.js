const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(str) {
  let numArray = str.split('');
  let result = 0;

  let multiCounter = 1;

  for(let index = numArray.length - 1; index >= 0; index -= 1) {
    result += multiCounter * (DIGITS[numArray[index]]);
    multiCounter *= 10;
  }
  
  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570