var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This is global
// The function someFunction() defines a new local variable myVar but that variable is not in scope in line 8