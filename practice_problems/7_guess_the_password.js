let rls = require('readline-sync');

const PASSWORD = '123';

let count = 0;

while (count < 3) {
  let guess = rls.question('What is the password: ');

  if (guess === PASSWORD) {
    console.log('You have sucessfully logged in.')
    return;
  }
  
  count += 1;
}

console.log('You have been denied access.');