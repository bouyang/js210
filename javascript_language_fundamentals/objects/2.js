const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// The function call of firstName and lastName on line 10 do not include (), so JS returns the
// function instead of the return result of the function itself