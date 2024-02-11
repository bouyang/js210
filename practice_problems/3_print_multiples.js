function logMultiples(number) {
  for (let count = 100; count >= number; count -= 1) {
    if (count % number === 0 && count % 2 === 1) {
      console.log(count);
    }
  }
}

logMultiples(17);

logMultiples(21);