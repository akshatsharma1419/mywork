// Implement 2 stack in array

class TwoStack {
  stack;
  start;
  end;
  size1;
  size2;
  constructor(val) {
    this.stack = new Array(val);
    this.start = 0;
    this.end = val - 1;
    this.size1 = 0;
    this.size2 = 0;
  }

  addToStack1(val) {
    if (this.start < this.end) {
      this.stack[this.start++] = val;
    }
  }
  addToStack2(val) {
    if (this.start < this.end) {
      this.stack[this.end--] = val;
    }
  }
  peekStack1() {
    return this.stack[this.start];
  }
  peekStack2() {
    return this.stack[this.end];
  }
  popStack1() {
    if (this.start == 0) return;
    this.start--;
  }
  popStack2() {
    if (this.end >= this.stack.length - 1) return;
    this.end++;
  }
  getStack1() {
    return this.stack.slice(0, this.start);
  }
  getStack2() {
    return this.stack.slice(this.end + 1, this.stack.length).reverse();
  }
}

let stack = new TwoStack(10);
stack.addToStack1(1);
stack.addToStack1(2);
stack.addToStack2(9);
stack.addToStack2(8);
stack.addToStack2(12);
console.log(stack.getStack1());
console.log(stack.getStack2());
