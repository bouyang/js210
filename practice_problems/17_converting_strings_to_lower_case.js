function toLowerCase(string) {
  let result = '';
  for (let count = 0; count < string.length; count += 1) {
    if (string[count].charCodeAt(0) < 97 && string[count].charCodeAt(0) > 64) {
      result += String.fromCharCode(string[count].charCodeAt(0) + 32);
    } else {
      result += string[count];
    }
  }
  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"