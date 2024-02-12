function multisum(number) {
  let result = 0;

  for (counter = 1; counter <= number; counter += 1) {
    if (counter % 5 === 0 || counter % 3 === 0) {
      result += counter;
    }
  }

  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168