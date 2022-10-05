class Node {
  value;
  left;
  right;
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root == null) return 0;
  let left = height(root.left);
  let right = height(root.right);
  return 1 + Math.max(left, right);
}

const tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);
tree.right.left = new Node(60);
tree.left.left.left = new Node(70);

console.log(height(tree));
