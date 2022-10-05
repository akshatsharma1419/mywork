// Symmetric Binary Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.null == null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(20);
root.left.left = new Node(30);
root.left.right = new Node(40);
root.right.left = new Node(40);
root.right.right = new Node(30);

function checkIfSymmetric(root) {
  console.log(check(root.left, root.right));
}

function check(root1, root2) {
  if (root1 == null || root2 == null) return root1 == root2;
  return (
    root1.val == root2.val &&
    check(root1.left, root2.right) &&
    check(root1.right, root2.left)
  );
}

checkIfSymmetric(root);
