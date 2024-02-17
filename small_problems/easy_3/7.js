function runningTotal(arr) {
  let result = [];
  let total = 0;

  for(let index = 0; index < arr.length; index += 1) {
    total += arr[index];
    result.push(total);
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []