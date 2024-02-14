let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

// [1, 2, 3]
// [1, 2, 3]
// myOtherArray is assigned to myArray on line 2 so both variables point to the same array object.
// When the pop method is called on myArray, the last value is deleted so the array that both the
// variables reference is [1, 2, 3]
// On line 8, myArray is re-assigned to a new array [1, 2] but myOtherArray still points to the old
// array so it logs [1, 2, 3] again on line 10