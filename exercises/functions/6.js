let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// 7
// myValue is invoked passing in a as an argument. On line 4, the local variable b is re-assigned to b + 10
// but this does not affect a because it is a primitive value when it is passed in as an argument, only
// the value is passed in