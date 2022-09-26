"use strict"; // activating strict mode for more secure code

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(team1, team2) {
  if (team1 >= 2 * team2) {
    console.log(`Team 1 wins (${team1} vs. ${team2})`);
  } else if (team2 >= 2 * team1) {
    console.log(`Team 2 wins (${team2} vs. ${team1})`);
  } else {
    console.log(`No team wins`);
  }
}

checkWinner(avgDolphins, avgKoalas);
