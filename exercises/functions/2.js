var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This is local
// When someFunction is invoked, on line 4, the local variable myVar is defined and assigned to This is local
// When myVar is logged on line 5, it first looks in the local scope for myVar which is found on line 4