class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor(value) {
    this.head = new Node(value);
  }

  addFirst(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  addLast(value) {
    let node = new Node(value);
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  print() {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.reverse();
ll.print();
