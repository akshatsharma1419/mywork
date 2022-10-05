class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(40);
root.left = new Node(30);
root.left.right = new Node(35);
root.left.left = new Node(10);
root.right = new Node(50);
root.right.left = new Node(45);
root.right.right = new Node(60);

/**
       40
  30        50
10   35   45  60
 */

function countNodes(root) {
  if (root == null) return 0;
  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return 1 + left + right;
}

function kMin(root, k) {
  if (root == null) return null;
  let left = kMin(root.left, k);
  if (left != null) return left;
  k[0]--;
  if (k[0] == 0) return root.value;
  return kMin(root.right, k);
}

console.log(kMin(root, [2]));

console.log(countNodes(root));
