// Diameter- Longest path between any two nodes,
// the path is not necessary to pass through root.

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
    20     30
  40   50
60
 */

function height(root) {
  if (root == null) return 0;
  let left = height(root.left);
  let right = height(root.right);
  return 1 + Math.max(left, right);
}
function diameter(root) {
  if (root == null) return 0;
  let left = height(root.left);
  let right = height(root.right);
  let dLeft = diameter(root.left);
  let dRight = diameter(root.right);
  return Math.max(dLeft, dRight, left + right);
}

function diameter2(root, max) {
  if (root == null) return 0;
  let left = diameter2(root.left, max);
  let right = diameter2(root.right, max);
  max[0] = Math.max(max[0], left + right);
  return 1 + Math.max(left, right);
}

let ans = [];
ans[0] = 0;
diameter2(root, ans);
console.log(ans);
