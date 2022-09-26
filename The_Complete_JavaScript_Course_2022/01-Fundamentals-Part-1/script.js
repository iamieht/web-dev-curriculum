// Assignment 1
// Values and Variables
let country = "Venezuela";
let continent = "America";
let population = "30MM";

console.log(
  "Country:",
  country,
  "Continent:",
  continent,
  "Population:",
  population
);

// Assignment 2
// Data Types
// 1.Number: floating point numbers
// 2.String
// 3.Boolean
// 4.Undefined: value when a variable is not yet defined let children;
// 5.Null: empty value
// 6.Symbol: value that is unique ans cannot be changed.
// 7.BigInt: Larger integers
const isIsland = false;
const language = "Spanish";
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// let, const, var
// let to declare variables that will change
// const to declare variables that won't change
// var is legacy

// Basic operators
// +, -, *, /, **. =. +=. -=, *=, /=. ++. --
// Comparison operators
// >, <, >=, <=, == (without type), === (with type)

// Coding Challenge #1
const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHeight ** 2;

const markHigherBMI = marksBMI > johnsBMI;

console.log("Mark BMI is:", marksBMI, "Johns BMI is:", johnsBMI);
console.log("Is Marks BMI higher than Johns? :", markHigherBMI);

// Coding Challenge #2
if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

// Coding Challenge #3
// Test Data: Dolphins: 96, 108, 89. Koalas: 88, 91, 110
// 1. Calculate Avg Score
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;
// 2. Determined the winner
if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log(`There is a draw`);
} else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins wins`);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(`Koalas wins`);
} else {
  console.log(`There is no winner`);
}
