// Visitor pattern
// Allows you to add/provide new operations to object without changing the object
// Used in extending a library

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  accept: function (visitor) {
    visitor(this);
  },
};

const akshat = new Employee("Akshat", 10000);
function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

akshat.accept(ExtraSalary);
