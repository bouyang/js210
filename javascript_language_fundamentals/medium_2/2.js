const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The === operator tests for if the two objects are the same object, not if they have the same value as in
// this case. Becuase person and otherPerson reference differnet objects, it evaluates to false.

// To fix this, otherPerson = person;