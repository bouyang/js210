function triangle(num) {
  for (let row = 0; row <= num; row += 1) {
    console.log(`${' '.repeat(num - row)}${'*'.repeat(row)}`);
  }
}

triangle(5);
triangle(9);