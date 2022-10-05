// Observer Pattern
// One to many dependancy. Obserbers watch for the producers.

function Subject() {
  this.observers = [];
}
Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter((fn) => fn != fn);
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

const subject = new Subject();
function obs1() {
  console.log("Observer 1");
}
function obs2() {
  console.log("Observer 2");
}

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.fire();

subject.unsubscribe(obs2);
