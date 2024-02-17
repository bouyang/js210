const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

// 3, 4
// 3, 5

// In both cases, the array length is equal to 1 more than the highest index which is 2 in both cases.
// When array[3.4] and array[-2] are assigned values, they are not considered elements because the "key"
// is not a non-negative integer. It is only if we output the length of the keys(array) where those values
// count towards the length; because they are key:value pairs even though they are not elements of the array