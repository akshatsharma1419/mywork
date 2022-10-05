class Node {
  val;
  next;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor(val) {
    this.head = new Node(val);
  }
  addFront(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
  }
  addLast(val) {
    let node = new Node(val);
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
  }
  reverse() {
    let prev = null,
      curr = this.head,
      next;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

let ll = new LinkedList(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.reverse();
ll.print();
