function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    if (num % 15 === 0) {
      console.log(num + '!');
    } else if (num % 5 === 0 || num % 3 == 0) {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive();