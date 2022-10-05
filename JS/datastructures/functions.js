// Function declaration/ defination/ statement
function abc() {}

// Function expression
const func = function () {};

// First class functions- Funcs can be passed into a func and returned from a funcs

// Arrow functions
// Arrow func this points to global object

let user = {
  username: "Akshat",
  printArrow: () => {
    console.log(this.username);
  },
  printFunc: function () {
    console.log(this.username);
  },
};

//
