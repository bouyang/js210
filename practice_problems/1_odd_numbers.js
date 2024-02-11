function logOddNumbers(num) {
  for (let count = 1; count <= num; count++) {
    if (count % 2 === 1) {
      console.log(count);
    }
  }
}

logOddNumbers(19);