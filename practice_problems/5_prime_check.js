let isPrime = (number) => {
  let multiples = 0;

  for (let count = 1; count <= number; count += 1) {
    if (number % count === 0) {
      multiples += 1;
    }
  }

  return multiples === 2;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false