let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// [1, 2, 10]
// When myValue is invoked passing in a as an argument, the reference to the array pointed to be a is passed into
// the function and assigned to the parameter b. b[2] += 7 assigns a new value to b[2] as 10.
// The array a and b both point to the same array, so when a is logged on line 8, it also has 10 as
// the value found in a[2]