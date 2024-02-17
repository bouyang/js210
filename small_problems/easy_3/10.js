function wordSizes(input) {
  if(!input) {
    return {};
  }
  
  let result = {};

  input.split(' ').forEach(word => {
    const regex = /[^A-Za-z]/g;
    word = word.replaceAll(regex, '');
    
    if(!result[word.length]) {
      result[word.length] = 0;
    }
    result[word.length] += 1;
  })

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}