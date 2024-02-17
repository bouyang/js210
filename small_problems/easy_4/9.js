function countOccurrences(arr) {
  let result = {};

  arr.forEach(element => {
    result[element] = result[element] || 0;
    result[element] += 1;
  })

  Object.keys(result).forEach(element => {
    console.log(`${element} => ${result[element]}`);
  })
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1