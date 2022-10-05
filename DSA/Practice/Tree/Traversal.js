class Node {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);
tree.right.left = new Node(60);

function inOrder(root) {
  if (root == null) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

inOrder(tree);
