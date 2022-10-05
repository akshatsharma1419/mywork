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

const tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(20);
tree.left.left = new Node(40);
tree.left.right = new Node(60);
tree.right.left = new Node(50);
tree.right.right = new Node(40);

function isSymmetric(root) {
  if (root == null) return true;
  if (root.left == null || root.right == null) return root.left == root.right;
  return check(root.left, root.right);
}

function check(root1, root2) {
  if (root1 == null || root2 == null) return root1 == root2;
  return (
    root1.value == root2.value &&
    check(root1.left, root2.right) &&
    check(root1.right, root2.left)
  );
}

console.log(isSymmetric(tree));
