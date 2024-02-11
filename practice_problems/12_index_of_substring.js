function indexOf(firstString, secondString) {
  let ssLength = secondString.length;
  for (let index = 0; index < firstString.length; index += 1) {
    if (firstString.slice(index, index + ssLength) === secondString) {
      return index;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let result = -1;
  let ssLength = secondString.length;
  for (let index = 0; index < firstString.length; index += 1) {
    if (firstString.slice(index, index + ssLength) === secondString) {
      result = index;
    }
  }
  return result;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1