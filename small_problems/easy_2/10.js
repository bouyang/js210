function century(year) {
  let centuryNum = parseInt(year / 100, 10);

  if (year % 100 !== 0) {
    return centuryNum + 1 + centurySuffix(centuryNum + 1);
  }
  return centuryNum + centurySuffix(centuryNum);
}

function centurySuffix(centuryNum) {
  if (catchWithTh(centuryNum % 100)) {
    return 'th';
  }

  let lastDigit = centuryNum % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"