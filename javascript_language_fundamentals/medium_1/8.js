function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// The total function does not return any value
// The sum variable in the total function does not have a value assigned to it so it is undefined and cannot
// be added to so it is NaN at the end of each iteration of the for loop on line 9