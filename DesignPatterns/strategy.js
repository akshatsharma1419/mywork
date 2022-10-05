// Strategy Design pattern
/**
Encapsulate a group of closely related algorithms.
 */

function Fedex() {
  this.calculate = (package) => {
    return 2;
  };
}

function Bluedart() {
  this.calculate = (package) => {
    return 5;
  };
}

function DTDC() {
  this.calculate = (package) => {
    return 3.5;
  };
}

function Shipping() {
  this.company = "";
  this.setStarategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const package = { from: "Kolkata", to: "Delhi", weight: 10 };
const fedex = new Fedex();
const bluedart = new Bluedart();
const dtdc = new DTDC();

const shipping = new Shipping();
shipping.setStarategy(fedex);
console.log(shipping.calculate(package));
