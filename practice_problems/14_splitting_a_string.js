function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimiter');
    return;
  }
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(word);
      word = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      word += string[index];
    }
  }
  if (word) {
    console.log(word);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello