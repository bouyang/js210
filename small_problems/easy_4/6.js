function showMultiplicativeAverage(arr) {
  let result = 1;

  arr.forEach(element => {
    result *= element;
  })

  result /= arr.length;

  return result.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"