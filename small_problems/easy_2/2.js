function logInBox(input) {
  let strLength = input.length;

  console.log(`+-${'-'.repeat(strLength)}-+`);
  console.log(`| ${' '.repeat(strLength)} |`);
  console.log(`| ${input} |`);
  console.log(`| ${' '.repeat(strLength)} |`);
  console.log(`+-${'-'.repeat(strLength)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');