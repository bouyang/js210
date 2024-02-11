function generatePattern(nStars) {
  for (let count = 1; count <= nStars; count += 1) {
    let result = '';
    for (let numOutput = 1; numOutput <= count; numOutput += 1) {
      result += numOutput;
    }
    for (let stars = 1; stars <= Number(nStars) - count; stars += 1) {
      result += '*';
    }
    console.log(result);
  }
}

generatePattern(7);