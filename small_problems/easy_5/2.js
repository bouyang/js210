function doubleConsonants(inputStr) {
  return inputStr.split('').map(letter => {
    const regex = /[bcdfghjklmnpqrstvwxyz]/ig;
    if (letter.match(regex)) {
      return letter + letter;
    } else {
      return letter;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""