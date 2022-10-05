class Node {
  left;
  right;
  value;
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.right = new Node(70);

/**
          10
      20      30
  40     50 60
    70
 */

// Height //
function height(root) {
  if (root == null) return 0;
  let left = height(root.left);
  let right = height(root.right);
  return 1 + Math.max(left, right);
}

console.log("Height is:", height(root));

// Diameter
function diameter(root, max) {
  if (root == null) return 0;
  let left = diameter(root.left, max);
  let right = diameter(root.right, max);
  max[0] = Math.max(max[0], left + right);
  return 1 + Math.max(left, right);
}
const max = new Array(1).fill(0);
diameter(root, max);
console.log("Diameter is: ", max[0]);

// Max Path Sum
function maxSum(root, max) {
  if (root == null) return 0;
  let left = maxSum(root.left, max);
  let right = maxSum(root.right, max);
  max[0] = Math.max(max[0], left + right + root.value);
  return root.value + Math.max(left, right);
}
const max2 = new Array(1).fill(0);
console.log(maxSum(root, max2));
console.log("Max sum is: ", max2[0]);

// Root to node path
function rootToNodePath(root, node, path) {
  if (root == null) return false;
  path.push(root.value);
  if (root.value === node.value) return true;
  if (
    rootToNodePath(root.left, node, path) ||
    rootToNodePath(root.right, node, path)
  )
    return true;
  path.pop();
  return false;
}

const path = [];
rootToNodePath(root, root.left.left.right, path);
console.log("Path from root to node is:", path);

// Ancestor
function ancestor(root, node1, node2) {
  if (root == null || root.value === node1.value || root.value === node2.value)
    return root;
  let left = ancestor(root.left, node1, node2);
  let right = ancestor(root.right, node1, node2);
  if (left == null) return right;
  else if (right == null) return left;
  else return root;
}

console.log(
  "Ancestor : ",
  ancestor(root, root.left.left.right, root.left.right).value
);
