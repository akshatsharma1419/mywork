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
tree.right.right = new Node(70);

function ancestor(root, value1, value2) {
  if (root == null || root.value == value1 || root.value == value2) return root;
  let left = ancestor(root.left, value1, value2);
  let right = ancestor(root.right, value1, value2);
  if (left == null) return right;
  else if ((right = null)) return left;
  else return root;
}

console.log(ancestor(tree, 60, 50));
