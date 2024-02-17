function retire(age, target) {
  let year = new Date().getFullYear();
  let retireYear = year + (target - age);

  console.log(`It's ${year}. You will retire in ${retireYear}.`);
  console.log(`You have only ${target - age} years of work to go!`);
}

retire(30, 70);