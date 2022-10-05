// Remove nth node from end

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
  removeNthFromLast(n) {
    let start = new Node();
    start.next = this.head;
    let fast = start;
    let slow = start;
    while (n > 0) {
      n--;
      fast = fast.next;
    }
    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
    this.head = start.next;
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
ll.removeNthFromLast(3);
ll.print();
