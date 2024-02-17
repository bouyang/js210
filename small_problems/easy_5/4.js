function centerOf(inputStr) {
  let length = inputStr.length;
  if (length % 2 === 1) {
    return inputStr[Math.floor(length / 2)];
  } else {
    return inputStr[length / 2 - 1] + inputStr[length / 2];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"