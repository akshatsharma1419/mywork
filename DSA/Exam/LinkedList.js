// LRU

class DoublyLinkedList {
  next;
  prev;
  value;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRU {
  head;
  tail;
  map;
  capacity;
  constructor(capacity) {
    this.head = new DoublyLinkedList(0);
    this.tail = new DoublyLinkedList(0);
    this.map = new Map();
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addItem(value) {
    if (this.map.size === this.capacity && !this.map.has(value)) {
      this.remove();
      this.addFront(new DoublyLinkedList(value));
    } else if (!this.map.has(value)) this.addFront(new DoublyLinkedList(value));
    else {
      this.updateFrontNext(value);
    }
  }

  getItem(value) {
    if (!this.map.has(value)) return -1;
    else {
      this.updateFrontNext(value);
      return this.map.get(value).value;
    }
  }

  remove() {
    let toRemove = this.tail.prev;
    toRemove.prev.next = toRemove.next;
    toRemove.next.prev = toRemove.prev;
    this.map.delete(toRemove.value);
  }

  addFront(dll) {
    let nextH = this.head.next;
    nextH.prev = dll;
    dll.next = nextH;
    this.head.next = dll;
    this.map.set(dll.value, dll);
  }

  updateFrontNext(value) {
    let item = this.map.get(value);
    item.next.prev = item.prev;
    item.prev.next = item.next;
    this.addFront(item);
  }
}

const lru = new LRU(3);
// lru.addItem(10);
// lru.addItem(20);
// console.log(lru.getItem(10));
// lru.addItem(30);
// console.log(lru.getItem(20));
// lru.addItem(40);
// console.log(lru.getItem(30));
// console.log(lru.getItem(20));
// console.log(lru.getItem(10));

// reverse a linked list

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

  add(value) {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }

  print() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null,
      next = null;
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
ll.add(20);
ll.add(30);
ll.add(40);
ll.reverse();
ll.print();
