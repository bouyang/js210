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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"