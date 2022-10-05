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
  addLast(val) {
    let node = new Node(val);
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
  }
  print() {
    let curr = this.head;
    while (curr != null) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

let ll1 = new LinkedList(10);
ll1.addLast(40);
ll1.addLast(50);
ll1.addLast(70);
ll1.addLast(80);
// ll1.print();

let ll2 = new LinkedList(20);
ll2.addLast(30);
ll2.addLast(60);
ll2.addLast(70);
ll2.addLast(90);
// ll2.print();

function merge(l1, l2) {
  let dummy = new Node();
  let start = dummy;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      start.next = new Node(l1.val);
      l1 = l1.next;
    } else {
      start.next = new Node(l2.val);
      l2 = l2.next;
    }
    start = start.next;
  }
  if (l1 != null) {
    start.next = l1;
  }
  if (l2 != null) {
    start.next = l2;
  }
  print(dummy.next);
}

function print(node) {
  let curr = node;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

merge(ll1.head, ll2.head);
