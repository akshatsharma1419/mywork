// Builder pattern (creational pattern)
// used to construct complex objects, piece by piece
// seperate object construction from it representation

function Person(name, height, weight, gender) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.gender = gender;
}

function PersonBuilder(name, gender) {
  this.name = name;
  this.gender = gender;

  this.setWeight = function (weight) {
    this.weight = weight;
    return this;
  };

  this.setHeight = function (height) {
    this.height = height;
    return this;
  };

  this.build = function () {
    return new Person(this.name, this.height, this.weight, this.gender);
  };
}

const akshat = new PersonBuilder("Akshat", "Male");
akshat.setHeight(168).setWeight(58).build();
