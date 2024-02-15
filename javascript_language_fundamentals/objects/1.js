const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// The bracket notation can only be used when the key is a string but a is not a string and it does
// not point to a string