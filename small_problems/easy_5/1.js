let repeater = function doubleChar(inputStr) {
  return inputStr.split('').map(letter => {
    return letter + letter;
  }).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""