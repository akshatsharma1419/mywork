// Height

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
tree.left.right = new Node(40);
tree.left.left = new Node(50);
tree.left.left.left = new Node(70);
tree.right.left = new Node(60);

function height(root) {
  if (root == null) return 0;
  let left = height(root.left);
  let right = height(root.right);
  return 1 + Math.max(left, right);
}

console.log(height(tree));

function checkIfBalanaced(root) {
  if (root == null) return 0;
  let left = checkIfBalanaced(root.left);
  let right = checkIfBalanaced(root.right);
  if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1;
  return 1 + Math.max(left, right);
}

console.log(checkIfBalanaced(tree));

// Diameter

function diameter(root, max) {
  if (root == null) return 0;

  let left = diameter(root.left, max);
  let right = diameter(root.right, max);
  max[0] = Math.max(left + right, max[0]);
  return 1 + Math.max(left, right);
}

const ans = [];
ans[0] = 0;
diameter(tree, ans);
console.log(ans);

// Max path sum

function maxPathSum(root, max) {
  if (root == null) return 0;
  let left = maxPathSum(root.left, max);
  let right = maxPathSum(root.right, max);
  max[0] = Math.max(max[0], root.value + left + right);
  return root.value + Math.max(left, right);
}

const ans2 = [];
ans2[0] = 0;
maxPathSum(tree, ans2);
console.log(ans2);

// Identical

function identical(root1, root2) {
  if (root1 == null || root2 == null) return root1 == root2;
  return (
    root1.value == root2.value &&
    identical(root1.left, root2.left) &&
    identical(root1.right, root2.right)
  );
}

// Vertical Order

function vertical(tree) {
  let output = {};
  let queue = [];
  queue.push([tree, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr[0].left != null) queue.push([curr[0].left, curr[1] - 1]);
      if (curr[0].right != null) queue.push([curr[0].right, curr[1] + 1]);
      curr[1] in output
        ? (output[curr[1]] = [...output[curr[1]], curr[0].value])
        : (output[curr[1]] = [curr[0].value]);
    }
  }
  console.log(output);
}

vertical(tree);

// Top View

function top(root) {
  let output = {};
  let queue = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.pop();
      curr[1] in output ? "" : (output[curr[1]] = curr[0].value);
      if (curr[0].left != null) queue.push([curr[0].left, curr[1] - 1]);
      if (curr[0].right != null) queue.push([curr[0].right, curr[1] + 1]);
    }
  }
  console.log(output);
}

top(tree);

// Root to node path

function rootToNodePath(root, node, path) {
  if (root == null) return false;
  path.push(root.value);
  if (root.value === node.value) return true;
  if (
    rootToNodePath(root.left, node, path) == true ||
    rootToNodePath(root.right, node, path)
  )
    return true;
  path.pop();
  return false;
}

const path = [];
rootToNodePath(tree, tree.left.left.left, path);

console.log(path);

// LCA

function LCA(root, node1, node2) {
  if (root === null || root.value == node1.value || root.value == node2.value)
    return root;
  let left = LCA(root.left, node1, node2);
  let right = LCA(root.right, node1, node2);
  if (left == null) return right;
  else if (right == null) return left;
  else return root;
}

console.log(LCA(tree, tree.left.left.left, tree.left.right));
