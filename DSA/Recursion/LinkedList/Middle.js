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
  middle() {
    let start = new Node();
    start.next = this.head;
    let slow = start,
      fast = start;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log("Middle", slow.val);
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
ll.addLast(60);
ll.print();
ll.middle();
