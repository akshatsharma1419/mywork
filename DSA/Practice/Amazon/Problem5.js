// Lowest Common Ancestor

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(5);
root.left = new Node(10);
root.right = new Node(8);
root.left.left = new Node(6);
root.right.left = new Node(3);
root.left.right = new Node(1);
root.right.right = new Node(2);

function lca(root, node1, node2) {}
