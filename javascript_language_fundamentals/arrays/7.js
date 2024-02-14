function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let value = arr[0];

  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }
  arr.length = arr.length - 1;

  return value;
}

function unshift(arr, ...args) {
  for (let index = 0; index < args.length; index += 1) {
    for (let index2 = arr.length; index2 > 0; index2 -= 1) {
      arr[index2] = arr[index2 - 1];
    }
    arr[0] = args[index];
  }
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]