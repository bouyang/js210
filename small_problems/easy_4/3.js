function halvsies(arr) {
  let half1 = [];
  let half2 = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index < (arr.length / 2)) {
      half1.push(arr[index]);
    } else {
      half2.push(arr[index]);
    }
  }

  return ([half1, half2]);
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]