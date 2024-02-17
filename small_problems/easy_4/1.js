function dms(num) {
  let deg = Math.floor(num);
  let remainder = num - deg;
  let minutes = 0;
  let seconds = 0;

  if (remainder !== 0) {
    minutes = Math.floor(remainder * 60);
    if (remainder - minutes !== 0) {
      seconds = Math.floor((remainder * 60 - minutes) * 60);
    }
  }

  return `${deg}˚${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"