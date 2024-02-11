function gcd(num1, num2) {
  let result = 1;
  for (let count = 1; count <= num1; count += 1) {
    if (num1 % count === 0 && num2 % count === 0) {
      result = count;
    }
  }
  return result;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1