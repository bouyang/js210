function union(arr1, arr2) {
  let result = arr1.slice();

  for (let index = 0; index < arr2.length; index += 1) {
    if (!result.includes(arr2[index])) {
      result.push(arr2[index]);
    }
  }

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]