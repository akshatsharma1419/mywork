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
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);
tree.right.left = new Node(60);

const tree2 = new Node(10);
tree2.left = new Node(20);
tree2.right = new Node(30);
tree2.left.left = new Node(40);
tree2.left.right = new Node(50);
tree2.right.left = new Node(60);

function isIdentical(root1, root2) {
  if (root1 == null || root2 == null) return root1 == root2;
  return (
    root1.value == root2.value &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}

console.log(isIdentical(tree, tree2));
