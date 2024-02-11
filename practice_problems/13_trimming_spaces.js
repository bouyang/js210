function trim(input) {
  function trimLeft(input) {
    let check = false;
    let result = '';

    for (let index = 0; index < input.length; index += 1) {
      if (input[index] !== ' ' && check === false) {
        check = true;
      }
      if (check) {
        result += input[index];
      }
    }
    return result;
  }

  function trimRight(input) {
    let result = ''
    for (let index = input.length - 1; index > 0; index -= 1) {
      if (input[index] !== ' ') {
        for (let index2 = 0; index2 <= index; index2 += 1) {
          result += input[index2];
        }
        return result;
      }
    }
  }

  return trimRight(trimLeft(input));
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""