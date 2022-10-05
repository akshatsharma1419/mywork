const user = {
  name: "Akshat",
  age: 25,
};

// To update
user.name = "Sharma";
user["name"] = "Akshat";

// To delete
delete user.age;
delete user["age"];

// Suppose we want to add a property from outside like
const property = "city";
const value = "Kolkata";
user[property] = value;

// Looping
for (key in user) {
  console.log(user[key]);
}
// -------------------------------
// Output based

const numbers = {
  a: 10,
  b: 20,
  c: "Akshat",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

//-----

const a = {};
const b = { a: 1 };
const c = { b: 2 };
a[b] = 123;
a[c] = 234;
console.log(a[b]);

// In the above b and c are converted to string to be stored as key in a
// So after converting it becomes "[object Object]"

//-------

//When we want to stringify only specified items
const shape = {
  radius: 20,
  width: 30,
  height: 10,
};
// In below it only stringify one which is there:
const str = JSON.stringify(shape, ["height", "width"]);

// Object clone
const shapeClone = Object.assign({}, shape);
