function swap(input) {

  return input.split(' ').map(word => {
    if (word.length === 1) {
      return word;
    }
  
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"