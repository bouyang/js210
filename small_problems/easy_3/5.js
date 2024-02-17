function isPalindrome(inputStr) {
  return inputStr === inputStr.split('').reverse().join('');
}

function isRealPalindrome(inputStr) {
  let newStr = inputStr.toLowerCase();

  const regex = /[^a-z0-9]/g;
  newStr = newStr.replaceAll(regex, '');
  
  return isPalindrome(newStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false