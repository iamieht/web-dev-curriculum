"use strict"; // activating strict mode for more secure code

// // Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));

// // Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// function checkWinner(team1, team2) {
//   if (team1 >= 2 * team2) {
//     console.log(`Team 1 wins (${team1} vs. ${team2})`);
//   } else if (team2 >= 2 * team1) {
//     console.log(`Team 2 wins (${team2} vs. ${team1})`);
//   } else {
//     console.log(`No team wins`);
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

// // Coding Challenge #2

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

// const bills = new Array(125, 555, 44);
// const tips = new Array(
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1])
// );
// const totals = new Array(
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[bills.length - 1] + tips[tips.length - 1]
// );
// console.log(calcTip(100));
// console.log(bills, tips, totals);

// // Objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// // Coding Challenge #3
// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`
//   );
// } else {
//   console.log(
//     `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`
//   );
// }

// // For loops
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// Looping Arrays
// const bills = new Array(125, 555, 44);
// for (let i = 0; i < bills.length; i++) {
//   console.log(bills[i]);
// }

// bills.forEach((element) => {
//   console.log(element);
// });

// // While loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

function calcAverage(Array) {
  let total = 0;
  Array.forEach((element) => {
    total += element;
  });
  return total / Array.length;
}

console.log(calcAverage(totals));
