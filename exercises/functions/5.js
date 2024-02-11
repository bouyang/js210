function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This is global
// When someFunction is invoked, myVar wants to be re-assigned to This is global but myVar is not declared in
// the local scope in the function definition nor the outer scope. JS will then create a new global variable
// and assign it to This is global. On line 6, when myVar is logged, it is referencing this new global var