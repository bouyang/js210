var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This is local
// When someFunction is invoked, on line 4, myVar which was declared as a global variable is in scope in the
// function so it is able to be access and thus re-assigned to This is local.