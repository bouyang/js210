function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The logger function has access to variables in its outer scope so status on line 2 is accessible to the
// function