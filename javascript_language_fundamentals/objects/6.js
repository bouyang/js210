const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// No because sum will add all the values from array[-2] to array[2] because array.length is equal to 1 plus
// the highest index which is 2. On line 12, the sum is only dividing by 2 instead of 4 like it should