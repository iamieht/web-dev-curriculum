// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  const max = getMax(temps);
  const min = getMin(temps);
  return max - min;
};

const getMax = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const getMin = function (arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

console.log(getMax(temperatures));
console.log(getMin(temperatures));
console.log(calcTempAmplitude(temperatures));
