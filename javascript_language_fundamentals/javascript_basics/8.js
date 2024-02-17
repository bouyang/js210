const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(str) {
  let numArray = str.split('');
  let result = 0;
  let negativeNum = false;
  let multiCounter = 1;

  if(numArray[0] === '-') {
    endIndex = 1;
    negativeNum = true;
  } else if(numArray[0] === '+') {
    endIndex = 1;
  } else {
    endIndex = 0;
  }

  for(let index = numArray.length - 1; index >= endIndex; index -= 1) {
    result += multiCounter * (DIGITS[numArray[index]]);
    multiCounter *= 10;
  }
  
  if (negativeNum) {
    return result * -1;
  }
  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100