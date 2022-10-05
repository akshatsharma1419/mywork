class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.null == null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
//root.right.left = new Node(60);
root.left.left.left = new Node(70);

/**
       10
    20    30
  40  50 60
70
 */

function height(node) {
  if (node == null) return 0;
  let left = height(node.left);
  let right = height(node.right);
  return 1 + Math.max(left, right);
}

function checkIfBalanced(root) {
  if (root == null) return true;
  let leftH = height(root.left);
  let rightH = height(root.right);
  if (Math.abs(leftH - rightH) > 1) return false;
  return checkIfBalanced(root.left) && checkIfBalanced(root.right);
}

console.log(checkIfBalanced(root));

// Optimized

function checkIfBalanced2(root) {
  if (root == null) return 0;
  let left = checkIfBalanced2(root.left);
  let right = checkIfBalanced2(root.right);
  if (Math.abs(left - right) > 1 || left === -1 || right === -1) return -1;
  return 1 + Math.max(left, right);
}

console.log(checkIfBalanced2(root));
