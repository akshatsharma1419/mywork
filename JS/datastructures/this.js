/*
Object binding types:
  Implicit- When we normally call a func
  Explicit- Using call apply and bind
*/
// Used to reference something
// this points to windpw object

// This in arrow function takes reference from outer function

let user = {
  name: "Akshat",
  age: 25,
  details() {
    console.log(this.name, this.age);
  },
};
//Prints- Akshat 25
let user2 = {
  name: "Akshat",
  age: 25,
  details: () => {
    console.log(this.name, this.age);
  },
};
// Return nothing, as this points to nearest parent, here window

let user3 = {
  name: "Akshat",
  age: 25,
  childObj: {
    lastName: "Sharma",
    getDetails() {
      console.log(this.name, this.lastName);
    },
  },
};
// prints undefined Sharma
let user4 = {
  name: "Akshat",
  age: 25,
  childObj: {
    lastName: "Sharma",
    getDetails: () => {
      console.log(this.name, this.lastName);
    },
  },
};
// prints Akshat

// ----------------------------------------------
let calculator = {
  read() {
    this.a = prompt("Give first number", 0);
    this.b = prompt("Give second number", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// Implement calc

const calc = {
  total: 0,
  add(val) {
    this.total += val;
    return this;
  },
  multiply(val) {
    this.total *= val;
    return this;
  },
  subtract(val) {
    this.total -= val;
    return this;
  },
  divide(val) {
    this.total /= val;
    return this;
  },
};

const result = calc.add(10).multiply(20).add(5).subtract(30);
console.log(result.total);
