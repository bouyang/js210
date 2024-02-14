var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This is global
// When myVar is logged, the global variable declared and assigned on line 1 is in scope inside the function
// invocation