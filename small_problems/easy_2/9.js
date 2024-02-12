function cleanUp(input) {
  let result = '';

  for (let index = 0; index < input.length; index += 1) {
    if (!isAlpha(input[index]) && result[result.length - 1] !== ' ') {
      result += ' '
    } else if (isAlpha(input[index])) {
      result += input[index];
    }
  }

  return result;
}

function isAlpha(letter) {
  if (letter >= 'A' && letter <= 'Z' || letter >= 'a' && letter <= 'z') {
    return true;
  }
  return false;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "