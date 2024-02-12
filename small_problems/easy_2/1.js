function crunch(input) {
  let result = '';

  for (let index = 0; index < input.length; index += 1) {
    if (input[index] !== input[index + 1]) {
      result += input[index];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""