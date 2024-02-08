let x = require('readline-sync');

let phrase = x.question('Please enter a phrase: ');

phrase = phrase.replaceAll(/ /g, '');

console.log(`There are ${phrase.length} characters in ${phrase}`);