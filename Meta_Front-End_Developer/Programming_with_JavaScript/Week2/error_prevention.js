function addTwoNums(a, b) {
  try {
    if (typeof a != "number" || typeof b != "number") {
      throw new ReferenceError("The arguments are not numbers");
    } else {
      console.log(a + b);
    }
  } catch (error) {
    console.log("Error!", error);
  }
}

addTwoNums(5, "5");
console.log("It still works");
