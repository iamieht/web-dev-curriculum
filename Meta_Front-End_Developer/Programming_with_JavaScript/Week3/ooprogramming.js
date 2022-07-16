// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object
var intern = new Worker(
  "Bob",
  (age = 21),
  (energy = 110),
  (xp = 0),
  (hourlyWage = 10)
);

// Task 4: Code a manager object
var manager = new Worker(
  "Alice",
  (age = 30),
  (energy = 120),
  (xp = 100),
  (hourlyWage = 30)
);

// Task 5: Run methods on object instances
intern.goToWork();
manager.doSomethingFun();
