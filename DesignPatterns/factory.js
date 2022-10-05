// Design Pattern: General solution to common software development problems
// that we can modify to solve our particular problem
/*
Types- 
  Creational: All about providing object creation mechanism, promote flexibility and reusalibility
  Structural: 
  Behavioral: 
*/

// Factory Design pattern (Creational pattern)
// Just an object that creates other objects
// Create objects in centralized location

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeesFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

const employeefactory = new EmployeesFactory();
const employees = [];

employees.push(employeefactory.create("Akshat", 1));

employees.push(employeefactory.create("Kundan", 2));
