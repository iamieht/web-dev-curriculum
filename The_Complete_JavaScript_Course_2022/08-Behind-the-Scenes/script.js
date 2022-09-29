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

// Hoisting variables
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
