function concat(array1, ...args) {
  let result = array1.slice();

  for(let idx = 0; idx < args.length; idx += 1) {
    if (Array.isArray(args[idx])) {
      for (let index = 0; index < args[idx].length; index += 1) {
        result.push(args[idx][index]);
      }
    } else {
      result[result.length] = args[idx];
    }
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]