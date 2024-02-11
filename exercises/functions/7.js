let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Same as previous; the variable a in line 4 is a local variable for the function's scope which shadows the global
// variable declared on line 1 but still does not affect it