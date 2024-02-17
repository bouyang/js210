function integerToString(number) {
  if (number === 0) {
    return '0';
  }
  
  let result = [];

  while (number > 0) {
    let digit = number % 10;
    result.unshift(digit);
    number = (Math.floor(number / 10));
  }

  return result.join('');
}

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(-number);
  } else {
    return integerToString(number);
  }
}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"