let isPrime = (number) => {
  let multiples = 0;

  for (let count = 1; count <= number; count += 1) {
    if (number % count === 0) {
      multiples += 1;
    }
  }

  return multiples === 2;
}

let checkGoldbach = (expectedSum) => {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
  } else {
    for (let count = 1; count < expectedSum; count += 1) {
      if (isPrime(count)) {
        if (isPrime(expectedSum - count) && (expectedSum - count) >= count) {
          console.log(count + ' ' + (expectedSum - count));
        }
      }
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);