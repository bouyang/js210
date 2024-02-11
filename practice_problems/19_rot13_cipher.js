function rot13(input) {
  const ROTATION_OFFSET = 13;

  let result = '';

  for (let index = 0; index < input.length; index += 1) {
    let charCode = input.charCodeAt(index);

    if (inFirstHalfAlphabet(input[index])) {
      charCode += ROTATION_OFFSET;
    } else if (inSecondHalfAlphabet(input[index])) {
      charCode -= ROTATION_OFFSET;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

function inFirstHalfAlphabet(letter) {
  return (letter >= 'A' && letter <= 'M') || (letter >= 'a' && letter <= 'm');
}

function inSecondHalfAlphabet(letter) {
  return (letter >= 'N' && letter <= 'Z') || (letter >= 'n' && letter <= 'z');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
//Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
//Teachers open the door, but you must enter by yourself.

function isUppercase(letter) {
  return (letter >= 'A' && letter <= 'Z');
}

function isLowercase(letter) {
  return (letter >= 'a' && letter <= 'z');
}

function isAlpha(letter) {
  return (isUppercase(letter) || isLowercase(letter));
}

function rot13_2(input, offset) {
  const LETTERS_IN_ALPHABET = 26;
  const UPPERCASE_ASCII = 90;
  const LOWERCASE_ASCII = 122;

  if (offset === undefined) {
    offset = 0;
  }

  let result = '';
  new_offset = offset % LETTERS_IN_ALPHABET;

  for (let index = 0; index < input.length; index += 1) {
    let charCode = input.charCodeAt(index);

    if (isAlpha(input[index])) {
      charCode += new_offset;

      if ((isUppercase(input[index]) && charCode > UPPERCASE_ASCII) || (isLowercase(input[index]) && charCode > LOWERCASE_ASCII)) {
        charCode -= LETTERS_IN_ALPHABET;
      }
    }
    
    result += String.fromCharCode(charCode);
  }

  return result;
}

console.log(rot13_2('Teachers open the door, but you must enter by yourself.', 39));