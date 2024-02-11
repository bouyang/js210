let rls = require('readline-sync');

let scores = 0;

for (let count = 1; count <= 3; count += 1) {
  scores += Number(rls.question('Enter score ' + String(count) + ': '));
}

if (scores / 3 >= 90) {
  console.log('Based on the average of your 3 scores, your letter grade is "A"');
} else if (scores / 3 >= 70) {
  console.log('Based on the average of your 3 scores, your letter grade is "B"');
} else if (scores / 3 >= 50) {
  console.log('Based on the average of your 3 scores, your letter grade is "C"');
} else {
  console.log('Based on the average of your 3 scores, your letter grade is "F"');
}