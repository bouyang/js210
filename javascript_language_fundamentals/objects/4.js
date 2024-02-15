const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// 678
// 456
// On line 11, the value for the object with key `prop2` is logged. This was set to `678` on line 9
// On line 12, the value for the object with the key prop2 is logged. This refers to the string 'prop2' which
// was re-assigned to 456 on line 8