'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
